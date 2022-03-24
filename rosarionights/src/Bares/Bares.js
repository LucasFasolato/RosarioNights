import React from 'react'
import './Bares.css';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

function Bares() {
  return (
    <div>
        <div className='bares__color'>
            <NavBar/>
            <h1 className='title__bares'>BARES PAGE</h1> 
        </div>
        <Footer/>
    </div>
  )
}

export default Bares