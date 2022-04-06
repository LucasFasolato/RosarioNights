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
                        <a onClick={() => navigate("/home/boliches/volt")}>
                            <button className='display__btt fondo__volt'/>
                        </a>  
                    </div>
                    <div className='display__box'>
                        <a onClick={() => navigate("/home/boliches/bresh")}>
                            <button className='display__btt fondo__bresh'/>
                        </a> 
                    </div>
                    <div className='display__box'>
                        <a onClick={() => navigate("/home/boliches/bohemia")}>
                            <button className='display__btt fondo__bohemia'/>
                        </a> 
                    </div>
                    <div className='display__box'>
                        <a onClick={() => navigate("/home/boliches/mora")}>
                            <button className='display__btt fondo__mora'/>
                        </a>
                    </div>
                    <div className='display__box'>
                        <a onClick={() => navigate("/home/boliches/lamarina")}>
                            <button className='display__btt fondo__lamarina'/>
                        </a>
                    </div>
                    <div className='display__box'>
                        <a onClick={() => navigate("/home/boliches/bound")}>
                            <button className='display__btt fondo__bound'/>
                        </a>
                    </div>
                    <div className='display__box'>
                        <a onClick={() => navigate("/home/boliches/wallas")}>
                            <button className='display__btt fondo__wallas'/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>   
  )
}

export default Boliches