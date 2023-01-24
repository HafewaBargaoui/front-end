import React from 'react';

export default function Faq() {
    return (
        <div className="accueil bg-cover bg-[url('./imgs/Gradient.png')]">
            <div className='flex flex-col text-white text-lg ml-64 mr-64'>
                <div className='text-white mt-12 mb-12 text-4xl font-bold uppercase text-center underline underline-offset-4'>
                    <p>Foire aux questions :</p>
                </div>
                <div className=''>
                    <h5 className=' mb-4 underline underline-offset-4 font-semibold mt-6 text-3xl'>Qu'est-ce que le covoiturage ?</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment ça marche ?</h6>
                    <p className='mt-4 text-lg'>Pour utiliser l'application il faut s'inscrire.</p>
                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-semibold text-3xl mb-4 mt-12'>Le profil d'un utilisateur</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment s'inscrire à l'application ?</h6>
                    <p className='mt-4 text-lg'>Pour s'inscrire à l'application ,l'utilisateur doit cliquer sur la tête avatar puis cliquer su "inscription". L'utilisateur peut également s'inscrire à partir de la page d'accueil, il a juste à scroller un peu et cliquer sur le bouton "S'inscrire". </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment se désinscrire à l'application ?</h6>
                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-semibold text-3xl mt-12 mb-4'>Les points (buddycoins)</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Que faire lorsque je n'ai plus de points pour faire un trajet ?</h6>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Est-ce possible de vendre mes points ?</h6>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-semibold text-3xl mt-12 mb-4'>L'assurance</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment faire en cas d'accident ?</h6>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-semibold mt-12 mb-24'>La prime covoiturage</h5>
                </div>
            </div>
        </div>
    )
}