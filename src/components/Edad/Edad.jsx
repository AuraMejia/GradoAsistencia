import React, { useRef, useEffect, useState } from "react";
import './Edad.css';
import {db} from '../../firebase'
import {Bar} from 'react-chartjs-2';
import foto2 from '../../Utils/Img/ilustraciones/edad.svg'

function Edad() {
  const [links, setLinks] = useState([]) /*Definimos un arreglo vacío*/
  const dato = {
      rango_16:0,
      rango_20:0,
      rango_25:0,
      rango_30:0,
      rango_35:0,
      rango_40:0,
      rango_45:0,
      rango_50:0,
      rango_mas:0,
      
  }
  const [datos, setDatos] = useState([])
  const values =[] /*Array vacío*/ 
  const getLinks = async () => { /*IMPORTANTE*/ 
      db.collection("asistentes").onSnapshot((querySnapshot) => { /*Solicitamos una respuesta a Firebase*/
          const docs = [];
     querySnapshot.forEach ((doc) => {
         docs.push({...doc.data(), id:doc.id});
         console.log(doc.data().rol)
          dato[doc.data().rol]+=1 /*El valor que ya está más 1*/ /*HACER CONDICIÓN*/ 
     });
     setLinks(docs);
     console.log(dato.invitado)
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

  const data={
      labels: ['0-16', '17-20', '21-25', '26-30','31-35', '36-40', '41-45', '46-50', '46-50', '51-más',  ],
      datasets:[{
          label:'Edad',
          backgroundColor: ['black','#26B8AF', '#00AA69', '#0088FF', '#26B8AF', '#00AA69', '#0088FF','#26B8AF', '#00AA69', '#0088FF', ],
          data:datos,  
          color:'red'
      }]
   };
  const opciones={
      maintainAspectRatio: false, /*Para que nos permita cambiar el tamaño de la gráfica*/
      responsive: true,
      type:'horizontalBar',
      /*indexAxis:'y',*/
   }
   return(
    <div className="ContainerEdad">
        <div className="Grafica1">
        <Bar id="grafica" data={data} options={opciones}/> 
        </div>
    
     <img id="edad_img" src={foto2} alt="Esta es la img de aforo"/>
    </div>
    
)

}
export default Edad

/*export default function Aforo() {
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(false);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev + 1);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  
  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };
  
  return (
    <div>
      <div>{num}</div>
      <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
    </div>
  );
}*/