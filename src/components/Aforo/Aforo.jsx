import React, { useEffect, useState } from 'react';
import {db} from '../../firebase'
import {Bar} from 'react-chartjs-2';

function Count() {
    const [links, setLinks] = useState([]) /*Definimos un arreglo vacío*/
    const getLinks = async () => { /*IMPORTANTE*/ 
        db.collection("asistentes").onSnapshot((querySnapshot) => { /*Solicitamos una respuesta a Firebase*/
            const docs = [];
       querySnapshot.forEach ((doc) => {
           docs.push({...doc.data(), id:doc.id});
       });
       console.log(docs)
       setLinks(docs);
    });
    };
    useEffect( ()=>{
        getLinks()
    }, [])

    const data={
    
        labels: ['Graduandos', 'Acompañantes', 'Invitados','Administrativos' ],
        datasets:[{
            label:'Aforo',
            backgroundColor: 'blue',
            backgroundColor:'black',
            data:[1, 2, 3, 4] /*Lo datos que le vamos a poner a cada barra*/
    }]
     };
    const opciones={
        maintainAspectRatio: false, /*Para que nos permita cambiar el tamaño de la gráfica*/
        responsive: true,
        type:'horizontalBar',
     }


    return(
        <div className="ContainerAforo">
            <h1>{links?.length}</h1>
         <Bar id="grafica" data={data} options={opciones}/> 
        </div>
        
    )
    
}
export default Count