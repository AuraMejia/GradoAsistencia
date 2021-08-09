import React from 'react';
import ReactDOM from 'react-dom';
import './cajapie.css';
import {Pie} from'react-chartjs-2';


function Cajapie() {
      const data={
        labels:['MUJER','HOMBRE','OTRO'],
        datasets:[{
        data: [80, 56, 29],
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