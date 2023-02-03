import React from 'react';

export default function Faq() {
    return (
        <div className="accueil bg-cover bg-[url('./imgs/Gradient.png')]">
            <div className='flex flex-col text-white text-lg ml-64 mr-64'>
                <div className='text-white mt-12 mb-12 text-4xl font-bold uppercase text-center underline underline-offset-4 text-cyan-500'>
                    <p>Foire aux questions :</p>
                </div>
                <div className=''>
                    <h5 className=' mb-4 underline underline-offset-4 font-bold mt-6 text-3xl text-cyan-500'>Qu'est-ce que le covoiturage ?</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment ça marche ?</h6>
                    <p className='mt-4 text-lg'>Le covoiturage permet de mettre en relation un conducteur et un ou plusieurs passagers. Dans notre cas le covoiturage s'organise par le biais de notre application. </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Pourquoi l'utiliser ?</h6>
                    <p className='mt-4 text-lg'>L'utilisation du covoiturage a de nombreux avantages : </p>
                    <p className='text-lg ml-16 mb-2 mt-2'> •	Le côté financier puisqu'ici il n'y a pas d'échanges d'argent pour pouvoir covoiturer tout se fait avec des points. De plus avec l'argent économisée sur l'essence ça permet d'augmenter son pouvoir d'achat.</p>

                    <p className='text-lg ml-16 mb-2'>  •	L'écologique puisqu'en partageant son véhicule on diminue les émissions de gaz à effet de serre. </p>
                    <p className='text-lg ml-16 mb-2'>  •	La mobilité pour ceux qui n'ont pas ou peu de transports en commun.</p>
                    <p className='text-lg ml-16 mb-2'> •	Fluidifier le trafic puisque les passagers ont la possibilité de laisser leur voiture sur des parkings spécialement dédiés au covoiturage.
                    </p>
                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mb-4 mt-12 text-cyan-500'>Le profil d'un utilisateur</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment s'inscrire à l'application ?</h6>
                    <p className='mt-4 text-lg'>Pour s'inscrire à l'application ,il faut cliquer sur la tête avatar puis cliquer sur "s'inscrire". On peut également s'inscrire à partir de la page d'accueil, il faut juste scroller un peu et cliquer sur le bouton "S'inscrire". </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment se désinscrire à l'application ?</h6>
                    <p className='mt-4 text-lg'>Il faut être connecté et aller dans mon profil. Pour se faire, il faut cliquer sur la tête avatar, puis mon profil. Tout en bas, il y a un lien "se désinscrire" il faut cliquer dessus et confirmer son choix. La désinscription est prise en compte.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Je n'ai pas reçu de mail à la fin de mon inscription que dosi-je faire ?</h6>
                    <p className='mt-4 text-lg'>Il faut d'abord vérifier que l'email de validation ne se trouve pas dans le dossier "spam" ou "courrier indésirable". Si le courriel n'est pas dans l'un de ses dossiers c'est que l'inscription n'a pas été prise en compte. Recommencez donc la procédure d'inscription en vérifiant bien votre adresse mail.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Comment puis-je modifier mon mot de passe ?</h6>
                    <p className='mt-4 text-lg'>Il faut être connecté puis cliquer sur l'avatar et aller dans mon profil. Il y a un lien "modifier mon mot de passe". (il faut renseigner l'ancien et créer le nouveau?)</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Que faire si je perds mon mot de passe ?</h6>
                    <p className='mt-4 text-lg'> J'ai la possibilité d'en créer un nouveau. Au moment de me connecter si je n'ai pas mon mot de passe il faut que je clique sur mot de passe "oublié" pour pouvoir en créer un nouveau.</p>

                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mt-12 mb-4 text-cyan-500'>L'évaluation des conducteurs</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment puis-je donner mon avis ?</h6>
                    <p className='mt-4 text-lg'>Pour donner un avis, il faut avoir réalisé le trajet de covoiturage. Il faut être connecté puis aller dans mon profil / historique des trajets puis choisir le trajet sur lequel on veut donner notre avis.
                    </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Est-ce obligatoire d'évaluer le conducteur ?</h6>
                    <p className='mt-4 text-lg'>Non il n'est pas obligatoire de donner votre avis. Cependant, les avis sont importants pour les autres utilisateurs de l'application qui les consultent comme étant un gage de qualité.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Qui peut voir les avis ?</h6>
                    <p className='mt-4 text-lg'>Tous les avis sont visibles par tous les utilisateurs inscrits et connectés (ou tout le monde même pas connecté ?)</p>
                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mt-12 mb-4 text-cyan-500'>Les points (buddycoins)</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Que faire lorsque je n'ai plus de points pour faire un trajet ?</h6>
                    <p className='mt-4 text-lg'>J'ai la possibilité d'en acheter. Pour cela il faut être connecté puis aller dans mon profil et dans la catégorie "acheter des points". OU Pour cela il faut aller sur la barre de navigation et cliquer sur "BuddyCoins" </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Est-il possible de vendre mes points ?</h6>
                    <p className='mt-4 text-lg'>Oui. Pour cela il faut être connecté et aller dans mon profil. Il y a un lien qui permet cette transaction. </p>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mt-12 mb-4 text-cyan-500'>L'assurance</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Faut-il souscrire à une assurance particulière quand on fait du covoiturage ?</h6>
                    <p className='mt-4 text-lg'>Il n'est pas nécessaire de souscrire à une assurance particulière pour covoiturer. Les covoitureurs sont assurés par l'assurance responsabilité civile du chauffeur qui couvre les dégâts corporels et matériels du passager. Ainsi, le passager du covoiturage est garanti par cette assurance obligatoire.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Que faire en cas d'accident sur le trajet domicile-travail ?</h6>
                    <p className='mt-4 text-lg mb-24'>S'il s'agit d'un déplacement domicile-travail, les conducteurs et les passagers sont couverts au titre de l'accident de trajet. Il donne donc accès aux mêmes droits qu'un accident du travail. Dans le régime assurantiel domicile-travail de droit commun, les détours raisonnables sont couverts. Ces détours sont ceux que le conducteur fait pour prendre ou déposer un passager. Pour prouver que le conducteur était bien sur le chemin du travail et que le détour qu'il a fait était pour prendre ou déposer un passager, l'inscription sur notre application peut servir de justificatif.</p>
                </div>
            </div>
        </div >
    )
}