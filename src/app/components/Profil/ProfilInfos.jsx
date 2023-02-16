import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../api/backend/account";
import {
  selectIsLogged,
  selectUser,
  selectToken,
} from "../../redux-store/authenticationSlice";
import avatar from "../../../../public/imgs/avatar.png";
import ProfilInfoModal from "../modals/ProfilInfoModal";

const ProfilInfos = () => {
  const [users, setusers] = useState([]);
  const [photo, setphoto] = useState([]);
  const [adresse, setadresse] = useState([]);
  const [birthday, setbirthday] = useState("");
  const [age, setage] = useState("");
  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);
  
  const [count, setCount] = useState(1);

  const userProfile = async () => {
    const response = await getProfile(user.id);
    setusers(response.data.user);
    setadresse(response.data.address);
    setphoto(response.data.userPrefs.file[0].filename);
    const date = response.data.user.birthday.split("T")[0];
    setbirthday(date);
    ages();
  };
  
  const ages = () => {
    if (birthday) {
      const [year, month, day] = birthday.split("-");
      const naissance = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      const today = new Date();
      let age = today.getFullYear() - naissance.getFullYear();
      const mois = today.getMonth() - naissance.getMonth();
      if (mois < 0 || (mois === 0 && today.getDate() < naissance.getDate())) {
        age--;
      }
      setage(age);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      userProfile();
      ages();
    }
  }, [count, isAuthenticated,  birthday ]);

  const [modalOn, setmodalOn] = useState(false);
  const [submitModifs, setsubmitModifs] = useState(false)


  const modal = () => {
    setmodalOn(true);
    console.log(modalOn);
  };

  return (
    <div className="flex grow w-96 max-w-xl space-y-6 rounded-lg pb-8  px-8 shadow lg:px-8  bg-cover bg-slate-500 bg-opacity-50">
      <div className="grid place-content-center">
        <div className="flex flex-col text-black text-lg">
          <div className="grid place-items-center m-4 text-black">
            {photo != "" ? (
              <img
                className="w-16 rounded-full border-2 border-green-500"
                src={photo}
              />
            ) : (
              <img
                className="w-16 rounded-full border-2 border-green-500"
                src={avatar}
              />
            )}
            <p className="mt-2 font-bold text-xl">Username</p>
            <div className="mt-4 grid grid-cols-3 gap-2 justify-items-center">
              <div className="grid justify-items-center">
                <p>logo1</p>
                <p>1</p>
              </div>
              <div className="grid justify-items-center">
                <p>logo2</p>
                <p>2</p>
              </div>
              <div className="grid justify-items-center">
                <p>logo3</p>
                <p>3</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <p className="font-semibold">Nom : </p>
            {users != undefined ? (
              <p className="font-thin">{users.lastname}</p>
            ) : (
              <p className="font-thin">Nom</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Prénom : </p>
            {users != undefined ? (
              <p className="font-thin">{users.name}</p>
            ) : (
              <p className="font-thin">prénom</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Sexe : </p>
            {users != undefined ? (
              <p className="font-thin">{users.sex}</p>
            ) : (
              <p className="font-thin">sexe</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Âge : </p>
            {birthday != undefined ? (
              <p className="font-thin">{age}</p>
            ) : (
              <p className="font-thin">25</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Adresse mail : </p>
            {users != undefined ? (
              <p className="font-thin">{users.email}</p>
            ) : (
              <p className="font-thin">adresse mail</p>
            )}
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold">Adresse : </p>
            {adresse != undefined ? (
              <p className="font-thin">
                {adresse.streetNumber +
                  " " +
                  adresse.pathType +
                  " " +
                  adresse.streetName}
              </p>
            ) : (
              <p className="font-thin">255 rue jesaispas</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Code Postal : </p>
            {adresse != undefined ? (
              <p className="font-thin">{adresse.zip}</p>
            ) : (
              <p className="font-thin">59500</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Ville : </p>
            <p className="font-thin">Lille</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Téléphone : </p>
            {users != undefined ? (
              <p className="font-thin">{users.phone}</p>
            ) : (
              <p className="font-thin">Téléphone</p>
            )}
          </div>
        </div>
        <button 
          className="mt-8 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4"
          onClick={modal}
          >
          Modifier Profil
        </button>
      </div>
      {modalOn && (
          <ProfilInfoModal
            setmodalOn={setmodalOn}
            setsubmitModifs={setsubmitModifs}
            users={users}
            adresse={adresse}
            user={user}
            setCount = {setCount}
            count={count}
          />
        )}
    </div>
  );
};

export default ProfilInfos;
