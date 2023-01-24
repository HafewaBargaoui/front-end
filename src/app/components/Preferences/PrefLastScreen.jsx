import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrefLastScreen = () => {

    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }, [])
    
   
   

  return (

    <div className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
    <div className="w-full max-w-lg h-96 max-h-lg flex justify-center items-center lg:px-8 bg-white shadow-lg shadow-gray-900/80">
        
    <p className="text-black text-center font-light">
        Profil enregistré, vous allez être automatiquement redirigé vers la page d’accueil .
        </p>
  </div>
</div>



  )
}

export default PrefLastScreen