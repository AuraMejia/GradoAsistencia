import React from 'react';
import './cajapie.css';
import {Pie} from'react-chartjs-2';


function Cajapie() {
      const data={
        labels:['Mujer','Hombre','Otros'],
        datasets:[{
        data: [8, 5, 2],
        backgroundColor:['#EF7F3F', 'blue', 'green']
        }]
      };

const opciones={
    responsive:true
}
  return (
   
<div className="cajapie">
  <Pie data={data} options={opciones}/>
</div>
 
   
  );
}

export default Cajapie;