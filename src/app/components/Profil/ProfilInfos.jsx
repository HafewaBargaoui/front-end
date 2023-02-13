import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../api/backend/account";
import { selectIsLogged, selectUser, selectToken } from "../../redux-store/authenticationSlice";

const ProfilInfos = () => {
  const [users, setusers] = useState([])
  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);

  
  const userProfile = async () => {
    const response = await getProfile(user.id);
    console.log(response.data.user);
    setusers(response.data.user)
  }
  
  useEffect(() => {
    if(isAuthenticated){
      userProfile();
    }
  }, [isAuthenticated])
  


  return (
    <div className="flex grow max-w-xl space-y-3 rounded-lg pb-8  px-4 shadow lg:px-8  bg-cover bg-slate-500">
      <div className="grid place-content-center">
        <div className="flex flex-col text-black text-lg">
          <div className="grid place-items-center m-4 text-black">
            <img
              className="w-16 rounded-full border-2 border-green-500"
              src="imgs/avatar.png"
            />
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
            <p className="font-thin">{users.lastname}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Prénom : </p>
            <p className="font-thin">{users.name}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Sexe : </p>
            <p className="font-thin">{users.sex}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Âge : </p>
            <p className="font-thin">25</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Adresse mail : </p>
            <p className="font-thin">{users.email}</p>
          </div>
          <div className="grid grid-cols-2 ">
            <p className="font-semibold">Adresse : </p>
            <p className="font-thin">255 rue jesaispas</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Code Postal : </p>
            <p className="font-thin">59000</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Ville : </p>
            <p className="font-thin">Lille</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Téléphone : </p>
            <p className="font-thin">{users.phone}</p>
          </div>
        </div>
        <button className="mt-8 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4">
          Modifier Profil
        </button>
      </div>
    </div>
  );
};

export default ProfilInfos;
