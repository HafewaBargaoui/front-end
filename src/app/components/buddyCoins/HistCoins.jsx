import React from "react";
import { useState } from "react";
import homme1 from "../../assets/images/profil/homme1.png";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import haut from "../../assets/images/profil/flecheHaut.png";
import bas from "../../assets/images/profil/flecheBas.png";

const HistCoins = () => {
    const [buy, setBuy] = useState(false);
    const [sell, setSell] = useState(false);


    const coins = [
        {
            id: 1,
            date: "01/03/2022",
            conducteur: "Antoine",
            photo: homme1,
            coin: buddycoin,
            tarif: 100,
        },
        {
            id: 2,
            date: "14/02/2022",
            conducteur: "Philippe",
            photo: homme1,
            coin: buddycoin,
            tarif : 120,
        },
        {
            id: 3,
            date: "22/01/2022",
            conducteur: "Valentin",
            photo: homme1,
            coin: buddycoin,
            tarif : 160,
        },
        {
            id: 4,
            date: "02/01/2022",
            conducteur: "Mathias",
            photo: homme1,
            coin: buddycoin,
            tarif : 80,
        },
    ];

    return (
        <div className='h-full flex justify-center items-center  bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
            <div className="m-36 w-full">

                <div className="m-2">
                    <div
                        className={`grid grid-flow-col justify-between place-items-center  bg-white w-full rounded-lg p-2 drop-shadow-lg ${buy && "scale-105"
                            } hover:scale-105 hover:transition duration-700 ease-in-out`}
                        onClick={() => setBuy(!buy)}
                    >
                        <p className="uppercase font-semibold m-2 ml-12">
                            BuddyCoins / <span className="font-light">achetés</span>
                        </p>
                        <img className="mr-12" src={!buy ? haut : bas} alt="logo" />
                    </div>

                    <div
                        className={`${!buy && "hidden"
                            }  h-64 overflow-y-scroll bg-opacity-10 mt-0 bg-slate-300 rounded-b-xl scrollbar`}
                    >
                        <div className="mt-6 mx-10">
                            {coins.map((coin) => (
                                <div
                                    className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                                    key={coin.id}
                                >
                                    <p className="uppercase font-semibold m-2">{coin.date}</p>

                                    <img src={homme1} alt="photo conducteur" className="w-8 h-8" />
                                    

                                    <p className="uppercase font-semibold m-2">
                                    {coin.conducteur} 
                                </p>
                                    <div className="grid grid-flow-col place-items-center">
                                        <img src={coin.coin} alt="buddycoin" className="w-4 h-4" />
                                        <span className="ml-4 font-semibold ">{coin.tarif}</span>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="m-2 mt-12">
                    <div
                        className={`grid grid-flow-col justify-between place-items-center  bg-white w-full rounded-lg p-2 drop-shadow-lg ${sell && "scale-105"
                            } hover:scale-105 hover:transition duration-700 ease-in-out`}
                        onClick={() => setSell(!sell)}
                    >
                        <p className="uppercase font-semibold m-2 ml-12">
                            BuddyCoins / <span className="font-light">vendus</span>
                        </p>
                        <img className="mr-12" src={!sell ? haut : bas} alt="logo" />
                    </div>

                    <div
                        className={`${!sell && "hidden"
                            }  h-64 overflow-y-scroll bg-opacity-10 mt-0 bg-slate-300 rounded-b-xl scrollbar`}
                    >
                        <div className="mt-6 mx-10">
                            {coins.map((coin) => (
                                <div
                                    className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                                    key={coin.id}
                                >
                                    <p className="uppercase font-semibold m-2">{coin.date}</p>

                                    <img src={homme1} alt="photo conducteur" className="w-8 h-8" />
                                    

                                    <p className="uppercase font-semibold m-2">
                                    {coin.conducteur} 
                                </p>
                                    <div className="grid grid-flow-col place-items-center">
                                        <img src={coin.coin} alt="buddycoin" className="w-4 h-4" />
                                        <span className="ml-4 font-semibold ">{coin.tarif}</span>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistCoins;