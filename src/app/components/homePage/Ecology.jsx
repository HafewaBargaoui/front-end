import React, { useEffect, useRef } from 'react'
import {Fade } from "react-awesome-reveal";
import ecologie from "../../assets/images/homepage/ecologie.jpg"

const Ecologie = () => {
  return (
    <Fade direction="left" triggerOnce="true">
              <div className="bg-white bg-opacity-40 p-8 mx-auto mr-52 ml-72 rounded-lg shadow-lg">
                <div className="flex flex-row">
                  <div className="w-40">
                    <img className="rounded-md" src={ecologie} alt="logo écologie" />
                  </div>
                  <p className="text-lg text-center mx-24 mt-6">
                    En utilisant notre application de covoiturage, vous
                    contribuez au bien-être de notre planète en réduisant les
                    émissions de carbone.
                  </p>
                </div>
              </div>
            </Fade>
  )
}

export default Ecologie