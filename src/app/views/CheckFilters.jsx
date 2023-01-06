import React from 'react';
import { Link } from "react-router-dom";

export default function CreateView() {
    return (
        <div className='creation'>
            <h1>Vérification des filtres :</h1>

            <form>
                <div>


                    <p>Climatisation :</p>
                    <input type="radio" name="climType" id="radioYes"></input>
                    <label for="radioYes">Oui</label>

                    <input type="radio" name="climType" id="radioNo"></input>
                    <label for="radioNo">Non</label>

                    <p>Fumer :</p>
                    <input type="radio" name="smokeType" id="radioYes"></input>
                    <label for="radioYes">Oui</label>

                    <input type="radio" name="smokeType" id="radioNo"></input>
                    <label for="radioNo">Non</label>

                    <p>Musique :</p>
                    <input type="radio" name="musicType" id="radioYes"></input>
                    <label for="radioYes">Oui</label>

                    <input type="radio" name="musicType" id="radioNo"></input>
                    <label for="radioNo">Non</label>



                    <div>
                        <label for="inputBagage">Bagage :</label>
                        <input type="text" name="bagage" id="inputBagage"></input>
                    </div>

                    <div>
                        <label for="inputAnimal">Animaux :</label>
                        <input type="text" name="animal" id="inputAnimal"></input>
                    </div>

                    <div>
                        <label for="inputSpeak">Parler :</label>
                        <input type="text" name="speak" id="inputSpeak"></input>
                    </div>
                </div>
            </form>

            <Link to="/created" className="link">Trajet créé </Link>
        </div>
    );
};
