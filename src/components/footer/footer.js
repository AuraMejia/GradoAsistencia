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
      <img id="banner" src={Banner} alt="Esta es la banner" />

      <div className="Pie_pagina">
        <div className="Imagenes">
        <a href="https://twitter.com/KuepaCo"><img id="pieP" src={Twitter} alt="Esta es la img de twitter"/></a>
        <a href="https://www.facebook.com/kuepaedutech"><img id="pieP" src={Facebook} alt="Esta es la img de facebook"/></a>
        <a href="https://www.youtube.com/channel/UC2cIGAufqxb1hYla02j-4pA"><img id="PieP" src={Youtube} alt="Esta es la img de youtube"/></a>
        <a href="https://www.instagram.com/kuepaedutech/"><img id="pieP" src={Instagram} alt="Esta es la banner"/></a>
        <img id="pieP" src={Barras} alt="Esta es la banner"/>
        </div>
        <div className="Textos">
        <p id="frases">
           Copyright © 2021 Kuepa. Todos los derechos reservados. All rights reserved.
        </p>
        <p id="frases">
           Desarrollado por Tatiana Marrugo y Aura Mejía.
        </p>
        </div>
        
      </div>
    </div>
  );
}



export default Footer;

