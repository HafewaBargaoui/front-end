//route=6425947df1938501a485000d
import React, { useState, useEffect } from "react";
import { driverNote, getDriverReview } from "../../api/backend/trajetAPI";

const DriverReview = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const route = queryParameters.get("route");

  const [driver, setdriver] = useState([]);
  const [passenger, setpassenger] = useState([]);
  const [reviewed, setreviewed] = useState([]);
  const driverProfile = async () => {
    const response = await getDriverReview({ route: route });
    console.log(response.data);
    setdriver(response.data.route);
    setpassenger(response.data.passenger);
    setreviewed(response.data.reviewed);
  };

  const noteDriver = async () => {
    await driverNote({id : driverId, note: note, routeId: route,});
  }

  useEffect(() => {
    driverProfile();
  }, []);
  console.log(driver);
  console.log(passenger);
  console.log(reviewed);

  
  const name = driver.map((drive) => (drive.id_user.name));
  const driverId = driver.map((drive) => (drive.id_user._id));
  const depart = driver.map((drive) => (drive.starting_location.split(",", [1])));
  const arrivee = driver.map((drive) => (drive.arrival_location.split(",", [1])));
  const note = 5;

  return (
    <div className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
      <div className="w-full max-w-lg h-96 max-h-lg flex justify-center items-center lg:px-8 bg-white bg-opacity-30 rounded-lg shadow-lg shadow-gray-900/80">
        <div className="grid grid-flow-row">
        {
          reviewed ? 

          <p className="text-black text-center font-semibold">
             vous avez deja noté {name}
            </p>

          :
          <>

            <p className="text-black text-center font-semibold">
              Vous avez fait le trajet :{depart} / {arrivee}
            </p>
            <p className="text-black text-center font-semibold">
             Avec : {name}
            </p>
            <button 
                  className='bg-vert hover:bg-verth p-1 rounded-md shadow-md uppercase'
                   onClick={()=>{noteDriver()}}
                  >
                  Notez
                </button>
          </>
        }
        </div>
      </div>
    </div>
  );
};

export default DriverReview;
