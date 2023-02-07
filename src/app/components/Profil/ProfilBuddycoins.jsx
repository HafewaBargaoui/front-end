import React from 'react'

const ProfilBuddycoins = () => {
  return (
    <div className="flex grow max-w-xl space-y-3 rounded-lg pb-8  px-4 shadow lg:px-8  bg-cover bg-slate-500">
    <div className="grid place-content-center">
      <div className="grid justify-content-center mx-4 text-black">
      <div className="grid place-items-center mt-4 text-black">
            <img
              className="w-20"
              src="imgs/6-removebg-preview.png"
            />
            <p className="mt-2 font-thin">10233</p>
         
          </div>

        
        <button className="mt-6 bg-jauneh hover:bg-jaune rounded-md text-black  font-normal shadow-md  py-2 px-4">
        Historique des transactions
      </button>
      
      <button className="mt-2 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4">
        Acheter des BuddyCoins
      </button>
      </div>
    </div>
  </div>
  )
}

export default ProfilBuddycoins