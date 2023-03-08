import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../api/backend/account";
import { selectIsLogged, selectUser } from "../../redux-store/authenticationSlice";
import homme1 from "../../assets/images/profil/homme1.png";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import { buyBuddyCoins } from "../../api/backend/account";
import BuyBuddyCoinsModal from '../modals/BuyBuddyCoinsModal';


const BuyCoins = () => {

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
        buyBuddyCoins();
    };

    const clicked = () => {
        setclick(!click)
    }

    const coins = [
        {
            id: 1,
            date: "01/03/2022",
            conducteur: "Antoine",
            photo: homme1,
            coin: buddycoin,
            tarif: 100,
        },
    ];

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
                                {coins.map((coin) => (
                                    <div
                                        className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg mt-4 py-4 drop-shadow-lg`}
                                        key={coin.id}
                                    >
                                        <p className="uppercase text-lg font-semibold m-2 mx-12">{coin.date}</p>

                                        <img src={homme1} alt="photo conducteur" className="w-8 h-12 mx-12" />


                                        <p className="uppercase font-semibold m-2 mx-12 text-lg">
                                            {coin.conducteur}
                                        </p>
                                        <div className="grid grid-flow-col place-items-center mx-12">
                                            <img src={coin.coin} alt="buddycoin" className="w-6 h-8" />
                                            <span className="ml-4 font-semibold text-2xl mx-12">{coin.tarif}</span>

                                        </div>

                                        <div onClick={clicked} className=' mt-6 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md py-2 px-4 mx-12'>
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
            {click && <BuyBuddyCoinsModal/>}
        </div>
    )
}

export default BuyCoins;