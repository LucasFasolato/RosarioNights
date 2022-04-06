import React from 'react';
import "./Carrusel.css";
import img1 from "./../Boliches/imgs-boliches/lamarina.png";
import img2 from "./../Boliches/imgs-boliches/bresh.png";
import img3 from "./../Boliches/imgs-boliches/mora.png";
import img4 from "./../Boliches/imgs-boliches/bohemia2.0.png";
import { useState, useEffect} from 'react';
let indice = 0;
function CarruselM() {
    const [imagen, setImagen] = useState(img1);
    const imgs = [img1, img2,img3,img4];
    
    const nextImg = () => {
        if (indice === 3) {
          indice=0;  
        } else {
          indice = indice+1;  
        } 
        setImagen(imgs[indice]);  
    }


    const prevImg = () => {
        if (indice === 0) {
          indice=3; 
        } else {
          indice = indice-1;
        }
        setImagen(imgs[indice]);    
    }

    useEffect(() => {
      const interval = setInterval(() => {
        nextImg();
      }, 7000);
      return () => clearInterval(interval);
    }, []);
    
  return (
    <div className='contenedorPrincipal' id="disp">
      <div className='display__slide fadein'>
        <img id="imagen" className='img1' src={imagen} alt="imagenes"/>
      </div>
      <div>
        <div className='display__btt-left' >
          <button 
          className='btt__left display__bttn'
          onClick={() => {
            prevImg();
          }}
          />
        </div>
        <div className='display__btt-right display__bttn' >
          <button 
          className='btt__right' 
          onClick={() => {
            nextImg();
          }} 
          />
        </div>
      </div>
      
        
    </div>
  )
}

export default CarruselM