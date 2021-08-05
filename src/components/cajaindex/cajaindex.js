import React from 'react';
import Chica from "../../Utils/Img/Formularios/grado.png";
import Ilustracion1 from "../../Utils/Img/ilustraciones/home.svg";
/*import ReactDOM from 'react-dom';*/
import {Link} from 'react-router-dom'


import './cajaindex.css';


function Cajaindex() {
  return (

    <div className="cajaindex">
      <div className="Container_img">
        <img id="img1" src={Chica} alt="Esta es la img1" />
      </div>
      <div className="Contenido">
        <p id="frase">
        Las mujeres tienen la oportunidad de cumplir todos los sueños que se propongan, son ellas quienes construyen su futuro.
        </p>

        <p id="frase"><h1 id="Tittle">
          Registro de Asitencia: Graduación Class TechPower
        </h1>
        </p>

        <p id="frase">
          ¡Conozcámonos!
        </p>

        <p id="frase">
        <div className="Botones">
                      <Link exact to="/">
                          <button> Regístrate</button>
                       </Link>
                 </div>
        </p>

        <p id="frase">
           <img id="img3" src={Ilustracion1} alt="Esta es la ilustración" />
        </p>

      </div>
     </div>
  );
}


export default Cajaindex;

