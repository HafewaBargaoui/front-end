import React from 'react'

const Stats = ({photo, avatar}) => {

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
    <p className="mt-2 font-bold text-xl">Username</p>
    <div className="mt-4 grid grid-cols-3 gap-2 justify-items-center">
      <div className="grid justify-items-center">
        <p>logo1</p>
        <p>1</p>
      </div>
      <div className="grid justify-items-center">
        <p>logo2</p>
        <p>2</p>
      </div>
      <div className="grid justify-items-center">
        <p>logo3</p>
        <p>3</p>
      </div>
    </div>
  </div>

  )
}

export default Stats