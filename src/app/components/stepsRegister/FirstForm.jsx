import React from "react";

const FirstForm = ({ formValues, onChange }) => {
  return (
    <div className="w-full max-w-sm">

      <form className="bg-white shadow-md  px-24 rounded-md">

        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Étape 1/3</h1>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nom
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
            id="name"
            name="name"
            type="text"
            placeholder="Nom"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname" >
            Prénom
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="Prénom"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday" >
            Date de naissance
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birthday"
            name="birthday"
            onChange={onChange}
            value={formValues.birthday}
            type="date"
            placeholder="Date de naissance"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
            Adresse mail
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            onChange={onChange}
            value={formValues.email}
            type="mail"
            placeholder="Adresse mail"
          ></input>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
            type="password"
            placeholder="******************"
          ></input>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            ConfirmPassword
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            onChange={onChange}
            placeholder="******************"
          ></input>
        </div>

        <div data-role="main" className="ui-content">
            
            <label htmlFor="male">Homme</label>
            <input type="radio" name="sexe" id="sexe" value="homme" onChange={onChange}/>

            <label htmlFor="female">Femme</label>
            <input type="radio" name="sexe" id="sexe" value="femme" onChange={onChange}/>
            
        </div>
            
      </form>
    </div>
  );
};

export default FirstForm;
