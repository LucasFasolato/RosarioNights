import React from 'react'
import './Styles.css'
import "https://kit.fontawesome.com/0c38f8891c.js";
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import Map from './../../Map/Map'
import credentials from './../../Credentials/CredentialAPI'
import CarruselM from '../../Carrousel/CarruselM';
import CommentBox from '../../CommentBox/CommentBox';
import MenuBoliche from '../../MenuBoliche/MenuBoliche';

const mapURL = `https://maps.googleapis.com/maps/api/js?3.exp&key=${credentials.mapsKey}`;
function Volt() {
  return (
    <div> 
      <div className='boliches__bg'>
        <NavBar />
        <div>
          <div className='display__portada-volt'>
          </div>
          <div className='display__all'>
            <MenuBoliche/>    
            <div className='display__r-menu'>
              <h1 className='title__boliches'>-- VOLT --</h1>
              <div className='display__op'>
                <div className='display__x'>
                <div className='display__info-desc'><h4>DESCRIPTION</h4></div>
                  <p className='desc__text'>Ubicado en el Alto Rosario, boliche +19.
                    <br/>
                    Boliche cerrado en la zona norte de Rosario, Santa Fe.
                  </p>
                </div> 
                <div className='display__x'>
                  <div className='display__info-text fade'><h3>IMPORTANT INFO</h3></div>
                  <ul>
                    <li className='disp__li'>
                      Direccion:
                      <p>..., Rosario, Santa Fe</p>
                    </li>
                    <li className='displ__li'>
                      Horario:
                      <p>00hs a 5hs</p>
                    </li>
                    <li className='displ__li'>
                      Edad:
                      <p>+19</p>
                    </li>
                  </ul>
                </div>
                <div className='display__mapa'>
                  <Map
                  googleMapURL= {mapURL}
                  containerElement= {<div className='display__m'/>}
                  mapElement= {<div style={{height:'100%'}}/>}
                  loadingElement= {<p>Cargando</p>}
                  />
                </div>
              </div>
              <div className='display__space'> </div>
              <div className='display__comentarios'>
                <div className='imgs__boliche'> 
                  <CarruselM/>
                </div>
                <div className='coments__boliche'>
                  <CommentBox />
                </div>
              </div>
            </div>    
          </div>    
        </div>
      </div>
      <Footer />
    </div>    
  )
}

export default Volt