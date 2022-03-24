import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './Boliches.css'

function Boliches() {
  return (
    <div>
        <div className='boliches__bg'>
            <NavBar/>
            <h1 className='title__boliches'>BOLICHES PAGE</h1> 
        </div>
        <Footer/>
    </div>   
  )
}

export default Boliches