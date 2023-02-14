import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordModified = () => {

    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    useEffect(() => {
      const timer =
        count > 0 && setInterval(() => setCount(count - 1), 1000);
      return () => clearInterval(timer);
    }, [count]);

    useEffect(() => {
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }, []);

  return (
    <div className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
      <div className="w-full max-w-lg h-96 max-h-lg flex justify-center items-center lg:px-8 bg-white bg-opacity-30 rounded-lg shadow-lg shadow-gray-900/80">
        <p className="text-black text-center font-semibold">
          Nouveau mot de passe enregistré, vous allez être automatiquement redirigé vers la
          page de connexion.
        </p>
      </div>
    </div>
  );
};

export default PasswordModified;