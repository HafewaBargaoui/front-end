import React from 'react';
import { Link } from "react-router-dom";
import {
    URL_LOGIN,
    URL_PROFIL,
    URL_REGISTER,
} from "./../constants/urls/urlFrontEnd";


export default function Avatar() {
    return (
        <div className="accueil py-80 bg-cover bg-[url('./imgs/Gradient.png')]">
            <div className='flex flex-row mx-auto'>
                <div className='px-80 text-xl'>
                    <Link to={URL_REGISTER}>
                        <button
                            type="button"
                            className=" text-white "
                        >
                            S'inscrire
                        </button>{" "}
                    </Link>
                </div>
                <div className='text-xl'>
                    <Link to={URL_LOGIN}>
                        <button
                            type="button"
                            className="text-white "
                        >
                            Connexion
                        </button>
                    </Link>
                </div>
                <div className='px-80 text-xl'>
                    <Link to={URL_PROFIL}>
                        <button
                            type="button"
                            className=" text-white "
                        >
                            Profil
                        </button>{" "}
                    </Link>
                </div>




            </div>
        </div>
    );
}