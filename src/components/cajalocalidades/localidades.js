import React from 'react';
import Genero from "../../Utils/Img/ilustraciones/genero.svg";
import {Link} from 'react-router-dom';
import './cajalocalidades.css';
import Cajapie from "../../components/pie/pie";
function Cajagenero() {
  return (
    <div className="cajalocalidad">
      <div className="usuario">

      <div className="containerboton">     
           <p id="frase">
      <div className="Botones">
      <Link exact to="/Count">
                        <button>Aforo</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botones">
      <Link exact to="/genero">
                        <button>Género</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botones">
      <Link exact to="/localidad">
                        <button>Localidad</button>
                        </Link>
               </div>
      </p> 
       <p id="frase">
      <div className="Botones">
      <Link exact to="/edad">
                        <button>Edad</button>
                        </Link>
               </div>
      </p> 
	  
       </div> 
       
    
    
      
          
    
    
</div>
</div> 

   
  );
}

export default Cajagenero;