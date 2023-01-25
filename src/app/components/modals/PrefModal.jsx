import React from "react";
import { useRef } from "react";


const PrefModal = ({setmodalOn,setchoiceOui, setchoiceNon}) => {


    const modalRef = useRef();

    const closeClick = () => {
        console.log('clic X')
        setmodalOn(false);
    }

    const clickOui = () => {
        console.log('click OUI');
        setchoiceOui(true);
        setmodalOn(false);
    }

    const clickNon = () => {
        console.log('clic non');
        setchoiceNon(true);
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


  return (
    <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm x"
         onClick={clickOut}    
        >

        <div ref={modalRef}>
        <div className="relative w-full h-full max-w-md md:h-auto"
           
           >
             <div className="relative h-44 grid place-items-center bg-black shadow rounded-lg">
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
               <div className="p-6 text-center">
                 <h3 className="mb-5 text-lg font-light text-white">
                   souhaitez-vous également devenir conducteur ?
                 </h3>
                 <button
                   data-modal-hide="popup-modal"
                   type="button"
                   onClick={clickOui}
                   className="text-white bg-vert hover:bg-verth rounded-md font-semibold text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                 >
                   OUI
                 </button>
                 <button
                   data-modal-hide="popup-modal"
                   onClick={clickNon}
                   type="button"
                   className="text-black bg-rose hover:bg-roseh rounded-md font-semibold text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                 >
                   NON
                 </button>
               </div>
             </div>
           </div>
        </div>
      

 
    </div>
  );
};

export default PrefModal;
