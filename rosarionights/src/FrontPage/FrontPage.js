import React from 'react'
import "./FrontPage.css"
import {useNavigate } from "react-router-dom";
import "https://kit.fontawesome.com/0c38f8891c.js";
function FrontPage() {
    const navigate = useNavigate();
  return (
    <div>
        <div>
            <header>
                <nav className='nav'>
                    <ul className='nav__ul'>
                        <li className='nav__li fas fa-home'><a href="#"> Inicio</a></li>
                        <li className='nav__li fas fa-user-friends'><a href="#"> Sobre nosotros</a></li>
                        <li className='nav__li fas fa-question-circle'><a target="_BLANK" href="https://www.instagram.com/lucasfasolato/"> Contacto</a></li>
                        <li className='nav__li-right fa-solid fa-circle-plus'><a onClick={() => navigate("/register")}> Registrarse</a></li>
                        <li className='nav__li-right fa-solid fa-right-to-bracket'><a onClick={() => navigate("/login")}> Iniciar Sesion</a></li>
                    </ul>
                    <ul className='nav__responsive-ul'>
                        <div className='nav__responsive-button-container'>
                            <div className='nav__responsive-button fas fa-bars'></div>
                        </div>
                        
                        <div className='nav__li-container'>
                            <li className='nav__responsive-li fas fa-home'><a onClick={() => navigate("/home")}>Inicio</a></li>
                            <li className='nav__responsive-li fas fa-user-friends'><a href="#">Sobre nosotros</a></li>
                            <li className='nav__responsive-li fas fa-question-circle'><a target="_BLANK" href="https://www.instagram.com/lucasfasolato/"> Contacto</a></li>
                            <li className='nav__responsive-li fa-solid fa-circle-plus'><a onClick={() => navigate("/register")}> Registrarse</a></li>
                            <li className='nav__responsive-li fa-solid fa-right-to-bracket'><a onClick={() => navigate("/login")}> Iniciar Sesion</a></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
  )
}

export default FrontPage