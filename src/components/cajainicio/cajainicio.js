import React from 'react';
import Usuario from "../../Utils/Img/ilustraciones/users.svg";
import ReactDOM from 'react-dom';

import './cajainicio.css';

function Cajainicio() {
  return (
    <div className="cajainicio">
      <div className="usuario">
        <p><h1 id="Tittle">
    ¿Quién eres?</h1></p><br>
    </br>
      <p>Elige una de las opciones para el ingreso </p>

      <div className="containerboton">     
           <p id="frase">
        <div className="Botones1">
                          <button>Acompañante<br></br> Estudiante</button>
                 </div>
        </p> 
        <p id="frase">
        <div className="Botones1">
                          <button>Invitado<br></br>  Externo </button>
                 </div>
        </p> 
        <p id="frase">
        <div className="Botones1">
                          <button>Administrativos <br></br> Kuepa </button>
                 </div>
        </p> 
       </div> 

           <img id="img4" src={Usuario} alt="Esta es la ilustración" />
    
    
</div>
</div> 

   
  );
}

export default Cajainicio;