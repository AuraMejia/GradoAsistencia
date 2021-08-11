import React from 'react';
import {Link} from 'react-router-dom'
import './cajafinal.css';

function Cajafinal() {
  return (
    <div className="cajafinal"> 

                <div className="Box4"> 
				<p id="text">
                          Gracias por su respuestas,<br>
                          </br> disfrute del evento.

                       </p>
                       <p id="frase">
        <div className="Botones9">
        <Link exact to="/home">
                          <button>volver al inicio</button>
                          </Link>
                 </div>
        </p> 
</div>
</div>
   
  );
}

export default Cajafinal;