import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../api/backend/account";
import { selectIsLogged, selectUser, selectToken } from "../../redux-store/authenticationSlice";
import { Link } from "react-router-dom";
import {
    URL_BUYCOINS,
    URL_SELLCOINS,
    URL_HISTCOINS,
} from "../../constants/urls/urlFrontEnd";


const ProfilBuddycoins = () => {

    const [users, setusers] = useState([])
    const isAuthenticated = useSelector(selectIsLogged);
    const user = useSelector(selectUser);

    const userProfile = async () => {
        const response = await getProfile(user.id);
        setusers(response.data.user)
    }
    useEffect(() => {
        if (isAuthenticated) {
            userProfile();
        }
    }, [isAuthenticated])


    return (
        <div className="flex flex-row">
            <div className="rounded-lg pb-8 px-4 shadow lg:px-8 bg-cover bg-slate-500 bg-opacity-50 mr-12 max-w-3xl">
                <h4 className="underline mb-6 mt-4 pt-4 flex justify-center text-white">Le fonctionnement des points :</h4>
                <p className="text-xl text-white py-2 flex justify-center mb-4 bg-emerald-500">1 buddyCoin = 1 kilomètre </p>
                <p className="text-lg pt-2 pb-6 text-white">Quand un passager réserve un trajet il donne des BuddyCoins au conducteur.</p>
                <p className="text-lg pb-6 text-white">Un passager peut acheter des BuddyCoins à d'autres utilisateurs.</p>
                <p className="text-lg text-white">Un conducteur peut vendre ses BuddyCoins à d'autres utilisateurs.</p>
                
            </div>

            <div className="rounded-lg pb-8 px-4 shadow lg:px-8 bg-cover bg-slate-500 bg-opacity-50">
                <div className="grid place-content-center">
                    <div className="grid grid-flow-col gap-16 mt-12 mb-12 justify-content-center mx-8 text-black">
                        <div className="grid place-items-center mt-4 text-black">
                            <img
                                className="w-24"
                                src="imgs/6-removebg-preview.png"
                            />
                            <p className="mt-2 text-3xl font-semibold">{users ? users.points : "votre solde"}</p>

                        </div>

                        <div className="grid place-content-center">
                            <Link to={URL_HISTCOINS}>
                                <button className="mt-6 bg-jauneh hover:bg-jaune rounded-md text-black font-normal shadow-md py-2 px-4">
                                    Historique des transactions
                                </button>
                            </Link>

                            <Link to={URL_BUYCOINS}>
                                <button className="mt-8 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md py-2 px-4">
                                    Acheter des BuddyCoins
                                </button>
                            </Link>

                            <Link to={URL_SELLCOINS}>
                                <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 rounded-md text-black font-normal shadow-md py-2 px-4">
                                    Vendre des BuddyCoins
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilBuddycoins