//route=6425947df1938501a485000d
import React, { useState, useEffect } from "react";
import { driverNote, getDriverReview } from "../../api/backend/trajetAPI";
import { StarIcon, CheckIcon } from "@heroicons/react/solid";
import user from "../../assets/images/profil/fakeUser3.png";
import { useNavigate } from "react-router-dom";
//import {URL_REVIEW_SAVED } from "../../constants/urls/urlFrontEnd";
import { URL_REVIEW_SAVED } from "../../constants/urls/urlFrontEnd";
const DriverReview = () => {
  const navigate = useNavigate();
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
    await driverNote({ id: driverId, note: note, routeId: route, });
    navigate(URL_REVIEW_SAVED);
  };

  useEffect(() => {
    driverProfile();
  }, []);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const name = driver.map((drive) => drive.id_user.name);
  //const photo = driver.map((drive) => drive.id_user.id_user_preference.file[0].filename);
  const car = driver.map((drive) => drive.vehicule.brand);
  const driverId = driver.map((drive) => drive.id_user._id);
  const depart = driver.map((drive) => drive.starting_location.split(",", [1]));
  const arrivee = driver.map((drive) => drive.arrival_location.split(",", [1]));
  const date = driver.map((drive) => drive.departure_date);
  const note = rating;

  return (
    <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full  relative  flex flex-col items-center justify-center loginContainer ">
      <div className="w-1/3 rounded-xl px-4 py-4 shadow-lg lg:px-8 bg-cover bg-center bg-slate-100 bg-opacity-90">
        {reviewed ? (
          <div className="flex justify-center pt-6">
            <div className="flex-col justify-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-500 w-20 h-20 grid justify-center items-center ">
                  <div className="text-white  w-12 h-12">
                    <CheckIcon />
                  </div>
                </div>
              </div>
              <p className="text-center pb-8 pt-8 m-1 font-bold flex">
                Vous avez déjà noté !
              </p>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <h4 className="text-center pb-8 m-1 font-bold">
              Votre avis nous intéresse !
            </h4>
            <div className="grid grid-cols-2 ">
              <p className="font-semibold">Trajet effectué le : </p>

              <p className="font-thin">{date}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-semibold"> De : </p>

              <p className="font-thin">{depart}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-semibold uppercase"> à : </p>

              <p className="font-thin">{arrivee}</p>
            </div>
            <div>
              <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
            </div>
            <div className="grid grid-cols-2   ">
              <img src={user} alt="driver" className="w-12 h-12" />

              <div>
                {name} / {car}
              </div>
            </div>
            <div>
              <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
            </div>
            <h6 className="text-center m-1 font-semibold">
              Évaluez votre expérience
            </h6>
            <div className="flex justify-center items-center ">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                //console.log(ratingValue);
                return (
                  <label>
                    <input
                      className="invisible"
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <StarIcon
                      width={30}
                      color={ratingValue <= (hover || rating) ? "gold" : "grey"}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <div className="grid justify-center content-center items-center">
              <button
                className="mt-8 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-2 px-4 uppercase justify-items-center"
                onClick={() => {
                  noteDriver();
                }}
              >
                Notez
              </button>
            </div>
          </>
        )}

        {/* </div> */}
      </div>
    </div>
  );
};

export default DriverReview;
