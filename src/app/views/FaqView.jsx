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
                    <p className='mt-4 text-lg'>Pour utiliser toutes les fonctionnalités de l'application il faut commencer par s'inscrire. </p>
                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-semibold text-3xl mb-4 mt-12'>Le profil d'un utilisateur</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment s'inscrire à l'application ?</h6>
                    <p className='mt-4 text-lg'>Pour s'inscrire à l'application ,il faut cliquer sur la tête avatar puis cliquer sur "inscription". On peut également s'inscrire à partir de la page d'accueil, il faut juste scroller un peu et cliquer sur le bouton "S'inscrire". </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment se désinscrire à l'application ?</h6>
                    <p className='mt-4 text-lg'>Il faut être connecté et aller dans mon profil. Pour se faire, il faut cliquer sur la tête avatar, puis mon profil. Tout en bas, il y a un lien "se désinscrire" il faut cliquer dessus et confirmer son choix. La désinscription est prise en compte.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Je n'ai pas reçu de mail à la fin de mon inscription que dosi-je faire ?</h6>
                    <p className='mt-4 text-lg'>Il faut d'abord vérifier que l'email de validation ne se trouve pas dans le dossier "spam" ou "courrier indésirable". Si le courriel n'est pas dans l'un de ses dossiers c'est que l'inscription n'a pas été prise en compte. Recommencez donc la procédure d'inscription en vérifiant bien votre adresse mail.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Comment puis-je modifier mon mot de passe ?</h6>
                    <p className='mt-4 text-lg'>Il faut être connecté puis cliquer sur l'avatar et aller dans mon profil. Il y a un lien "modifier mon mot de passe". (il faut renseigner l'ancien et créer le nouveau)</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Que faire si je perds mon mot de passe ?</h6>
                    <p className='mt-4 text-lg'> J'ai la possibilité d'en créer un nouveau. Au moment de me connecter si je n'ai pas mon mot de passe il faut que je clique sur mot de passe "oublié" pour pouvoir en créer un nouveau.</p>

                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-semibold text-3xl mt-12 mb-4'>Les points (buddycoins)</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Que faire lorsque je n'ai plus de points pour faire un trajet ?</h6>
                    <p className='mt-4 text-lg'>J'ai la possibilité d'en acheter.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Est-il possible de vendre mes points ?</h6>
                    <p className='mt-4 text-lg'>Oui. Pour cela il faut être connecté et aller dans mon profil. Il y a un lien qui permet cette transaction. </p>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-semibold text-3xl mt-12 mb-4'>L'assurance</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment faire en cas d'accident ?</h6>
                    <p className='mt-4 text-lg'></p>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-semibold text-3xl mt-12 mb-24'>La prime covoiturage</h5>
                </div>
            </div>
        </div>
    )
}