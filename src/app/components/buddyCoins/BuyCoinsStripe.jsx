import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile, getTrader } from "../../api/backend/account";
import { selectIsLogged } from "../../redux-store/authenticationSlice";
import { paiementStripe } from "../../api/backend/account";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import { useFormik } from "formik";

const SellCoins = () => {

    const [users, setusers] = useState([])
    const [coins, setCoins] = useState([])

    const isAuthenticated = useSelector(selectIsLogged);

    const userProfile = async () => {
        const response = await getProfile();
        setusers(response.data.user)
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

    const formik = useFormik({
        initialValues: 
        {
            coinsBuy: 0,
        },
        onSubmit: async (values) => 
        {
            await paiementStripe(values).then((res) => {
                window.location.href = res.data.session
            });
        }
    });

    return (
        <div className='h-full bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
        <form onSubmit={formik.handleSubmit}>
            
            <h3 className="text-white flex justify-center py-24 underline underline-offset-4">Achats de BuddyCoins</h3>

            <div className="flex flex-row justify-center">
                <div className="rounded-lg px-4 shadow lg:px-8 bg-cover bg-slate-500 bg-opacity-50 mr-24 max-w-3xl">
                    <div className="grid grid-flow-col gap-16 mt-12 mb-12 justify-content-center mx-8 text-black">
                        <div className=" grid place-items-center mt-4 text-black">
                            <img
                                className="w-24"
                                src="imgs/6-removebg-preview.png"
                            />
                            <p className="mt-2 text-3xl font-semibold">votre solde {users ? users.points : null}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg pb-8 px-4 shadow lg:px-8 bg-cover bg-slate-500 bg-opacity-50">
                    <div className="grid place-content-center ">
                        <div className="grid grid-flow-col gap-16 my-12 justify-content-center mx-6 text-black ">

                            <div className="mt-6 ">
                                    <div
                                        className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full px-40 rounded-lg mt-4 drop-shadow-lg`}
                                    >
                                        <div className="grid grid-flow-col place-items-center">
                                            <img src={buddycoin} alt="buddycoin" className="w-8 h-10" />
                                        </div>

                                        <div className="px-6 py-4">
                                            <input
                                                className="border-gray-500 rounded-md"
                                                type="number"
                                                min="0"
                                                name="coinsBuy"
                                                id="coinsBuy"
                                                placeholder="Nombre de points"
                                                onChange={formik.handleChange}
                                                ></input>
                                        </div>

                                        <div className='bg-cyan-500 hover:bg-cyan-600 rounded-md text-black  font-normal shadow-md py-2 px-4 ml-28'>
                                            <button 
                                            type="submit"
                                            disabled={formik.isSubmitting}>
                                                Acheter
                                            </button>
                                        </div>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}


export default SellCoins;

