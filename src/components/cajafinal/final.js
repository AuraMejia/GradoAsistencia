import React from 'react';
import {Link} from 'react-router-dom'
import './cajafinal.css';

function Cajafinal() {
  return (
    <div className="cajafinal"> 

                <div className="Box4"> 
				<p id="text">
                          Gracias por tu respuesta,<br>
                          </br> disfruta del evento.

                       </p>
                       <p id="frasefinal">
        <div className="Botones9">
        <Link exact to="/home">
                          <button>Volver al inicio</button>
                          </Link>
                 </div>
        </p> 
</div>
</div>
   
  );
}

export default Cajafinal;