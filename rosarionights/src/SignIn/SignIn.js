import React from 'react'
import "./SignIn.css"
import {useNavigate } from "react-router-dom";
function SignIn() {
    const navigate = useNavigate();
  return (
    <div className='signup-content'>
        <h1> - INICIAR SESIÓN - </h1>
        <div>
            <div className='flex-container'>
                <form className='form'  autocomplete="off">
                    <div className='form__section'> 
                        <input type="email" className='form__input' placeholder='Ingrese su email'></input>
                    </div>
                    <div className='form__section'>
                        <input type="password"  className='form__input' placeholder='Ingrese su contraseña'></input>
                    </div>
                    <div className='button-container'>
                        <div className='form__section'> 
                            <button type="button" className='form__button'onClick={() => navigate("/register")}>Atras</button>
                        </div>
                        <div className='form__section'> 
                            <input type="submit" className='form__button'></input>
                        </div>
                    </div>
                    
                </form>
            </div> 
        </div> 
    </div>
  )
}

export default SignIn