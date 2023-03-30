import React, { useEffect, useRef } from 'react'
import {Fade } from "react-awesome-reveal";
import tirelire from "../../assets/images/homepage/tirelire.jpg"

const Coins = () => {
  return (
    <Fade direction="right" triggerOnce="true">
    <div className="bg-white bg-opacity-40 p-8 mx-auto mr-72 ml-52 mt-16 rounded-lg shadow-lg">
      <div className="flex flex-row">
    
        <p className="text-lg text-center mx-24 mt-4">
          L'application vous permet de faire des économies d'argent
          puisqu'ici il n'est question que de points. Ne partez plus
          avec les places passagers vides. Faites-en profiter d'autres
          utilisateurs.
        </p>
        <div className="">
          <img className="rounded-md" src={tirelire} alt="logo tirelire" />
        </div>
      </div>
    </div>
  </Fade>
  )
}

export default Coins