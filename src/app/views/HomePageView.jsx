import React from 'react';
import { Link } from "react-router-dom";


export default function HomePageView() {

    return (
        <div className='accueil'>
            <div className='recherche'>

                <div className="flex flex-row items-center justify-around py-12 ml-16 mr-16">

                    <div className=''>
                        {/* <label for="inputDeparture">Départ :</label> */}
                        <input type="text" name="departure" id="inputDeparture" placeholder="Point de départ"></input>
                    </div>

                    <div className=''>
                        {/* <label for="inputDestination">Destination :</label> */}
                        <input type="text" name="destination" id="inputDestination" placeholder="Point d'arrivée"></input>
                    </div>

                    <div className=''>
                        {/* <label for="inputDate">Date :</label> */}
                        <input type="date" name="date" id="inputDate"></input>
                    </div>

                    <div className=''>
                        {/* <label for="inputNumber">Nombre de personnes :</label> */}
                        <input type="number" name="number" id="inputNumber" placeholder="Nombre de personnes"></input>
                    </div>

                    <Link to="/goSearch" className="btn-white">GO !</Link>

                    {/* caroussel */}
                    {/* <div>
						<Slider></Slider>
                    </div>  */}
                </div>

            </div>

            {/* <div className='bg-gradient-to-l from-green-500'>  */}
            <div className=''>
                <div className='flex mx-auto w-96 mt-10 mb-10 '>
                    <img src="imgs/CarbuddyBlackpink-removebg-preview2.png" alt="logo"></img>
                </div>

                <div className='flex mx-auto w-1/2 h-auto'>
                    <img src="imgs/pexels-lisa-fotios-1392621.jpg" alt="voiture"></img>
                </div>

                <div className='flex mx-auto pb-20 pt-10 text-white text-center w-1/3 text-xl tracking-wide'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus necessitatibus voluptate? Voluptates
                        voluptate voluptatum quidem nobis, delectus doloremque fuga quod accusamus possimus eaque cum exercitationem
                        quasi cumque sunt nihil?</p>
                </div>
            </div>
        </div >
    )
};
