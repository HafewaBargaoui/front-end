import React from 'react'
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import '../../../../node_modules/leaflet/dist/leaflet.css'
import '../../app.scss'




const Carte = () => {

   const position = [50.64055652613224, 3.0438356144452072]

    return (

        <div className="rounded-lg z-10">

        <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ width: '70vw', height: '50vh' }}>
        <TileLayer
        url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=KqtlJiAPF3SvpfVBeuZ4"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      
      </MapContainer>
     

        </div>
   


    );
  };
  

export default Carte