import React from 'react';
import "./Carrusel.css"
import img1 from "./../Boliches/imgs-boliches/lamarina.png";
import img2 from "./../Boliches/imgs-boliches/bresh.png";
import img3 from "./../Boliches/imgs-boliches/mora.png";
import img4 from "./../Boliches/imgs-boliches/bohemia2.0.png";

function Carrusel() {
  return (
    <div>
        <div className='contenedorPrincipal'>
            <div className='contenedorSlideShow'>
                <div className='slide'>
                    <a hfref="https://www.youtube.com/watch?v=q00ldTrywLU">
                        <img src={img1} alt=""/>
                    </a>
                </div>
                <div className='slide'>
                    <a hfref="https://www.youtube.com/watch?v=q00ldTrywLU">
                        <img src={img2} alt=""/>
                    </a>
                </div>
                <div className='slide'>
                    <a hfref="https://www.youtube.com/watch?v=q00ldTrywLU">
                        <img src={img3} alt=""/>
                    </a>
                </div>
                <div className='slide'>
                    <a hfref="https://www.youtube.com/watch?v=q00ldTrywLU">
                        <img src={img4} alt=""/>
                    </a>
                </div>
            </div>
            <div className='controles'>
                <button className='flechaIzq'></button>
                <button className='flechaDer'></button>
            </div>
        </div>
    </div>
  )
}

export default Carrusel