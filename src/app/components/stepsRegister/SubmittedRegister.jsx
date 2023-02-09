import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const SubmittedRegister = () => {

    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    useEffect(() => {
      const timer =
        count > 0 && setInterval(() => setCount(count - 1), 1000);
      return () => clearInterval(timer);
    }, [count]);

    useEffect(() => {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }, []);

  return (
    <div className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
    <div className="w-full max-w-lg h-96 max-h-lg flex flex-col justify-center items-center lg:px-8 bg-white bg-opacity-30 rounded-lg shadow-lg shadow-gray-900/80">
      <p className="text-black text-center font-thin">
        redirection vers la page d'accueil dans : {count}
      </p>
      <p className="text-black text-center font-semibold">
        Vous allez recevoir un mail de confirmation
      </p>
    </div>
  </div>
  )
}

export default SubmittedRegister