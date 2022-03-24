import React from 'react'
import './Styles.css'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import blue from './../imgs-boliches/blue.png'

function BluePark() {
  return (
    <div> 
      <div className='boliches__bg'>
        <NavBar />
        <div>
          <div className='display__portada'/>
          <h1 className='title__boliches'>BLUE PARK</h1>
          <div className='display__op'>
            <div className='display__box'>
              <button className='display__btt'>INFO</button>
            </div> 
            <div className='display__box'>
              <button className='display__btt'>MORE INFO</button>
            </div>
            <div className='display__box'>
              <button className='display__btt'>MAPA</button>
            </div> 
          </div>    
        </div>
      </div>
      <Footer />
    </div>    
  )
}

export default BluePark