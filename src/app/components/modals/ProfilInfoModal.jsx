import React from "react";
import { useRef } from "react";
import { editProfile } from "../../api/backend/account";


const ProfilInfoModal = ({setmodalOn, users, adresse, setsubmitModifs, user}) => {

    const modalRef = useRef();

    const closeClick = () => {
        console.log('clic X')
        setmodalOn(false);
    }

    const clickOut = (e) => {
        if (modalRef.current.contains(e.target)) {
            console.log('in')
        } else {
            console.log('out');
            setmodalOn(false)
        }
    }

    const clickModifs = async () => {
        const response = await editProfile(user.id)
        //setsubmitModifs(true);
        setmodalOn(false);
    }



  return (
    <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm x"
    onClick={clickOut}    
   >

   <div ref={modalRef}>
   <div className=" w-96 max-w-md"
      
      >
        <div className="relative grid place-items-center bg-black bg-opacity-30 shadow rounded-lg">
          <button
            type="button"
            onClick={closeClick}
            className="absolute top-3 right-2.5 text-bleu bg-transparent hover:text-bleuh rounded-lg text-sm p-1.5 ml-auto inline-flex items-center pb-2 "
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="grid grid-flow-row gap-4 mx-16 p-6 text-center">
            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Nom :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={users.lastname} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Prénom :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={users.name} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Sexe :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={users.sex} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Mail :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={users.email} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Téléphone :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={users.phone} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">N° de rue :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={adresse.streetNumber} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Voie :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={adresse.pathType} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Nom de la rue :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={adresse.streetName} />
            </div>

            <div className="grid grid-flow-col gap-8">
              <p className="text-white">Code Postal :</p>
              <input type="text"
                     className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                     placeholder={adresse.zip} />
            </div>

            <button 
          className="mt-8 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4"
          onClick={clickModifs}
          >
          Modifier Profil
        </button>
            
          </div>
        </div>
      </div>
   </div>
 


</div>
  )
}

export default ProfilInfoModal