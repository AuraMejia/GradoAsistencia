import React,{useState} from 'react'
import './Aforo.css';


function Aforo() {
        const [count, setCount]=useState(0)
        function Contador(x){
            x=6;
        let i=0;
           for (i<x; i++;){
            setTimeout(() => {
                setCount(count+1)
            }, 300);
           }
   }
    return (
        <>
         <button onClick={Contador}>Clickeame</button>
           <p id="Contador">
               {count}
           </p>
        </>
    )
}

export default Aforo


