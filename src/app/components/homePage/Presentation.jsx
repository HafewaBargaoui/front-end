import React, { useEffect, useRef } from 'react'
import { Fade } from "react-awesome-reveal";
import { gsap } from "gsap";
import hommes from "../../assets/images/homepage/hommes.jpeg"
import logocarbuddy from "../../assets/images/footerHomepage/CarbuddyWhitePink.png"
const Presentation = () => {
    const imgRef = useRef(null);
    useEffect(() => {
      gsap.from(imgRef.current, {
        duration: 2.5,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      });
    }, []);
  return (
   <div className="">
        <Fade duration={2000} triggerOnce="true">
          <div className="flex mx-auto w-96 mt-10 mb-10 ">
            <img src={logocarbuddy} alt="logo en noir"></img>
          </div>

          <div className="flex mx-auto w-1/2 h-auto ">
            <img
              ref={imgRef}
              className="rounded-lg drop-shadow-lg"
              src={hommes}
              alt="voiture"
            ></img>
          </div>
        </Fade>

        <div className="mx-auto pb-20 pt-10 text-white leading-8 text-center  text-xl tracking-wide drop-shadow-lg ">
          <Fade duration="2000" triggerOnce="true">
            <Fade cascade damping={0.01} triggerOnce="true">
              Une multitude de trajets est disponible sur notre application.
            </Fade>
            <Fade delay={1000} cascade damping={0.01} triggerOnce="true">
              Réservez votre trajet en quelques clics ! Pour que vous puissiez
            </Fade>
            <Fade delay={2000} cascade damping={0.01} triggerOnce="true">voyager en toute confiance, nous vérifions chaques profils.</Fade>
          </Fade>
        </div>
      </div>
  )
}

export default Presentation