import React from 'react';
import { Link } from "react-router-dom";

export default function Create() {
    return (
        <div className='creation'>
           <h1>Création du trajet :</h1>
            <form>
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
            </form>

            <Link to="/checkcar" className="link">vérification de la voiture</Link>
        </div>
    );
}

