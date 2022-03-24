import React from 'react'
import './Comunidad.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

function Comunidad() {
  return (
    <div>
        <div className='bg__color'>
            <NavBar/>
            <h1 className='title__comunidad'>COMUNIDAD PAGE</h1> 
        </div>
        <Footer/>
    </div>
  )
}

export default Comunidad