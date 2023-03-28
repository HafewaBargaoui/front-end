import React from 'react'

const PrefsTrajet = () => {
  const Sections = ({id, name, value, txt}) => (
    <div>
    <input
      type="checkbox"
      id={id}
      name={name}
      value={value}
    />
    <label htmlFor={value}>{txt}</label>
    </div>
  )

  return (
    <div className="fixed top-24 left-0 h-screen w-40 m-0  p-6 flex flex-col bg-black text-white shadow-lg justify-items-center clear-left">
      <p className='mt-12 mb-20'> Préférences</p>
      <form>
      <p className='text-yellow-400'> Section 1</p>
        <div className='mb-4'>
          <Sections id={parler} name={prefs} value={parler} txt={Parler}/>
          <Sections id={fumer} name={prefs} value={fumer} txt={Fumer}/>
          <Sections id={radio} name={prefs} value={radio} txt={Radio}/>
          <Sections id={clim} name={prefs} value={clim} txt={Clim}/>
        </div>
        <p className='text-yellow-400'> Section 2</p>
          <Sections id={berline} name={vehicule} value={berline} txt={Berline}/>
          <Sections id={tout-terrain} name={vehicule} value={tout-terrain} txt={Tout-terrain}/>
          <Sections id={citadine} name={vehicule} value={citadine} txt={Citadine}/>
          <Sections id={electrique} name={vehicule} value={electrique} txt={Électrique}/>
      </form>
    </div>
  );
}

export default PrefsTrajet