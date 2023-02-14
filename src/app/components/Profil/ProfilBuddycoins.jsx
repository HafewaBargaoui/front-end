import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../api/backend/account";
import { selectIsLogged, selectUser, selectToken } from "../../redux-store/authenticationSlice";

const ProfilBuddycoins = () => {

  const [users, setusers] = useState([])
  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);

  const userProfile = async () => {
    const response = await getProfile(user.id);
    //console.log(response.data.user);
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
      <div className="grid justify-content-center mx-4 text-black">
      <div className="grid place-items-center mt-4 text-black">
            <img
              className="w-20"
              src="imgs/6-removebg-preview.png"
            />
            <p className="mt-2 font-thin">{users ? users.points : "votre solde"}</p>
         
          </div>

        
        <button className="mt-6 bg-jauneh hover:bg-jaune rounded-md text-black  font-normal shadow-md  py-2 px-4">
        Historique des transactions
      </button>
      
      <button className="mt-2 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4">
        Acheter des BuddyCoins
      </button>
      </div>
    </div>
  </div>
  )
}

export default ProfilBuddycoins