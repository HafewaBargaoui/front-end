import React from 'react'
import Carte from '../components/carte/Carte'

const CarteView = () => {
  return (
    <div className='h-full w-full flex justify-center items-center  bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
      <Carte/>
    </div>
  )
}

export default CarteView