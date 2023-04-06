import React from "react";
import { Link } from "react-router-dom";
import { URL_CONTACT, URL_FAQ } from "../../constants/urls/urlFrontEnd";
import facebook from "../../assets/images/footerHomepage/facebook.png";
import youtube from "../../assets/images/footerHomepage/youtube.png";
import linkedin from "../../assets/images/footerHomepage/linkedin.png";
import twitter from "../../assets/images/footerHomepage/twitter.png";
import instagram from "../../assets/images/footerHomepage/instagram.png";
const Footer = () => {
  const FooterLink = ({ to, txt }) => (
    <Link to={to} className="mr-40 text-lg">
      {txt}
    </Link>
  );
  const FooterHref = ({ lien, txt }) => (
    <a href={lien} target="_blank" className="mr-40 text-lg">
      {" "}
      {txt}
    </a>
  );
  const FooterImg = ({ src, lien, alt, title }) => (
    <div className="w-14 pr-6">
      <a href={lien} target="_blank">
        <img src={src} alt={alt} title={title} />
      </a>
    </div>
  );
  return (
    <div>
      <div className="flex flex-row bg-black mt-36 px-4 py-12 ">
        <div className="flex w-56 ml-20">
          <img src="imgs/CarbuddyWhitepink.png" alt="logo en blanc"></img>
        </div>
        <div className="flex flex-row text-white mx-auto">
          <FooterHref lien="https://mytek-store.fr/cgv" txt="CGV" />
          <FooterHref
            lien="https://mytek-store.fr/mentions-legales"
            txt="CGU"
          />
          <FooterLink to={URL_FAQ} txt="FAQ" />
          <FooterLink to={URL_CONTACT} txt="Nous contacter" />
        </div>
        <div className="flex flex-row w-12 mr-32">
          <img src="imgs/C_logoWhitecopie.png" alt="logo C en blanc"></img>
        </div>
      </div>
      <div className="flex flex-row bg-black px-4 pb-12">
        <div className="flex flex-row mx-auto">
          <FooterImg
            src={facebook}
            alt={"facebook"}
            title={"facebook"}
            lien={"https://facebook.com"}
          />
          <FooterImg
            src={twitter}
            alt={"twitter"}
            title={"twitter"}
            lien={"https://twitter.com"}
          />
          <FooterImg
            src={youtube}
            alt={"youtube"}
            title={"youtube"}
            lien={"https://youtube.com"}
          />
          <FooterImg
            src={linkedin}
            alt={"linkedin"}
            title={"linkedin"}
            lien={"https://linkedin.com"}
          />
          <FooterImg
            src={instagram}
            alt={"instagram"}
            title={"instagram"}
            lien={"https://instagram.com"}
          />
        </div>
        <div className="mx-auto text-white pr-32">
          <p>Copyright © 2023.Carbuddy Inc.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
