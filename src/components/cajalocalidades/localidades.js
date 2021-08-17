import React from 'react';
import {Link} from 'react-router-dom';
import './cajalocalidades.css';

function Cajalocalidades() {
  return (
    <div className="cajalocalidad">
      <div className="usuario">

      <div className="containerbotonlocalidad">     
           <p id="frase">
      <div className="Botoneslocalidad">
      <Link exact to="/Count">
                        <button>Aforo</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botoneslocalidad">
      <Link exact to="/genero">
                        <button>Género</button>
                        </Link>
               </div>
      </p> 
      <p id="frase">
      <div className="Botoneslocalidad">
      <Link exact to="/localidad">
                        <button>Localidad</button>
                        </Link>
               </div>
      </p> 
       <p id="frase">
      <div className="Botoneslocalidad">
      <Link exact to="/edad">
                        <button>Edad</button>
                        </Link>
               </div>
      </p> 
	  
       </div> 
       
     
      <div className="Contenidolocalidad">


    
      </div>
    
      
          
    
    
</div>
</div> 

   
  );
}

export default Cajalocalidades;