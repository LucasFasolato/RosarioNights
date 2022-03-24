import React from 'react'
import "./FrontPage.css"
import {useNavigate } from "react-router-dom";
import "https://kit.fontawesome.com/0c38f8891c.js";
import NavBar from "./../NavBar/NavBar";
import Footer from '../Footer/Footer';
function FrontPage() {
    const navigate = useNavigate();
  return (
    <div>
        <NavBar/>
        <div className='img__fondo'>
            <div className='display__front'>
                <div className='display__front-left'>
                    <h1 className='front__title'>ROSARIO NIGHTS</h1>
                    <div className="front__text">
                        <p> 
                            Rosario Nights es un proyecto pensado para contener todas las opciones de la noche rosarina en un solo lugar.
                            <br/><br/>
                            Tendrás acceso a diferentes propuestas como por ejemplo: los boliches que abran durante esa fecha, bares y opciones para salir a tomar algo, lugares recomendados por la comunidad.
                            <br/><br/>
                            Además está en desarrollo la opción de poder chatear con personas que busquen realizar planes similares al tuyo y que puedan organizar algún encuentro previo o posterior a la salida (previar o hacer after).
                        </p> 
                    </div> 
                </div>
                <div className='diplay__front-options'>
                    <div className='display__button'>
                        <a onClick={() => navigate("/home/boliches")}><button className='button__op boliche__bg'><p className='text__button'>BOLICHES</p></button></a>  
                    </div>  
                    <div className='display__button'>
                        <a onClick={() => navigate("/home/bares")}><button className='button__op bares__bg'><p className='text__button'>BARES</p></button></a>
                    </div>  
                    <div className='display__button'>
                        <a onClick={() => navigate("/home/propuestas")}><button className='button__op propuestas__bg'><p className='text__button'>PROPUESTAS</p></button></a>   
                    </div>  
                    <div className='display__button'>
                        <a onClick={() => navigate("/home/comunidad")}><button className='button__op comunidad__bg'><p className='text__button'>COMUNIDAD</p></button></a>  
                    </div>  
                </div>
                <div className='diplay__front-right'>
                    <div className='display__right-title'>
                        <p>Actividad de amigos</p>
                        <button className='fas fa-user-friends'></button>
                    </div>
                    <p>Deja que otros amigos y seguidores vean tu actividad semanal.</p>
                    <div className='display__friends'>
                        <div className='display__friends-info'>
                            <button className='fas fa-user button__friends-info'></button>
                            <div className='text__friends-info'>
                                <p>USERNAME</p>
                                <p>MAIL</p>
                                <p>LAST ACTIVITY</p>  
                            </div> 
                        </div>
                        <div className='display__friends-info'>
                            <button className='fas fa-user button__friends-info'></button>
                            <div className='text__friends-info'>
                                <p>USERNAME</p>
                                <p>MAIL</p>
                                <p>LAST ACTIVITY</p>  
                            </div> 
                        </div>
                        <div className='display__friends-info'>
                            <button className='fas fa-user button__friends-info'></button>
                            <div className='text__friends-info'>
                                <p>USERNAME</p>
                                <p>MAIL</p>
                                <p>LAST ACTIVITY</p>  
                            </div> 
                        </div>
                        <div className='display__friends-info'>
                            <button className='fas fa-user button__friends-info'></button>
                            <div className='text__friends-info'>
                                <p>USERNAME</p>
                                <p>MAIL</p>
                                <p>LAST ACTIVITY</p>  
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default FrontPage