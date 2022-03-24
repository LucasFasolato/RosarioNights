import React from 'react'
import './Propuestas.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

function Propuestas() {
  return (
    <div>
        <div className='propuestas__color'>
            <NavBar/>
            <h1 className='title__propuestas'>PROPUESTAS PAGE</h1> 
        </div>
        <Footer/>
    </div>
  )
}

export default Propuestas