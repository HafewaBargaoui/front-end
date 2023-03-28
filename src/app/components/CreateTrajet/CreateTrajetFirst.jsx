import React from "react";
import CreateDepart from "./Select_CreateTrajet/CreateDepart";
import CreateArrive from "./Select_CreateTrajet/CreateArrive";
import SelectVehicule from "./Select_CreateTrajet/SelectVehicule";

const CreateTrajetFirst = ({
  click,
  filteredDepart,
  filteredArrive,
  setselectedDepart,
  selectedDepart,
  setselectedArrive,
  selectedArrive,
  depart,
  arrive,
  setDepart,
  setArrive,
  setheureDepart,
  setdateDepart,
  vehicule,
  selectedvehicule,
  setselectedvehicule,
  dateDepart,
  heureDepart,
}) => {
  const handleHeure = (e) => {
    setheureDepart(e.target.value);
  };

  const handleDate = (e) => {
    setdateDepart(e.target.value);
  };

  const InputInfos = ({ htmlFor, txt, id, name, type, value, onChange }) => (
    <div className="p-6">
      <label
        className="block text-gray-800 text-md font-semibold mb-2 text-center"
        htmlFor={htmlFor}
      >
        {txt} :
      </label>
      <input
        className=" shadow appearance-none border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  const CustomLabel = ({ txt, htmlFor }) => (
    <label
      className="block text-gray-800 text-md font-semibold mb-2 text-center"
      htmlFor={htmlFor}
    >
      {txt} :
    </label>
  );

  return (
    <div className=" rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
      <form>
        <div className="grid grid-cols-2">
          <div className="p-6">
            <CustomLabel txt="Départ" htmlFor="departure" />
            <CreateDepart
              filteredDepart={filteredDepart}
              setselectedDepart={setselectedDepart}
              selectedDepart={selectedDepart}
              depart={depart}
              setDepart={setDepart}
            />
          </div>
          <div className="p-6">
            <CustomLabel txt="Destination" htmlFor="arrival" />
            <CreateArrive
              filteredArrive={filteredArrive}
              setselectedArrive={setselectedArrive}
              selectedArrive={selectedArrive}
              arrive={arrive}
              setArrive={setArrive}
            />
          </div>

          <InputInfos
            htmlFor="departure-date"
            txt="Date de départ"
            id="departure-date"
            name="departure-date"
            type="date"
            value={dateDepart}
            onChange={handleDate}
          />
          <InputInfos
            htmlFor="departure-time"
            txt="Heure de départ"
            id="departure-time"
            name="departure-time"
            type="time"
            value={heureDepart}
            onChange={handleHeure}
          />

          <div className="p-6">
            <CustomLabel txt="Véhicule" htmlFor="vehicule" />
            <SelectVehicule
              vehicule={vehicule}
              selectedvehicule={selectedvehicule}
              setselectedvehicule={setselectedvehicule}
            />
          </div>

          <InputInfos
            htmlFor="nbr-passengers"
            txt="Nombre de passagers"
            id="nbr-passengers"
            name="nbr-passengers"
            type="number"
          />

          <div className="p-6">
            <input
              onClick={click}
              value="Etape suivante"
              className="mt-4 py-2 px-4 bg-vert hover:bg-verth rounded-md group shadow-md relative w-full text-white text-center "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTrajetFirst;
