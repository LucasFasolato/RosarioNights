import React from 'react'
import {useNavigate } from "react-router-dom";
import "https://kit.fontawesome.com/0c38f8891c.js";
import './MenuBoliche.css'

function MenuBoliche() {
const navigate = useNavigate();
  return (
    <div className='display__menu'>
        <ul className='display__ul'>
            <li className='display__li fa-solid fa-qrcode'>
                <a onClick={() => navigate("/home/boliches/entradas")}>   ENTRADAS</a>   
            </li>
            <li className='display__li fa-solid fa-location-dot'>
                <a onClick={() => navigate("/home/boliches/ubicacion")}>   ¿COMO LLEGAR?</a>   
            </li>
            <li className='display__li fa-solid fa-clock'>  
                <a onClick={() => navigate("/home/boliches/horarios")}>   HORARIO</a>   
            </li>
             <li className='display__li fa-solid fa-circle-info'>  
                <a onClick={() => navigate("/home/boliches/requisitos")}>   REQUISITOS</a>   
            </li>  
            <li className='display__li fa-solid fa-comment-dollar'>  
                <a onClick={() => navigate("/home/boliches/precios")}>   PRECIOS</a>   
            </li>
        </ul>
    </div>
  )
}

export default MenuBoliche