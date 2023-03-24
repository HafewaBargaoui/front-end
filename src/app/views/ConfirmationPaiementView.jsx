import React, { useEffect } from 'react'
import { mailPaiement } from "../api/backend/account";


const ConfirmationPaiement = () => {

    useEffect(async () => {
            await mailPaiement();
        }, [])

    return (
        <div className='h-full bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
            <h1>Paiement validé, un mail récapitulatif de votre commande viens d'être envoyé</h1>
        </div>
    )
}
export default ConfirmationPaiement