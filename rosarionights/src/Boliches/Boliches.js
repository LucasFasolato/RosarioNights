import React from 'react'
import {useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './Boliches.css'

function Boliches() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='boliches__bg'>
            <NavBar/>
            <div>
                <h1 className='title__boliches'>BOLICHES PAGE</h1> 
                <div className='display__op'>
                    <div className='display__box'>
                        <a onClick={() => navigate("/home/boliches/bluepark")}>
                            <button className='display__btt fondo__blue'/>
                        </a>   
                    </div>
                    <div className='display__box'>
                        <button className='display__btt fondo__volt'> 
                        </button>
                    </div>
                    <div className='display__box'>
                        <button className='display__btt fondo__bresh'> 
                        </button>
                    </div>
                    <div className='display__box'>
                        <button className='display__btt fondo__bohemia'> 
                        </button>
                    </div>
                    <div className='display__box'>
                        <button className='display__btt fondo__mora'> 
                        </button>
                    </div>
                    <div className='display__box'>
                        <button className='display__btt fondo__lamarina'> 
                        </button>
                    </div>
                    <div className='display__box'>
                        <button className='display__btt fondo__bound'> 
                        </button>
                    </div>
                    <div className='display__box'>
                        <button className='display__btt fondo__wallas'> 
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>   
  )
}

export default Boliches