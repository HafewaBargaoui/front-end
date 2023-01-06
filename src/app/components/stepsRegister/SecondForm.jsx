import React from "react";

const SecondForm = ({ formValues, onChange }) => {

  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-md  px-24 pt-16 pb-10 mb-8 rounded-md">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Étape 2/3</h1>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Addresse
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="AddressAdd"
          >
            Addresse complémentaire
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Street"
          >
            Numéro de la rue
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="street"
            name="street"
            type="text"
            placeholder="rue"
            onChange={onChange}
            value={formValues.street}
          ></input>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="City"
          >
            Ville
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Zip"
          >
            Code postal
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            name="zip"
            onChange={onChange}
            value={formValues.zip}
            placeholder="Code postal"
          ></input>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Phone"
          >
            Téléphone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            name="phone"
            onChange={onChange}
            value={formValues.phone}
            placeholder="Téléphone"
          ></input>
        </div>

        <div className="flex items-center justify-between"></div>
      </form>
    </div>
  );
};

export default SecondForm;