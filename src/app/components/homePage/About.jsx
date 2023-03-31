import React from 'react'
import { Link } from "react-router-dom";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { URL_REGISTER} from "../../constants/urls/urlFrontEnd";
import map from "../../assets/images/homepage/map.jpg"

const About = () => {
  return (
       <div className="flex flex-row mt-20">
        <div className="basis-1/2 ml-24 mr-24">
          <Fade cascade duration="1000" triggerOnce="true">
            <h1 className="text-transform: uppercase text-white text-5xl font-semibold mt-28 mb-8 ml-20">
              Qui sommes-nous ?
            </h1>
            <div className="text-center">
              <Fade  className="text-white leading-8 text-xl" cascade duration="1000" triggerOnce="true">
                <Fade cascade damping={0.01} triggerOnce="true" >
                  Nous sommes une société de covoiturage qui privilégie le
                  coopératif
                </Fade>
                <Fade delay={1000} cascade damping={0.01} triggerOnce="true">
                  et non l'aspect financier. 50 points offerts dès votre
                  inscription !
                </Fade>
                <Fade delay={2000} cascade damping={0.01} triggerOnce="true">
                  Pour en profiter dès à présent cliquez sur le bouton
                  ci-dessous.
                </Fade>
              </Fade>
            </div>
            <AttentionSeeker effect="headShake">
              <Fade delay={2000} duration="2000" triggerOnce="true">
                <Link to={URL_REGISTER}>
                  <button
                    type="button"
                    className=" text-black uppercase font-semibold bg-jauneh hover:bg-jaune hover:scale-110 md:focus:ring-4 md:focus:outline- 
							 none rounded-lg text-md px-5 py-2.5 text-center mt-8 ml-72"
                  >
                    S'inscrire
                  </button>
                </Link>
              </Fade>
            </AttentionSeeker>
          </Fade>
        </div>
        <div className="basis-1/2 ">
          <Fade duration="3000" triggerOnce="true">
            <img
              className="flex rounded-lg  "
              src={map}
              alt="voiture"
            ></img>
          </Fade>
        </div>
      </div> 
  )
}

export default About