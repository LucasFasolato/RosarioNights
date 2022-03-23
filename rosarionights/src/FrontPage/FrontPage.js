import React from 'react'
import "./FrontPage.css"
import {useNavigate } from "react-router-dom";
import "https://kit.fontawesome.com/0c38f8891c.js";
import logoFb from './logos/LogoFB.png';
import logoTw from './logos/LogoTW.png';
import logoYt from './logos/LogoYT.png';
import logoWsp from './logos/LogoWSP.png';
import logoIg from './logos/LogoIG.png';
function FrontPage() {
    const navigate = useNavigate();
  return (
    <div>
        <div>
            <header>
                <nav className='nav'>
                    <ul className='nav__ul'>
                        <li className='nav__li fas fa-home'><a href="#"> Inicio</a></li>
                        <li className='nav__li fas fa-user-friends'><a href="#"> Boliches</a></li>
                        <li className='nav__li fas fa-question-circle'><a target="_BLANK" href="https://www.instagram.com/lucasfasolato/" rel="noreferrer"> Contacto</a></li>
                        <li className='nav__li-right fa-solid fa-circle-plus'><a onClick={() => navigate("/register")}> Registrarse</a></li>
                        <li className='nav__li-right fa-solid fa-right-to-bracket'><a onClick={() => navigate("/login")}> Iniciar Sesion</a></li>
                    </ul>
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
        <div className='img__fondo'>
            <div className='display__front'>
                <div className='display__front-left'>
                    <h1 className='front__title'>ROSARIO NIGHTS</h1>
                    <div className="front__text">
                        <p> 
                            Rosario Nights es un proyecto pensado para contener todas las opciones de la noche rosarina en un solo lugar.
                            <br></br>
                            Tendrás acceso a diferentes propuestas como por ejemplo: los boliches que abran durante esa fecha, bares y opciones para salir a tomar algo, lugares recomendados por la comunidad.
                            <br></br>
                            Además está en desarrollo la opción de poder chatear con personas que busquen realizar planes similares al tuyo y que puedan organizar algún encunetro previo o posterior a la salida (previar o hacer after).
                        </p> 
                    </div> 
                </div>
                <div className='diplay__front-right'>
                    <div className='display__button'>
                        <button className='button__op boliche__bg'><p className='text__button'>BOLICHES</p></button>   
                    </div>  
                    <div className='display__button'>
                        <button className='button__op bares__bg'><p className='text__button'>BARES</p></button>   
                    </div>  
                    <div className='display__button'>
                        <button className='button__op propuestas__bg'><p className='text__button'>PROPUESTAS</p></button>   
                    </div>  
                    <div className='display__button'>
                        <button className='button__op comunidad__bg'><p className='text__button'>COMUNIDAD</p></button>   
                    </div>  
                </div>
            </div>
            <div className='display__footer'>
                <p>
                    <a href="https://www.facebook.com/UniversidadAustral" target="_BLANK" rel="noreferrer">
                        <img src={logoFb} alt="Facebook" className='display__logo'/>
                    </a>
                    <a href="https://www.twitter.com/UnivAustral" target="_BLANK" rel="noreferrer">
                        <img src={logoTw} alt="Twitter"  className='display__logo'/>
                    </a>
                    <a href="https://www.instagram.com/univaustral/" target="_BLANK" rel="noreferrer">
                        <img src={logoIg} alt="Instagram"  className='display__logo'/>
                    </a>
                    <a href="https://www.youtube.com/user/tvuniversidadaustral" target="_BLANK" rel="noreferrer">
                        <img src={logoYt} alt="YouTube"  className='display__logo'/>
                    </a>
                    <a href="https://www.linkedin.com/company/universidad-austral-argentina" target="_BLANK" rel="noreferrer">
                        <img src={logoWsp} alt="WhatsApp"  className='display__logo'/>
                    </a>
                    
                </p>
            </div>
        </div>
    </div>
  )
}

export default FrontPage