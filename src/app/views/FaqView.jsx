import React, { useEffect } from 'react';

export default function Faq() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="h-full w-full flex justify-center items-center bg-cover bg-[url('./imgs/Gradient.png')]">
            <div className='flex flex-col text-white text-lg ml-64 mr-64'>
                <div className='mt-12 mb-12 text-4xl font-bold uppercase text-center underline underline-offset-4 text-cyan-500'>
                    <p>Foire aux questions :</p>
                </div>
                <div className=''>
                    <h5 className=' mb-4 underline underline-offset-4 font-bold mt-6 text-3xl text-cyan-500'>Qu'est-ce que le covoiturage ?</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Comment ça marche ?</h6>
                    <p className='mt-4 text-lg'>Le covoiturage permet de mettre en relation un conducteur et un ou plusieurs passagers pour effectuer un même trajet en voiture. Pour qu'un trajet soit disponible il faut que le conducteur crée un trajet et qu'un ou plusieurs passagers soient intéressés par celui-ci. Le covoiturage s'organise par le biais de notre application. </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Pourquoi l'utiliser ?</h6>
                    <p className='mt-4 text-lg'>L'utilisation du covoiturage a de nombreux avantages : </p>
                    <p className='text-lg ml-16 mb-2 mt-2'> •	Le côté financier puisqu'ici il n'y a pas d'échange d'argent, pour pouvoir covoiturer tout se fait avec des points. De plus avec l'argent économisé sur l'essence l'utilisateur peut d'augmenter son pouvoir d'achat.</p>

                    <p className='text-lg ml-16 mb-2'>  •	L'écologique puisqu'en partageant son véhicule on diminue les émissions de gaz à effet de serre. </p>
                    <p className='text-lg ml-16 mb-2'>  •	La mobilité pour ceux qui n'ont pas ou peu de transports en commun.</p>
                    <p className='text-lg ml-16 mb-2'> •	Fluidifier le trafic puisque le conducteur ne voyage pas seul, il a avec lui un ou plusieurs passagers qui ont laissés leurs véhicules sur des parkings spécialement dédiés au covoiturage.</p>
                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mb-4 mt-12 text-cyan-500'>Inscription - connexion</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment s'inscrire ?</h6>
                    <p className='mt-4 text-lg'>Pour s'inscrire à l'application, il faut cliquer sur la tête avatar puis cliquer sur "S'inscrire". Ensuite, on est redirigé vers la première page où il faut renseigner diverses informations. Une fois l'inscription terminée, on reçoit un mail, il faut cliquer sur le lien de ce mail pour valider l'inscription. On est redirigé directement sur la page d'accueil. On peut également s'inscrire à partir de la page d'accueil, il suffit juste de scroller un peu et cliquer sur le bouton "S'inscrire". </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment se désinscrire ?</h6>
                    <p className='mt-4 text-lg'>Il faut être connecté puis cliquer sur la tête avatar et cliquer sur "supprimer mon compte". On arrive sur une page où l'on nous demande de confirmer notre choix. Si on clique sur "Oui" le compte est supprimé et on retourne sur la page d'accueil en tant qu'utilisateur non inscrit. La désinscription est prise en compte. Si on clique sur "non" on retourne sur la page d'accueil en tant qu'utilisateur connecté. </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment se connecter ?</h6>
                    <p className='mt-4 text-lg'>Il faut cliquer sur la tête avatar puis cliquer sur "Connexion". Ensuite, on est redirigé vers la page où il faut renseigner son adresse mail et le mot de passe qu'on s'est créé. A savoir que pour se connecter à l'application, il faut s'inscrire au préalable.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment se déconnecter ?</h6>
                    <p className='mt-4 text-lg'>Pour se déconnecter il faut cliquer sur la tête avatar puis cliquer sur "Déconnexion". A savoir que pour se déconnecter à l'application, il faut être connecté au préalable.</p>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mb-4 mt-12 text-cyan-500'>Profil d'un utilisateur</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Je n'ai pas reçu de mail à la fin de mon inscription que dois-je faire ?</h6>
                    <p className='mt-4 text-lg'>Il faut d'abord vérifier que l'email de validation ne se trouve pas dans le dossier "spam" ou "courrier indésirable". Si le courriel n'est pas dans l'un de ses dossiers c'est que l'inscription n'a pas été prise en compte. Recommencez donc la procédure d'inscription en vérifiant bien votre adresse mail.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Comment puis-je modifier mon mot de passe ?</h6>
                    <p className='mt-4 text-lg'>Il faut être connecté puis cliquer sur l'avatar et aller dans mon profil. Il y a un lien "Modifier mot de passe".</p>
                    {/*  (il faut renseigner l'ancien et créer le nouveau?) */}
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Que faire si je perds mon mot de passe ?</h6>
                    <p className='mt-4 text-lg'> J'ai la possibilité d'en créer un nouveau. Au moment de me connecter si je ne sais plus mon mot de passe il faut que je clique sur "Mot de passe oublié" pour pouvoir en créer un nouveau. Je suis redirigé vers une page où je dois renseigner mon adresse mail. Un mail est envoyé sur ma boite mail et à l'intérieur il y a un code qui permet la réinitialisation de mon mot de passe.</p>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mb-4 mt-12 text-cyan-500'>Le trajet</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Comment créer un trajet ?</h6>
                    <p className='mt-4 text-lg'>La création d'un trajet est réservée pour les conducteurs. Pour créer un trajet il faut, dans la barre de navigation, cliquer sur "Créer un trajet". On est redirigé vers une page où il faut remplir les champs demandés et renseigner les filtres qui lui permettent de créer un trajet. A savoir que la création d'un trajet se fait que lorsque l'utilisateur est inscrit et connecté.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Comment rechercher un trajet ?</h6>
                    <p className='mt-4 text-lg'>Pour rechercher un trajet il faut remplir les champs demandés dans la barre de recherche sur la page d'accueil puis cliquer sur "GO !" pour lancer la recherche. Ensuite l'utilisateur est redirigé vers une page avec les résultats de la recherche et la possibilité de choisir des filtres.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Comment réserver un trajet ?</h6>
                    <p className='mt-4 text-lg'> La réservation d'un trajet s'effectue après la recherche d'un trajet. En revanche il faut être inscrit et connecté pour pouvoir faire une réservation. </p>
                </div>
                <div className=''>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mt-12 mb-4 text-cyan-500'>Les points (buddycoins)</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment dois-je payer mon covoiturage ?</h6>
                    <p className='mt-4 text-lg'>Le principe de cette application c'est qu'il n'y a pas d'échange d'argent et que tout soit basé sur un système de points. 1 kilomètre = 1 point. Lorsqu'un utilisateur s'inscrit il a 50 points offerts donc il a droit à 50 kilomètres offerts.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Que faire lorsque je n'ai plus de points pour faire un trajet ?</h6>
                    <p className='mt-4 text-lg'>J'ai la possibilité d'en acheter. Pour cela il faut être connecté puis aller dans mon profil et dans la catégorie "acheter des points". On peut également aller dans la barre de navigation et cliquer sur "BuddyCoins". </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Est-il possible de vendre mes points ?</h6>
                    <p className='mt-4 text-lg'>Oui. Pour cela il faut être connecté et aller dans la barre de navigation puis cliquer sur buddyCoins. Il y a un lien qui permet cette transaction. </p>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mt-12 mb-4 text-cyan-500'>L'évaluation des conducteurs</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Comment puis-je donner mon avis ?</h6>
                    <p className='mt-4 text-lg'>Pour donner un avis, il faut avoir réalisé le trajet de covoiturage. Il faut être connecté puis aller dans mon profil / historique des trajets puis choisir le trajet sur lequel on veut donner notre avis. Pour donner son avis, on peut laisser un commentaire et/ou mettre des étoiles (1 étoile pas du tout satisfait et 5 étoiles très satisfait).
                    </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Est-ce obligatoire d'évaluer le conducteur ?</h6>
                    <p className='mt-4 text-lg'>Non il n'est pas obligatoire de donner votre avis. Cependant, les avis sont importants pour les autres utilisateurs de l'application qui les consultent comme étant un gage de qualité.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'>Qui peut voir les avis ?</h6>
                    <p className='mt-4 text-lg'>Tous les avis sont visibles par tous les utilisateurs inscrits et connectés.</p>
                    {/* (ou tout le monde même pas connecté ?) */}
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mb-4 mt-12 text-cyan-500'>Le désistement</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Que faire si le conducteur se désiste ?</h6>
                    <p className='mt-4 text-lg'>Le conducteur doit prévenir au plus vite les passagers qu'il devait prendre avec lui. Ils devront trouver un autre moyen de transport ou trouver un autre trajet de covoiturage via l'application. </p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Que faire si un passager se désiste ?</h6>
                    <p className='mt-4 text-lg'>Le passager doit prévenir au plus vite le conducteur puisque celui-ci va l'attendre ou bien faire un détour pour venir le chercher.</p>
                </div>
                <div>
                    <h5 className='underline underline-offset-4 font-bold text-3xl mt-12 mb-4 text-cyan-500'>L'assurance</h5>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl'>Faut-il souscrire à une assurance particulière quand on fait du covoiturage ?</h6>
                    <p className='mt-4 text-lg'>Il n'est pas nécessaire de souscrire à une assurance particulière pour covoiturer. Les covoitureurs sont assurés par l'assurance responsabilité civile du chauffeur qui couvre les dégâts corporels et matériels du passager. Ainsi, le passager du covoiturage est garanti par cette assurance obligatoire. Cependant, il est préférable de prévénir votre assureur que vous pratiquez le covoiturage.</p>
                    <h6 className='underline underline-offset-4 decoration-dotted text-2xl mt-4'> Que se passe-t-il en cas d'accident sur le trajet domicile-travail ?</h6>
                    <p className='mt-4 text-lg mb-24'>S'il s'agit d'un déplacement domicile-travail, les conducteurs et les passagers sont couverts au titre de l'accident de trajet. Il donne donc accès aux mêmes droits qu'un accident du travail. Dans le régime assurantiel domicile-travail de droit commun, les détours raisonnables sont couverts. Ces détours sont ceux que le conducteur fait pour prendre ou déposer un passager. Pour prouver que le conducteur était bien sur le chemin du travail et que le détour qu'il a fait était pour prendre ou déposer un passager, l'inscription sur notre application peut servir de justificatif.</p>
                </div>
            </div>
        </div>
    )
}
// personne à mobilité réduite
// chien guide d'aveugle
// prime covoiturage

// désistement que faire des points?
// si le conducteur ne peut pas assurer le trajet :
// le passager qui a réservé et utilisé des points -> il faut lui rendre ses points si le trajet n'a pas été réalisé

// si le passager annule le trajet -> on lui rend ses points ou pas?
// excuse valable : on rend sinon non?