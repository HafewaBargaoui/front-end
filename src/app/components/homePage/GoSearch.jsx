import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hook/useSearch"
import SelectDepart from './SelectTrajet/SelectDepart';
import SelectArrive from "./SelectTrajet/SelectArrive";
const GoSearch = () => {
    const { depart, setDepart, arrive, setArrive, resultsDepart, resultsArrive } =
    useSearch();
  const [selectedDepart, setselectedDepart] = useState(resultsDepart[0]);
  const [selectedArrive, setselectedArrive] = useState(resultsArrive[0]);
  const filteredDepart =
    depart === ""
      ? resultsDepart
      : resultsDepart.filter((depart) => depart.name);

  const filteredArrive =
    arrive === ""
      ? resultsArrive
      : resultsArrive.filter((arrive) => arrive.name);
  return (
    <div className="recherche bg-cyan-700 bg-opacity-40 h-24 pt-7 ">
        <div className="flex flex-row items-center justify-around">
          <SelectDepart
            filteredDepart={filteredDepart}
            setselectedDepart={setselectedDepart}
            selectedDepart={selectedDepart}
            depart={depart}
            setDepart={setDepart}
          />

          <SelectArrive
            filteredArrive={filteredArrive}
            setselectedArrive={setselectedArrive}
            selectedArrive={selectedArrive}
            arrive={arrive}
            setArrive={setArrive}
          />
          <div className="">
            <input
              className="inputInscription"
              type="date"
              name="date"
              id="inputDate"
            ></input>
          </div>

          <div className="">
            <input
              className="inputInscription"
              type="number"
              min="0"
              name="number"
              id="inputNumber"
              placeholder="Nombre de personnes"
            ></input>
          </div>

          <Link
            to="/Carte"
            state={{
              selectedDepart: selectedDepart,
              selectedArrive: selectedArrive,
            }}
            className="btn-white"
          >
            GO !
          </Link>
        </div>
      </div>
  )
}

export default GoSearch