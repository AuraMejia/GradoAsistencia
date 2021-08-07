import React from 'react';
import Genero from "../../Utils/Img/ilustraciones/genero.svg";
import ReactDOM from 'react-dom';

import './cajagenero.css';

function Cajagenero() {
  return (
    <div className="cajagenero">
      <div className="usuario">

      <div className="containerboton">     
           <p id="frase">
      <div className="Botones">
                        <button>Aforo</button>
               </div>
      </p> 
      <p id="frase">
      <div className="Botones">
                        <button>Género</button>
               </div>
      </p> 
      <p id="frase">
      <div className="Botones">
                        <button>Localidad</button>
               </div>
      </p> 
       <p id="frase">
      <div className="Botones">
                        <button>Edad</button>
               </div>
      </p> 
	  
       </div> 

           <img id="img5" src={Genero} alt="Esta es la ilustración" />
    
    
</div>
</div> 

   
  );
}

export default Cajagenero;