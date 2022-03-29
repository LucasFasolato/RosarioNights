import React from 'react';
import "./Carrusel.css";
import img1 from "./../Boliches/imgs-boliches/lamarina.png";
import img2 from "./../Boliches/imgs-boliches/bresh.png";
import img3 from "./../Boliches/imgs-boliches/mora.png";
import img4 from "./../Boliches/imgs-boliches/bohemia2.0.png";
import { useState, useEffect } from 'react';
function CarruselM() {
    const [imagen, setImagen] = useState(img1);
    let indice = 0;
    const imgs = [img1, img2,img3,img4];
    let nextImg = () => {
        console.log(imgs.length-1);
        if (indice === 3) {
          indice=0;  
          console.log("NEXT: "+indice );
        } else {
          indice = indice+1;  
          console.log("NEXT: "+indice );
        } 
        setImagen(imgs[indice]);  
    }


    let prevImg = () => {
      console.log(imgs.length-1);
        if (indice === 0) {
          indice=3; 
          console.log("PREV: "+indice );
        } else {
          indice = indice-1;
          console.log("NEXT: "+indice );
        }
        setImagen(imgs[indice]);    
    }

  return (
    <div className='contenedorPrincipal'>
      <div className='display__slide'>
        <img id="imagen" className='img1' src={imagen}/>
      </div>
      <div className='display__btt-left'>
        <button 
        className='btt__left'
        onClick={() => {
          prevImg();
        }}
        />
      </div>
      <div className='display__btt-right'>
        <button 
        className='btt__right' 
        onClick={() => {
          nextImg();
        }} 
        />
      </div>
        
    </div>
  )
}

export default CarruselM