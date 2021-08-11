import React from 'react';
import Botones from "../../Utils/Img/ilustraciones/botones.svg";
import {Link} from 'react-router-dom';

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
      <Link exact to="/Edad">
                        <button>Edad</button>
                        </Link>
               </div>
      </p> 
     </div> <br></br>
</div>
</div> 
  

  );
}


export default Cajaestadistica;

