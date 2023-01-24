import React from 'react';

export default function Profil() {
    return (
        <div className="accueil bg-cover bg-[url('./imgs/Gradient.png')]">

            <div className='flex flex-col text-white text-lg px-72 py-28 ml-80'>
                <p>Page de profil :</p>
                <br></br>
                <p>Informations de l'utilisateur :</p>
                <p>Nom et prénom</p>
                <p>Photo de profil</p>
                <p>Date de naissance</p>
                <p>Adresse postale</p>
                <p>Adresse mail</p>
                <p>Téléphone</p>
                <br></br>
                <p>Informations sur le véhicule :</p>
                <p>Marque</p>
                <p>Modèle</p>
                <p>Couleur du véhicule</p>
                <p>Nombre de places</p>
                <p>Les filtres : animaux, fumeur, radio etc.</p>
                <br></br>
            </div>
        </div>
    )
}