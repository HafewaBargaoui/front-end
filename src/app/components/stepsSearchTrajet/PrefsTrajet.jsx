import React from 'react'

const PrefsTrajet = () => {
  return (
    <div className="fixed top-24 left-0 h-screen w-40 m-0  p-6 flex flex-col bg-black text-white shadow-lg justify-items-center clear-left">
      <p className='mt-12 mb-20'> Préférences</p>
      <form>
      <p className='text-yellow-400'> Section 1</p>
        <div className='mb-4'>
        <div>
        <input
          type="checkbox"
          className=""
          id="parler"
          name="prefs"
          value="parler"
        />
        <label htmlFor="parler">Parler</label>
        </div>
        <div>
        <input
          type="checkbox"
          className=""
          id="fumer"
          name="prefs"
          value="fumer"
        />
        <label htmlFor="fumer">Fumer</label>
        </div>
        <div>
        <input
          type="checkbox"
          className=""
          id="radio"
          name="prefs"
          value="radio"
        />
        <label htmlFor="radio">Radio</label>
        </div>
        <div>
        <input
          type="checkbox"
          className=""
          id="clim"
          name="prefs"
          value="clim"
        />
        <label htmlFor="clim">Clim</label>
        </div>
        </div>
        <p className='text-yellow-400'> Section 2</p>
        <div>
        <input
          type="checkbox"
          className=""
          id="berline"
          name="prefs"
          value="berline"
        />
        <label htmlFor="berline">Berline</label>
        </div>
        <div>
        <input
          type="checkbox"
          className=""
          id="tout-terrain"
          name="vehicule"
          value="tout-terrain"
        />
        <label htmlFor="tout-terrain">Tout-Terrain</label>
        </div>
        <div>
        <input
          type="checkbox"
          className=""
          id="citadine"
          name="vehicule"
          value="citadine"
        />
        <label htmlFor="citadine">Citadine</label>
        </div>
        <div>
        <input
          type="checkbox"
          className=""
          id="electrique"
          name="vehicule"
          value="electrique"
        />
        <label htmlFor="electrique">Eléctrique</label>
        </div>
      </form>
    </div>
  );
}

export default PrefsTrajet