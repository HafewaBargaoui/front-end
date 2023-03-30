import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux-store/authenticationSlice";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import { getProfile } from "../../api/backend/profileAPI";
import { paiementStripe, getTrader } from "../../api/backend/buddycoinAPI";

const BuyCoins = () => {

    const [users, setusers] = useState([])
    const [coins, setCoins] = useState([])
    const isAuthenticated = useSelector(selectIsLogged);

    const userProfile = async () => 
    {
        const response = await getProfile();
        setusers(response.data.user);
    }

    useEffect(async () => 
    {
        if (isAuthenticated) 
        {
            const response = await getTrader();
            setCoins(response.data)
            userProfile();
        }
    }, [isAuthenticated])

    const buy = async () => 
    {
        await paiementStripe(coins.user).then((res) => {
            window.location.href = res.data.session
        });
    };

    return (
        <div className='h-full bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
            <h3 className="text-white flex justify-center pt-16 pb-12 underline underline-offset-4">BuddyCoins mis en vente :</h3>

            <div className="grid justify-items-center pb-12 ">
                <div className="rounded-lg shadow bg-cover bg-slate-500 bg-opacity-50 mb-12">
                    <div className="flex flex-row">
                        <div className="grid my-12 justify-content-center mx-8 text-black">
                            <div className="flex flex-row justify-center text-black">
                                <img
                                    className="w-10"
                                    src="imgs/6-removebg-preview.png"
                                />
                                <p className="ml-4 text-3xl font-semibold">{users ? users.points : "votre solde"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg pb-8 px-4 shadow lg:px-8 bg-cover bg-slate-500 bg-opacity-50">
                    <div className="grid place-content-center mx-12">
                        <div className="grid grid-flow-col gap-16 mt-12 mb-12 justify-content-center mx-8 text-black ">

                            <div className="mt-6">
                                {coins.map((coin, index) => (
                                    <div
                                        className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg mt-4 py-4 drop-shadow-lg`}
                                        key={index}
                                    >
                                        <p className="uppercase text-lg font-semibold m-2 mx-12">
                                            {coin.name}
                                        </p>

                                        <img src={ coin.id_user_preference ? coin.id_user_preference.file[0].filename : coin} alt="photo conducteur" className="w-8 h-12 mx-12" />

                                        <p className="uppercase font-semibold m-2 mx-12 text-lg">
                                            {coin.conducteur}
                                        </p>

                                        <div className="grid grid-flow-col place-items-center mx-12">
                                            <img src={buddycoin} alt="buddycoin" className="w-6 h-8" />
                                            <span className="ml-4 font-semibold text-2xl mx-12">{coin.points}</span>
                                        </div>

                                        <div className=' mt-6 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md py-2 px-4 mx-12'>
                                            <button onClick={buy}>
                                                ACHETER
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
export default BuyCoins;