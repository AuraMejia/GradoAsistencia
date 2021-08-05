import React from 'react';
import Botones from "../../Utils/Img/ilustraciones/botones.svg";
import ReactDOM from 'react-dom';




function Cajaestadistica() {
  return (
  
    <div className="cajaindex">
      <div className="Container_img">
        <img id="img" src={Botones} alt="Esta es la img" />
      </div>
      <div className="Contenido">
        
        <p id="frase"><h1 id="Tittle">
        ¿Quienes somos ?
        </h1>
        </p>
        <p id="frase">
        Bienvenidos a nuestro live de estadisticas
        </p><br>
        </br>
        <p>Selecciona una de nuestras opciones</p>
         
  <div lassName="containerboton">     
         <p id="frase">
      <div className="Botones">
                        <button>Aforo</button>
               </div>
      </p> 
      <p id="frase">
      <div className="Botones">
                        <button>Genero</button>
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
</div>
</div> 
  

  );
}


export default Cajaestadistica;

