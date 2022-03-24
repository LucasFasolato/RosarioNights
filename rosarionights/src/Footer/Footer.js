import React from 'react';
import logoFb from './logos/LogoFB.png';
import logoTw from './logos/LogoTW.png';
import logoYt from './logos/LogoYT.png';
import logoWsp from './logos/LogoWSP.png';
import logoIg from './logos/LogoIG.png';
import './Footer.css';

function Footer() {
  return (
    <div className='display__footer'>
        <p>
            <a href="https://www.facebook.com/UniversidadAustral" target="_BLANK" rel="noreferrer">
                <img src={logoFb} alt="Facebook" className='display__logo'/>
            </a>
            <a href="https://www.twitter.com/UnivAustral" target="_BLANK" rel="noreferrer">
                <img src={logoTw} alt="Twitter"  className='display__logo'/>
            </a>
            <a href="https://www.instagram.com/univaustral/" target="_BLANK" rel="noreferrer">
                <img src={logoIg} alt="Instagram"  className='display__logo'/>
            </a>
            <a href="https://www.youtube.com/user/tvuniversidadaustral" target="_BLANK" rel="noreferrer">
                <img src={logoYt} alt="YouTube"  className='display__logo'/>
            </a>
            <a href="https://www.linkedin.com/company/universidad-austral-argentina" target="_BLANK" rel="noreferrer">
                <img src={logoWsp} alt="WhatsApp"  className='display__logo'/>
            </a>           
        </p>
    </div>
  )
}

export default Footer