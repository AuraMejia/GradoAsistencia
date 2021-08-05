import React from 'react';
import Birrete from "../../assets/images/BIRRETE.png";
import Logo1 from "../../assets/images/logo1.png";
import ReactDOM from 'react-dom';

import './cajainicio.css';

function Cajainicio() {
  return (

     
    <div className="cajaindex">
    <img className="logo1" src={Logo1} />


  <button className="boton3"  ><img className="Birrete" src={Birrete} /> <br></br>  Invitado</button>
 
  <button className="boton3"  ><img className="Birrete" src={Birrete} />       
  <br></br>Acompañante </button>
   
  <button className="boton3" ><img className="Birrete" src={Birrete} />       
  <br></br>Administrativo </button>

  </div>


   
 

   
  );
}

export default Cajainicio;