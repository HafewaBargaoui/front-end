import React from 'react';

export default function Contact() {
    return (
        <div className='h-full bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>

            <div className='flex flex-col text-white text-center pt-24 font-semibold'>
                <div className='text-4xl uppercase underline underline-offset-4 mb-24 mt-16'>
                    <p>Contactez-nous :</p>
                </div>
                <div className='text-3xl'>
                    <p>Pour toutes demandes ou réclamations veuillez nous contacter via cette adresse e-mail : </p> 
                    <div className='text-cyan-400 hover:text-cyan-600 mt-8 text-3xl'>
                    <a href="mailto:carbuddy@covoiturage.fr">carbuddy@covoiturage.fr</a>

                    </div>
                </div>
            </div>
        </div>
    )
}