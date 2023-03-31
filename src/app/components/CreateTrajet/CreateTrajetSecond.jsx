import React from "react";



const CreateTrajetSecond = ({ click2 }) => {
  return (
    <div>
      <div className="rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
        <h6 className="text-center m-1 font-semibold">
          4 Trajets trouvés pour votre recherche :
        </h6>
        <p className="text-center m-1 font-light">
          Dont 3 selon vos préférences
        </p>

      </div>
      <button
        onClick={click2}
        className="m-2 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-0 px-1
      "
      >
        Etape suivante
      </button>
    </div>
  );
};

export default CreateTrajetSecond;
