import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Caja} from'react-chartjs-2';
import {db} from '../../firebase'
import './cajalocalidades.css';
import Usaquen from "../../Utils/Img/Cajas/usaquen.png";
import Chapinero from "../../Utils/Img/Cajas/chapinero.png";
import Santafe from "../../Utils/Img/Cajas/santafe.png";
import Sancristobal from "../../Utils/Img/Cajas/sancristobal.png";
import Usme from "../../Utils/Img/Cajas/usme.png";
import Tunjuelito from "../../Utils/Img/Cajas/tunjuelito.png";
import Bosa from "../../Utils/Img/Cajas/bosa.png";
import Kenedi from "../../Utils/Img/Cajas/kennedy.png";
import Fontibon from "../../Utils/Img/Cajas/fontibon.png";
import Engativa from "../../Utils/Img/Cajas/engativa.png";
import Suba from "../../Utils/Img/Cajas/suba.png";
import Barriosunidos from "../../Utils/Img/Cajas/barriosunidos.png";
import Teusaquillo from "../../Utils/Img/Cajas/teusaquillo.png";
import Martires from "../../Utils/Img/Cajas/martires.png";
import Antonionariño from "../../Utils/Img/Cajas/antonionariño.png";
import Puentearanda from "../../Utils/Img/Cajas/puentearanda.png";
import Candelaria from "../../Utils/Img/Cajas/candelaria.png";
import Uribe from "../../Utils/Img/Cajas/uribe.png";
import Cbolivar from "../../Utils/Img/Cajas/ciudadbolivar.png";
import Otro from "../../Utils/Img/Cajas/otro.png";
import Usaquen1 from "../../Utils/Img/Localidad/Usaquen.jpg";
import Chapinero1 from "../../Utils/Img/Localidad/chapinero.jpeg";
import Santafe1 from "../../Utils/Img/Localidad/santafe.jpg";
import Sancristibal1 from "../../Utils/Img/Localidad/san_cristobal.png";
import Usme1 from "../../Utils/Img/Localidad/usme.jpg";
import Tunjuelito1 from "../../Utils/Img/Localidad/tunjuelito.jpg";
import Bosa1 from "../../Utils/Img/Localidad/bosa.jpg";
import Kennedy1 from "../../Utils/Img/Localidad/kennedy.jpg";
import Fontibon1 from "../../Utils/Img/Localidad/fontibón.jpeg";
import Engativa1 from "../../Utils/Img/Localidad/engativá.jpeg";
import Suba1 from "../../Utils/Img/Localidad/suba.jpg";
import Barriosunidos1 from "../../Utils/Img/Localidad/barrios-unido.jpg";
import Teusaquillo1 from "../../Utils/Img/Localidad/teusaquillo.jpg";
import Martires1 from "../../Utils/Img/Localidad/los-martires.jpg";
import Antonionariño1 from "../../Utils/Img/Localidad/AntonioNariño.jpg";
import Puentearanda1 from "../../Utils/Img/Localidad/Puente-aranda.jpg";
import Candelaria1 from "../../Utils/Img/Localidad/candelaria.jpg";
import Uribe1 from "../../Utils/Img/Localidad/RafaelU.jpg";
import Cbolivar1 from "../../Utils/Img/Localidad/ciudad-bolivar.jpg";
import Otros1  from "../../Utils/Img/Localidad/Sumapaz.jpg";
import Mapac from "../../Utils/Img/Cajas/mapac.png";
import Mapab from "../../Utils/Img/Cajas/mapab.jpg";
import Mapas from "../../Utils/Img/Cajas/soacha2.svg";

function Cajalocalidades() {
  const [links, setLinks] = useState([]) 
  const [localidades, setlocalidades] = useState({}) 
  const dato = {
	  Usaquen:0,
		Chapinero:0,
		Santafe:0, 
		SanCristobal: 0,
		Usme:0,
		Tunjuelito:0,
		Bosa:0, 
		Kennedy:0,
		Fontibon:0,
		Engativa:0,
		Suba:0, 
		BarriosUnidos:0,
		Teusaquillo:0,
		LosMartires:0,
	  AntonioNariño:0, 
		PuenteAranda:0,
		LaCandelaria:0,
		RafaelUribe:0,
		CiudadBolivar:0,
    Soacha:0,
    Sumapaz:0,
		Otros:0
        
  }
  const [datos, setDatos] = useState([])
  const values =[] 
  const [contador, setContador] = useState(0)
  const contar = ()=>{
      setTimeout(()=>{
          console.log(links.length)
      if (contador<links.length){
          setContador(contador+1)
          contar()
      }
      else {setContador(contador+1)}
  })
      
  }
  const getLinks = async () => { 
      await db.collection("asistentes").onSnapshot((querySnapshot) => { 
          const docs = [];
     querySnapshot.forEach ((doc) => {
         docs.push({...doc.data(), id:doc.id});
         console.log(doc.data().localidad)
          const localidad = doc.data().localidad 
        if (localidad==="Usaquen"){
          dato.Usaquen+=1
        }
        if (localidad==="Chapinero"){
          dato.Chapinero+=1
        }
        if (localidad==="Santafe"){
          dato.Santafe+=1
        }
        if (localidad==="San Cristobal"){
          dato.SanCristobal+=1
        }
        if (localidad==="Usme"){
          dato.Usme+=1
        }
        if (localidad==="Tunjuelito"){
          dato.Tunjuelito+=1
        }
        if (localidad==="Bosa"){
          dato.Bosa+=1
        }
        if (localidad==="Kennedy"){
          dato.Kennedy+=1
        }
        if (localidad==="Fontibon"){
          dato.Fontibon+=1
        }
        if (localidad==="Engativa"){
          dato.Engativa+=1
        }
        if (localidad==="Suba"){
          dato.Suba+=1
        }
        if (localidad==="Barrios Unidos"){
          dato.BarriosUnidos+=1
        }
        if (localidad==="Teusaquillo"){
          dato.Teusaquillo+=1
        }
        if (localidad==="Los Martires"){
          dato.LosMartires+=1
        }
        if (localidad==="Antonio Nariño"){
          dato.AntonioNariño+=1
        }
        if (localidad==="Puente Aranda"){
          dato.PuenteAranda+=1
        }
        if (localidad==="La Candelaria"){
          dato.LaCandelaria+=1
        }
        if (localidad==="Rafael Uribe Uribe"){
          dato.RafaelUribe+=1
        }
        if (localidad==="Ciudad Bolivar"){
          dato.CiudadBolivar+=1
        }
        if (localidad==="Soacha"){
          dato.Soacha+=1
        }
        if (localidad==="Sumapaz"){
          dato.Sumapaz+=1
        }
        if (localidad==="Otros"){
          dato.Otros+=1
        }

     });
       setLinks(docs);
       setlocalidades (dato)
       console.log(dato.Usaquen)
       for(let usuario in dato){
           values.push(dato[usuario])
       }

       setDatos(values)
    });
   

    };

    useEffect( ()=>{
      getLinks()
      console.log(dato)
      console.log(values)
  }, [])

     

const opciones={
    responsive:true
}


  return (
    <div className="cajalocalidad">
      <div className="usuarioloc">
        <div className="ContainerBoton1">
          <p id="frase">
            <div className="BotonesA">
              <Link exact to="/Aforo">
                <button>Aforo</button>
              </Link>
            </div>
          </p>
          <p id="frase">
            <div className="BotonesA">
              <Link exact to="/genero">
                <button>Género</button>
              </Link>
            </div>
          </p>
          <p id="frase">
            <div className="BotonesA">
              <Link exact to="/localidad">
                <button>Localidad</button>
              </Link>
            </div>
          </p>
          <p id="frase">
            <div className="BotonesA">
              <Link exact to="/edad">
                <button>Edad</button>
              </Link>
            </div>
          </p>
        </div>
        <div className="contenedor_secundario">
          <div className="Contenidolocalidad">
            <div className="clocalidad">
              <div className="cajacomo">
                <img id="imgloc1" src={Usaquen} alt="Esta es la img" />
                <div className="capa">
                  <h5> 1.USAQUÉN</h5>
                  <br></br>
                  <img id="imgloc" src={Usaquen1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Usaquen}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Chapinero} alt="Esta es la img" />
                <div className="capa">
                  <h5>2.CHAPINERO</h5>
                  <br></br>
                  <img id="imglocA" src={Chapinero1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Chapinero}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Santafe} alt="Esta es la img" />
                <div className="capa">
                  <h5>3.SANTA FE</h5>
                  <br></br>
                  <img id="imglocB" src={Santafe1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.SantaFe}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Sancristobal} alt="Esta es la img" />
                <div className="capa">
                  <h5>4.SAN CRISTÓBAL</h5>
                  <br></br>
                  <img id="imglocA" src={Sancristibal1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.SanCristobal}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Usme} alt="Esta es la img" />
                <div className="capa">
                  <h5>5.USME</h5>
                  <br></br>
                  <img id="imglocB" src={Usme1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Usme}</h2>
                </div>
              </div>

              <div className="cajacomo">
                <img id="imgloc1" src={Tunjuelito} alt="Esta es la img" />
                <div className="capa">
                  <h5>6.TUNJUELITO</h5>
                  <br></br>
                  <img id="imglocA" src={Tunjuelito1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Tunjuelito}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Bosa} alt="Esta es la img" />
                <div className="capa">
                  <h5>7.BOSA</h5>
                  <br></br>
                  <img id="imglocB" src={Bosa1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Bosa}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Kenedi} alt="Esta es la img" />
                <div className="capa">
                  <h5>8.KENNEDY</h5>
                  <br></br>
                  <img id="imglocA" src={Kennedy1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Kennedy}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Fontibon} alt="Esta es la img" />
                <div className="capa">
                  <h5>9.FONTIBÓN</h5>
                  <br></br>
                  <img id="imglocB" src={Fontibon1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Fontibon}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Engativa} alt="Esta es la img" />
                <div className="capa">
                  <h5>10.ENGATIVÁ</h5>
                  <br></br>
                  <img id="imglocB" src={Engativa1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Engativa}</h2>
                </div>
              </div>

              <div className="cajacomo">
                <img id="imgloc1" src={Suba} alt="Esta es la img" />
                <div className="capa">
                  <h5>11.SUBA</h5>
                  <br></br>
                  <img id="imglocB" src={Suba1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Suba}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Barriosunidos} alt="Esta es la img" />
                <div className="capa">
                  <h5>12.BARRIOS UNIDOS</h5>
                  <br></br>
                  <img id="imglocA" src={Barriosunidos1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.BarriosUnidos}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Teusaquillo} alt="Esta es la img" />
                <div className="capa">
                  <h5>13. TEUSAQUILLO</h5>
                  <br></br>
                  <img id="imglocA" src={Teusaquillo1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Teusaquillo}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Martires} alt="Esta es la img" />
                <div className="capa">
                  <h5>14.LOS MÁRTIRES</h5>
                  <br></br>
                  <img id="imglocA" src={Martires1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.LosMartires}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Antonionariño} alt="Esta es la img" />
                <div className="capa">
                  <h5>15. ANTONIO NARIÑO</h5>
                  <br></br>
                  <img id="imglocB" src={Antonionariño1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.AntonioNariño}</h2>
                </div>
              </div>

              <div className="cajacomo">
                <img id="imgloc1" src={Puentearanda} alt="Esta es la img" />
                <div className="capa">
                  <h5>16.PUETE ARANDA</h5>
                  <br></br>
                  <img id="imglocB" src={Puentearanda1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.PuenteAranda}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Candelaria} alt="Esta es la img" />
                <div className="capa">
                  <h5>17. LA CANDELARIA</h5>
                  <br></br>
                  <img id="imgloc" src={Candelaria1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.LaCandelaria}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Uribe} alt="Esta es la img" />
                <div className="capa">
                  <h5>18.RAFAEL URIBE</h5>
                  <br></br>
                  <img id="imglocB" src={Uribe1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.RafaelUribe}</h2>
                </div>
              </div>
              <div className="cajacomo">
                <img id="imgloc1" src={Cbolivar} alt="Esta es la img" />
                <div className="capa">
                  <h5>19.CIUDAD BOLÍVAR</h5>
                  <br></br>
                  <img id="imglocA" src={Cbolivar1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.CiudadBolivar}</h2>
                </div>
              </div>

              <div className="cajacomo">
                <img id="imgloc1" src={Otro} alt="Esta es la img" />
                <div className="capa">
                  <h5>20.SUMAPAZ</h5>
                  <br></br>
                  <img id="imglocC" src={Otros1} alt="Esta es la img" />
                  <br></br>
                  <h4>N° asistentes </h4>
                  <h2>{localidades.Sumapaz}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="conprinsipal">
            <div className="contmapa">
              {/* bogota */}
              <div className="mapa">
                <div className="imagen_mapa">
                  <img id="imglocmapab" src={Mapab} alt="Esta es la img" />
                </div>
                <div className="title_mapa">
                  <p>Bogotá D.C</p>
                  <p>N° asistentes</p>
                  <h2>{links?.length}</h2>
                </div>
              </div>

            {/* Soacha */}
              <div className="mapa">
              <div className="imagen_mapa">
                <img id="imglocmapas" src={Mapas} alt="Esta es la img" />
                </div>
                <div className="title_mapa">
                  <p>Soacha</p>
                <p>N° asistentes</p>
                <h2>{localidades.Soacha}</h2>
                </div>
                
              </div>
              {/* Colombia */}
              <div className="mapa">
              <div className="imagen_mapa">
                <img id="imglocmapa" src={Mapac} alt="Esta es la img" />
                </div>
                <div className="title_mapa">
                <p>Colombia</p>
                <p>N° asistentes</p>
                <h2>{localidades.otros}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cajalocalidades;