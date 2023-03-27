import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../../api/backend/account";
import {
  selectIsLogged,
  selectUser,
} from "../../redux-store/authenticationSlice";
import avatar from "../../../../public/imgs/avatar.png";
import ProfilInfoModal from "./Profil_Modals/ProfilInfoModal";
import Stats from "./Infos_Components/Stats";
import { Fade } from "react-awesome-reveal";

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
      const naissance = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      );
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
  }, [count, isAuthenticated, birthday]);

  const [modalOn, setmodalOn] = useState(false);

  const modal = () => {
    setmodalOn(true);
    console.log(modalOn);
  };

  const FadeText = ({ text, delay }) => (
    <Fade cascade delay={delay} damping={0.1} className="font-thin">
      {text}
    </Fade>
  );

  return (
    <Fade direction="left">
      <div className="flex grow place-content-center w-screen md:w-96 max-w-xl space-y-6 rounded-lg pb-8  px-8 shadow lg:px-8  bg-cover bg-slate-500 bg-opacity-50">
        <div className="grid place-content-center">
          <div className="flex flex-col text-black text-lg">
            <Stats photo={photo} avatar={avatar} />

            <div className="grid grid-cols-2">
              <p className="font-semibold">Nom : </p>
              {users && <FadeText text={users.lastname} delay={100} />}
              {!users && <p className="font-thin">Nom</p>}
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold">Prénom : </p>
              {users && <FadeText text={users.name} delay={300} />}
              {!users && <p className="font-thin">Prénom</p>}
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold">Sexe : </p>
              {users && <FadeText text={users.sex} delay={500} />}
              {!users && <p className="font-thin">Sexe</p>}
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold">Âge : </p>
              {users && <FadeText text={age} delay={600} />}
              {!users && <p className="font-thin">Âge</p>}
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold">Adresse mail : </p>
              {users && <FadeText text={users.email} delay={800} />}
              {!users && <p className="font-thin">Adresse mail</p>}
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold">Adresse : </p>
              {adresse && (
                <FadeText
                  text={
                    adresse.streetNumber +
                    " " +
                    adresse.pathType +
                    " " +
                    adresse.streetName
                  }
                  delay={800}
                />
              )}
              {!adresse && <p className="font-thin">Adresse</p>}
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold">Adresse mail : </p>
              {adresse && <FadeText text={adresse.zip} delay={800} />}
              {!adresse && <p className="font-thin">59000</p>}
            </div>


            <div className="grid grid-cols-2">
              <p className="font-semibold">Ville : </p>
              <Fade cascade delay={800} damping={0.1} className="font-thin">
                Lille
              </Fade>
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold">Téléphone : </p>
              {users && <FadeText text={users.phone} delay={800} />}
              {!users && <p className="font-thin">Téléphone</p>}
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
            users={users}
            adresse={adresse}
            user={user}
            setCount={setCount}
            count={count}
          />
        )}
      </div>
    </Fade>
  );
};

export default ProfilInfos;
