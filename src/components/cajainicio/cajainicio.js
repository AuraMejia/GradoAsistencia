import React from 'react';
import Usuario from "../../Utils/Img/ilustraciones/users.svg";
import ReactDOM from 'react-dom';

import './cajainicio.css';

function Cajainicio() {
  return (
    <div className="cajainicio">
      <div className="usuario">
    <h1>¿Quién eres?</h1><br>
    </br>
      <p>Elige una de las opciones para el ingreso </p>

           <img id="img" src={Usuario} alt="Esta es la ilustración" />
    
    <div lassName="containerboton">     
           <p id="frase">
        <div className="Botones">
                          <button>Acompañante Estudiante</button>
                 </div>
        </p> 
        <p id="frase">
        <div className="Botones">
                          <button>Invitado Externo </button>
                 </div>
        </p> 
        <p id="frase">
        <div className="Botones">
                          <button>Administrativos Kuepa </button>
                 </div>
        </p> 
       </div> 
</div>
</div> 

   
  );
}

export default Cajainicio;