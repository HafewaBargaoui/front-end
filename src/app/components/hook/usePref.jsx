import { useState, useEffect } from "react";

export const usePref = () => {
  const [prefsPassager, setprefsPassager] = useState([]);
  const [carOption, setcarOption] = useState();
  const [modeleOption, setmodeleOption] = useState();
  const [place, setplace] = useState();
  const [coffre, setcoffre] = useState();
  const [prefConducteur, setprefConducteur] = useState([]);
  const [preferencesConducteur, setpreferencesConducteur] = useState([]);


  const submitFirst = (e) => {
    e.preventDefault();
    const prefPassager = e.target;
    const formData = new FormData(prefPassager);
    const formJson = Object.fromEntries(formData.entries());
    setprefsPassager([formJson])
    console.log(prefsPassager);


  }

  const submit = (e) => {
    e.preventDefault();

    setpreferencesConducteur([
      {
        prefConducteur: prefConducteur,
        prefsPassager: prefsPassager,
      },
    ]);
  };

  useEffect(() => {
    console.log(prefConducteur);
    console.log(preferencesConducteur);
  }, [prefConducteur, preferencesConducteur]);

  return {
    carOption,
    setcarOption,
    modeleOption,
    setmodeleOption,
    place,
    setplace,
    coffre,
    setcoffre,
    prefConducteur,
    setprefConducteur,
    preferencesConducteur,
    submitFirst,
    submit,
  };
};
