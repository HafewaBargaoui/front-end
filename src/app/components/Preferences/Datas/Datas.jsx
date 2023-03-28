import React, {useEffect, useState} from "react";
import homme from "../../../assets/images/profileprefs/male.png";
import femme from "../../../assets/images/profileprefs/female.png";

import parler from "../../../assets/images/profileprefs/parler.png";
import fumer from "../../../assets/images/profileprefs/smoking.png";
import radio from "../../../assets/images/profileprefs/radio.png";
import clim from "../../../assets/images/profileprefs/clim.png";

import berline from "../../../assets/images/profileprefs/berline.png";
import x4 from "../../../assets/images/profileprefs/4x4.png";
import citadine from "../../../assets/images/profileprefs/citadine.png";
import electrique from "../../../assets/images/profileprefs/electrique.png";

import {
    getCarBrand,
    postDriverVehicule,
    postDriverPrefs,
  } from "../../../api/backend/account";

export const Datas = () => {

    const [carOpt, setcarOpt] = useState([]);
    const [model, setmodel] = useState([]);
    const [fuelOption, setfuelOption] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState({});
  
    const carOptions = async () => {
      const response = await getCarBrand();
      setcarOpt(response.data);
      setfuelOption(response.data);
      console.log(response.data);
    };
  

  
    useEffect(() => {
      carOptions();
    }, []);

    const dbsexe = [
        { id: 1, title: "homme", image: homme },
        { id: 2, title: "femme", image: femme },
      ];
    
      const dbLike = [
        { id: 3, title: "parler", image: parler },
        { id: 4, title: "fumer", image: fumer },
        { id: 5, title: "radio", image: radio },
        { id: 6, title: "clim", image: clim },
      ];
    
      const dbVehicule = [
        { id: 7, title: "berline", image: berline },
        { id: 8, title: "4x4", image: x4 },
        { id: 9, title: "citadine", image: citadine },
        { id: 10, title: "electrique", image: electrique },
      ];

      const seatsOptions = [
        {
          id: "1",
          label: "1",
          value: "1",
        },
        {
          id: "2",
          label: "2",
          value: "2",
        },
        {
          id: "3",
          label: "3",
          value: "3",
        },
        {
          id: "4",
          label: "4",
          value: "4",
        },
      ];
    
      const large_luggageOptions = [
        {
          id: "1",
          label: "pas de coffre",
          value: "pas de coffre",
        },
        {
          id: "2",
          label: "petit coffre",
          value: "petit coffre",
        },
        {
          id: "3",
          label: "grand coffre",
          value: "grand coffre",
        },
      ];
    
      const animalOption = [{ id: 1, title: "animaux" }];
      const smokerOption = [{ id: 2, title: "fumeurs" }];



  return {
    dbsexe,
    dbLike,
    dbVehicule,
    seatsOptions,
    large_luggageOptions,
    animalOption,
    smokerOption,
    carOpt, setcarOpt,
    model, setmodel,
    fuelOption, setfuelOption,
    selectedBrand, setSelectedBrand,
  }
}
