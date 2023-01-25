import React, {useState} from "react";
import PrefConducteur from "../components/Preferences/PrefConducteur";
import PrefPassager from "../components/Preferences/PrefPassager";

const ProfilePrefsView = ({choiceOui}) => {






  return (
    
    <div className='h-full flex justify-center items-center  bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
    
      {choiceOui ? <PrefConducteur choiceOui={choiceOui}/> :  <PrefPassager />}
      </div>
   
  );
};

export default ProfilePrefsView;
