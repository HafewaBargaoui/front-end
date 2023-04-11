import React from 'react'
import { StarIcon } from "@heroicons/react/solid";
import berline from "../../../assets/images/profileprefs/berline.png";
import caricon from "../../../assets/images/caricon.png";


const Stats = ({photo, avatar, users, routes}) => {

  return (

    <div className="grid place-items-center m-4 text-black">
    {photo != "" ? (
      <img
        className="w-16 h-16 rounded-full border-2 border-green-500"
        src={photo}
      />
    ) : (
      <img
        className="w-16 rounded-full border-2 border-green-500"
        src={avatar}
      />
    )}
    <p className="mt-2 font-bold text-xl">{users.lastname}</p>
    <div className="mt-4 grid grid-cols-3 gap-2 justify-items-center">
      <div className="grid justify-items-center">
      <img className="w-6" src={caricon} />
        <p>{routes.length}</p>
      </div>
      <div className="grid justify-items-center">
      <img className="w-6" src="imgs/6-removebg-preview.png" />
        <p>{users.points}</p>
      </div>
      <div className="grid justify-items-center">
        <StarIcon width={25} color='gold'/>
        <p>{users.note}</p>
      </div>
    </div>
  </div>

  )
}

export default Stats