import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../../api/backend/account";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { selectIsLogged, selectUser, selectToken } from "../../redux-store/authenticationSlice";

import {
  URL_BUYCOINS,
  URL_SELLCOINS,
  URL_COINS, 
  URL_HISTCOINS,
  URL_BUYCOINS_STRIPE
} from "../../constants/urls/urlFrontEnd";

const ProfilBuddycoins = () => 
{
  const [users, setusers] = useState([]);
  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);

  const userProfile = async () => {
    const response = await getProfile(user.id);
    //console.log(response.data.user);
    setusers(response.data.user)
  }

useEffect(() => {
  if (isAuthenticated) {
    userProfile();
  }
}, [isAuthenticated])


return (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="flex grow w-screen md:max-w-xl space-y-3 rounded-lg pb-8  px-4 shadow lg:px-8  bg-cover bg-slate-500 bg-opacity-50">
    <div className="grid place-content-center">
      <div className="grid grid-flow-col gap-16 mt-12 mb-12 justify-content-center mx-8 text-black">
        <div className="grid place-items-center mt-4 text-black">
          <img className="w-24" src="imgs/6-removebg-preview.png" />
          <p className="mt-2 text-lg font-semibold">
            {users ? users.points : "votre solde"}
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-1">

            <Link to={URL_COINS}>
              <button className="mt-2 h-full bg-jaune  hover:bg-jauneh rounded-md text-black  font-normal shadow-md  py-2 px-4">
                A quoi ça peut bien servir ?
              </button>
            </Link>

            <Link to={URL_HISTCOINS}>
              <button className="mt-2 h-full bg-rose hover:bg-roseh rounded-md text-black  font-normal shadow-md  py-2 px-4">
                Historique des transactions
              </button>
            </Link>

            <Link to={URL_COINS}>
              <button className="mt-2 h-full bg-bleu hover:bg-bleuh rounded-md text-black  font-normal shadow-md  py-2 px-4">
                Acheter des BuddyCoins
              </button>
            </Link>

            <Link to={URL_SELLCOINS}>
              <button className="mt-2 h-full bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4">
                Vendre des BuddyCoins
              </button>
            </Link>


          </div>
        </div>
      </div>
    </div>
  </motion.div>
)}
export default ProfilBuddycoins;
