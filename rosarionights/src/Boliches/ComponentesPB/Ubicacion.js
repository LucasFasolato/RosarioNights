import React from 'react'
import './Ubicacion.css'
import Map from './../../Map/Map'
import {useNavigate } from "react-router-dom";
import credentials from './../../Credentials/CredentialAPI'

function Ubicacion() {
  const navigate = useNavigate();
  const mapURL = `https://maps.googleapis.com/maps/api/js?3.exp&key=${credentials.mapsKey}`;
  return (
    <div className='ubicacion__display'>
      <h5> ¿CÓMO LLEGO?</h5>
      <div className='ubicacion__mapa'>
      <Map
        googleMapURL= {mapURL}
        containerElement= {<div className='ubicacion__m'/>}
        mapElement= {<div style={{height:'100%'}}/>}
        loadingElement= {<p>Cargando</p>}
      />
      <button className='ubicacion__btt'><a onClick={() => navigate("/home/boliches")}> ATRÁS</a> </button>
    </div>
    </div>
    
  )
}

export default Ubicacion