import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../../api/backend/profileAPI";
import { selectIsLogged, selectUser } from "../../redux-store/authenticationSlice";
import { sellBuddyCoins } from "../../api/backend/buddycoinAPI";
import SellBuddyCoinsModal from '../modals/SellBuddyCoinsModal';

import buddycoin from "../../assets/images/profil/buddycoin.png";


const SellCoins = () => {

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

    const [click, setclick] = useState(false)
    const buy = async (req, res) => {
        sellBuddyCoins();
    };

    const clicked = () => {
        setclick(!click)
    }

    const coins = [
        {
            id: 1,
            // date: "01/03/2022",
            // conducteur: "Antoine",
            // photo: homme1,
            coin: buddycoin,
            // tarif: 100,
        },
    ];


    return (
        <div className='h-full bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
            <h3 className="text-white flex justify-center py-24 underline underline-offset-4">BuddyCoins mis en vente :</h3>

            <div className="flex flex-row justify-center">
                <div className="rounded-lg px-4 shadow lg:px-8 bg-cover bg-slate-500 bg-opacity-50 mr-24 max-w-3xl">
                    <div className="grid grid-flow-col gap-16 mt-12 mb-12 justify-content-center mx-8 text-black">
                        <div className=" grid place-items-center mt-4 text-black">
                            <img
                                className="w-24"
                                src="imgs/6-removebg-preview.png"
                            />
                            <p className="mt-2 text-3xl font-semibold">{users ? users.points : "votre solde"}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg pb-8 px-4 shadow lg:px-8 bg-cover bg-slate-500 bg-opacity-50">
                    <div className="grid place-content-center ">
                        <div className="grid grid-flow-col gap-16 my-12 justify-content-center mx-6 text-black ">

                            <div className="mt-6 ">
                                {coins.map((coin) => (
                                    <div
                                        className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full px-40 rounded-lg mt-4 drop-shadow-lg`}
                                        key={coin.id}
                                    >
                                        <div className="grid grid-flow-col place-items-center">
                                            <img src={coin.coin} alt="buddycoin" className="w-8 h-10" />
                                        </div>

                                        <div className="px-6 py-4">
                                            <input
                                                className="border-gray-500 rounded-md"
                                                type="number"
                                                min="0"
                                                name="number"
                                                id="inputNumber"
                                                placeholder="Nombre de points"
                                            ></input>
                                        </div>

                                        <div onClick={clicked} className='bg-cyan-500 hover:bg-cyan-600 rounded-md text-black  font-normal shadow-md py-2 px-4 ml-28'>
                                            <button onClick={buy}>
                                                VENDRE
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {click && <SellBuddyCoinsModal />}

        </div>
    )
}


export default SellCoins;

