import React from 'react';
import "https://kit.fontawesome.com/0c38f8891c.js";
import lupa from './../Footer/logos/Lupa.png';
import {useNavigate } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const navigate = useNavigate();
  return (
    <div>
        <header>
            <nav className='nav'>
                <div className='display__nav'>
                    <div className='display__nav-left'>
                        <ul className='nav__ul-left'>
                            <li className='nav__li fas fa-home'><a onClick={() => navigate("/home")}> Inicio</a></li>
                            <li className='nav__li fas fa-user-friends'><a onClick={() => navigate("/home/boliches")}> Boliches</a></li>
                            <li className='nav__li fas fa-question-circle'><a target="_BLANK" href="https://www.instagram.com/lucasfasolato/" rel="noreferrer"> Contacto</a></li>
                        </ul> 
                    </div>
                    <div className='display__searchbar'>
                        <input className='input__sb' placeholder='Buscar...'></input>
                        <button className='display__sb-bt'><img className='display__sb-lupa' src={lupa}/></button>            
                    </div>
                    <div className='display__nav-right'> 
                        <ul className='nav__ul-right'>
                            <li className='nav__li-right fa-solid fa-circle-plus'><a onClick={() => navigate("/register")}> Registrarse</a></li>
                            <li className='nav__li-right fa-solid fa-right-to-bracket'><a onClick={() => navigate("/login")}> Iniciar Sesion</a></li>
                        </ul>
                    </div> 
                </div>    
                <ul className='nav__responsive-ul'>
                    <div className='nav__responsive-button-container'>
                        <div className='nav__responsive-button fas fa-bars'></div>
                    </div>
                            
                    <div className='nav__li-container'>
                        <li className='nav__responsive-li fas fa-home'><a onClick={() => navigate("/home")}>Inicio</a></li>
                        <li className='nav__responsive-li fas fa-user-friends'><a href="#">Boliches</a></li>
                        <li className='nav__responsive-li fas fa-question-circle'><a target="_BLANK" href="https://www.instagram.com/lucasfasolato/" rel="noreferrer"> Contacto</a></li>
                        <li className='nav__responsive-li fa-solid fa-circle-plus'><a onClick={() => navigate("/register")}> Registrarse</a></li>
                        <li className='nav__responsive-li fa-solid fa-right-to-bracket'><a onClick={() => navigate("/login")}> Iniciar Sesion</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    </div>
    )
}
export default NavBar