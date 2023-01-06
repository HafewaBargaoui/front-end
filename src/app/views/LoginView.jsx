import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { URL_HOME } from '../constants/urls/urlFrontEnd';
// import Login from './../components/account/Login';
import { selectIsLogged } from './../redux-store/authenticationSlice';

/**
 * View/Page Login
 *
 * @author Peter Mollet
 */
const LoginView = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsLogged);

    useEffect(() => {
        if (isAuthenticated) navigate(URL_HOME);
    }, []);

    return (
        <div className="flex h-full items-center justify-center">
            {/* <Login className="" /> */}
            <form>
            <h1>barre de recherche</h1>

                <div className=''>
                    <label for="inputDeparture">Départ :</label>
                    <input type="text" name="departure" id="inputDeparture"></input>
                </div>

                <div>
                    <label for="inputDestination">Destination :</label>
                    <input type="text" name="destination" id="inputDestination"></input>
                </div>

                <div>
                    <label for="inputDate">Date :</label>
                    <input type="date" name="date" id="inputDate"></input>
                </div>

                <div>
                    <label for="inputNumber">Nombre de personne :</label>
                    <input type="number" name="number" id="inputNumber"></input>
                </div>
            </form>
            
        </div>
    )
       
};

export default LoginView;

// page d'accueil quand un utilisateur non connecté va sur le site