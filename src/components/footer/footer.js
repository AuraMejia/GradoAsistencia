import React from 'react';
import './footer.css';
import Banner from '../../Utils/Img/Logos/banner_grande.png'
import Twitter from '../../Utils/Img/Iconos/twitter.svg'
import Facebook from '../../Utils/Img/Iconos/facebook.svg'
import Youtube from '../../Utils/Img/Iconos/youtube.svg'
import Instagram from '../../Utils/Img/Iconos/logo-instagram.svg'
import Barras from '../../Utils/Img/Iconos/barras.svg'


function Footer() {
  return (
    <div className="Container_Footer">
      <img id="img1" src={Banner} alt="Esta es la banner" />

      <div className="Pie_pagina">
        <div className="Imagenes">
        <img id="img1" src={Twitter} alt="Esta es la banner"/>
        <img id="img1" src={Facebook} alt="Esta es la banner"/>
        <img id="img1" src={Youtube} alt="Esta es la banner"/>
        <img id="img1" src={Instagram} alt="Esta es la banner"/>
        <img id="img1" src={Barras} alt="Esta es la banner"/>
        </div>
        <div className="Textos">
        <p>
           Copyright © 2021 Kuepa. Todos los derechos reservados. All rights reserved.
        </p>
        <p>
           Desarrollado por Tatiana Marrugo y Aura Mejía.
        </p>
        </div>
        
      </div>
    </div>
  );
}



export default Footer;

