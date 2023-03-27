import React, { useRef } from "react";

const PhotoVehiculeModal = ({ setphotoModal, photoSrc }) => {
  const modalRef = useRef();


  const clickOut = (e) => {
    if (modalRef.current.contains(e.target)) {
    } else {
      setphotoModal(false);
    }
  };

  return (
    <div
      className="h-full w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm x"
      onClick={clickOut}
    >
      <div ref={modalRef}>
        <div className=" w-96 max-w-md">
          <div className="relative grid place-items-center bg-black bg-opacity-30 shadow rounded-lg">
            <>
              <div className="fixed flex justify-center items-center">
                <div className="w-full h-full  max-w-lg lg:px-8 bg-black bg-opacity-30 rounded-lg shadow-lg shadow-gray-900/80">
                  <>
                    <img
                      key={photoSrc}
                      className="w-96 m-8 rounded-md"
                      src={photoSrc}
                    />
                  </>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoVehiculeModal;
