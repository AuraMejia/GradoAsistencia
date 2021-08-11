import React from 'react';
import Genero from "../../Utils/Img/ilustraciones/genero.svg";
import {Link} from 'react-router-dom';
import './cajagenero.css';
import Cajapie from "../../components/pie/pie";
function Cajagenero() {
  return (
    <div className="cajagenero">
      <div className="usuario">

      <div className="containerboton">     
           <p id="frase">
      <div className="Botones">
      <Link exact to="/Aforo">
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
       
    <div className="cajaestadistica">
       <div className="Container_img6">
        <img id="img6" src={Genero} alt="Esta es la img" />
      </div>
      <div className="Contenidogenero">
      <Cajapie/>
      </div>
      </div>
          
    
    
</div>
</div> 

   
  );
}

export default Cajagenero;