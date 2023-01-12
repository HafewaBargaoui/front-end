import React from "react";

const SecondForm = ({ formValues, onChange }) => {
  return (
    <div className="w-full max-w-md space-y-8 rounded-xl p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8 bg-cover bg-center bg-[url('../../assets/images/GradientInscr.png')]">
      <div className="grid gap-4 place-content-center items-center">
        <h1 className="mt-2 text-center text-3xl font-semibold text-black">
          INSCRIPTION
        </h1>
      </div>
      <form className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-3 rounded-md shadow-sm">
          <div className="grid grid-row space-y-3">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="address"
              >
                Type de voie
              </label>
              <input
                className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                name="address"
                type="text"
                placeholder="Addresse"
                onChange={onChange}
                value={formValues.address}
              ></input>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="AddressAdd"
              >
                Complément d'adresse
              </label>
              <input
                className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="addressAdd"
                name="addressAdd"
                type="text"
                placeholder="Addresse complémentaire"
                onChange={onChange}
                value={formValues.addressAdd}
              ></input>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="Street"
              >
                Nom de la rue
              </label>
              <input
                className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="street"
                name="street"
                type="text"
                placeholder="Nom de la rue"
                onChange={onChange}
                value={formValues.street}
              ></input>
            </div>
          </div>
          <div className="grid grid-row space-y-3">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="Street"
              >
                Numéro de la rue
              </label>
              <input
                className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="street"
                name="street"
                type="number"
                placeholder="rue"
                onChange={onChange}
                value={formValues.numberOfStreet}
              ></input>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="City"
              >
                Ville
              </label>
              <input
                className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                name="city"
                type="text"
                placeholder="Ville"
                onChange={onChange}
                value={formValues.city}
              ></input>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="Zip"
              >
                Code postal
              </label>
              <input
                className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="zip"
                type="text"
                name="zip"
                onChange={onChange}
                value={formValues.zip}
                placeholder="Code postal"
              ></input>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="Phone"
          >
            Téléphone
          </label>
          <input
            className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            onChange={onChange}
            value={formValues.phone}
            placeholder="Téléphone"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SecondForm;
