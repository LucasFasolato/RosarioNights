import React from 'react'
import "./SignUp.css"
import {useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
  return (
    <div className='signup-content'>
        <h1> - CREAR USUARIO - </h1>
        <div>
            <div className='flex-container'>
                <form className='form'  autocomplete="off">
                    <div className='form__section'>  
                        <input type="text" className='form__input' placeholder='Ingrese su nombre'></input>
                    </div>
                    <div className='form__section'>
                        <input type="text" className='form__input' placeholder='Ingrese su apellido'></input>
                    </div>
                    <div className='form__section'> 
                        <input type="email" className='form__input' placeholder='Ingrese su email'></input>
                    </div>
                    <div className='form__section'> 
                        <input type="number" className='form__input' placeholder='Ingrese su número de DNI (sin puntos ni espacios)'></input>
                    </div>
                    <div className='form__section'>
                        <input type="password"  className='form__input' placeholder='Ingrese su contraseña'></input>
                    </div>
                    <div className='form__section'>
                        <input type="password" className='form__input' placeholder='Confirmar contraseña'></input>
                    </div>
                    <div className='display-check'>
                        <div className='checkb'><input type="checkbox"></input></div>
                        <p>Estoy de acuerdo con los <a href="https://www.youtube.com/" target="_BLANK" rel="noreferrer">Términos y condiciones</a>.</p>
                    </div>
                    <div className='display-signin'>
                        <p>¿Ya tienes una cuenta? <a onClick={() => navigate("/login")}>Iniciar sesión</a></p>
                    </div>
                    <div className='form__section'> 
                        <input type="submit" className='form__button'></input>
                    </div>
                </form>
            </div> 
        </div> 
    </div>
  )
}

export default SignUp