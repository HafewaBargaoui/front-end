import React from 'react';
import { Link } from "react-router-dom";

export default function CreateView() {
    return (
        <div className='creation'>
            <h1>Vérification de la voiture :</h1>
            
            <form>
                <div className=''>
                    <label for="inputModele">Modèle :</label>
                    <input type="text" name="modele" id="inputModele"></input>
                </div>

                <div>
                    <label for="inputColor">Couleur :</label>
                    <input type="text" name="color" id="inputColor"></input>
                </div>

                <div>
                    <label for="inputNumber">Nombre de place :</label>
                    <input type="number" name="number" id="inputNumber"></input>
                </div>
            </form>
            
            <Link to="/checkfilters" className="link">vérification des filtres</Link>
        </div>
    );
}