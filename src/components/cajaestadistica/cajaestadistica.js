import React from 'react';
import Botones from "../../Utils/Img/ilustraciones/botones.svg";
import ReactDOM from 'react-dom';

import './cajaestadiscica.css';


function Cajaestadistica() {
  return (
  
    <div className="cajaestadistica">
      <div className="Container_img">
        <img id="img" src={Botones} alt="Esta es la img" />
      </div>
      <div className="Contenido">
        <p><h1 id="Tittle">
        ¿Quiénes somos?
        </h1>
        </p>
        <p id="frase">
        Bienvenidos a nuestro live de estadísticas
        </p>
        <p>Selecciona una de nuestras opciones</p><br></br>
         
  <div >     
         <p>
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
     </div> <br></br>
</div>
</div> 
  

  );
}


export default Cajaestadistica;

