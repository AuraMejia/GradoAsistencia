import React, {useState} from "react" /*import react y crear el estado de la aplicación que pertenece a un componente*/ 
import '../css/Acompanante.css'/*Import the styles*/
import { db } from "../../../firebase"

const Acompanante = (props) => { /*Traer de link*/

    const initialSateValues = { /*Guardar todo en una constante con valores iniciales*/
        nombre:'',
        nombre_estudiante:'',
        parentesco:'',
        tel: '',
        apellido: '',
        edad:'',
        localidad:'',
        genero:'',
        sintomas:false,
        rol:'acompanante',
    };

    const initialValue = {
        certify1:false,
        certify2: false,
    
    }

    const [checked, setChecked] = useState(initialValue)

    const [values, setValues] = useState(initialSateValues) /*Definir el estado desde React, el set adquiere su nombre por el valor actual de la función*/

    const handleInputChange = e => { /*Captura los datos*/
        const {name,value} = e.target; /*Me va a mostrar esos campos específicos dentro de llaves*/
        setValues({...values, [name]: value}) /*Copie lo que actualmente tiene y con el input que está actualizando coloca ese input*/   
    }
    const handleChange = e => {
        const {name} = e.target 
            if (name==="certify1"){
                setChecked({
                    certify1:true,
                    certify2:false,
                 }) 
                 setValues({
                     ...values, 
                     sintomas:true,
                 })
                
            }
            if (name==="certify2"){
                setChecked({
                    certify1:false,
                    certify2:true,
                 }) 
                 setValues({
                     ...values, 
                     sintomas:false,
                 })
            }
    }

    const handleSubmit = e => { 
        e.preventDefault();
        db.collection('asistentes').doc().set(values) /*Envia los datos a la base de datos*/
        .then(res => { 
            setChecked(initialValue)
            setValues(initialSateValues)
            window.location.replace("/Respuesta") /*Me voy a una redirección*/
            /*alert("Respuesta enviada")*/
        }) /*Si no res ()*/
        .catch(err =>{ /*En caso de error*/
            alert("Fallo")
        })
        /*props.addOrEditLink(values);
        setValues({...initialSateValues})/*Guarda los datos y los devuelve al estado inicial a través del value en el input*/
    }
    return (
        <div className="Container_Acompanante"> 

                <div className="Box2"> 
                    <h1>
                        Acompañante estudiante
                    </h1>

                    <form action="" onSubmit={handleSubmit}>
                        <p>
                           <input type="text" name="nombre_estudiante" id="nombre_estudiante" onChange={handleInputChange} value={values.nombre_estudiante} placeholder="Nombre del estudiante" />
                       </p>
                       <p>
                           <input type="text" name="nombre" id="nombre" onChange={handleInputChange} value={values.nombre} placeholder="Nombre" />
                       </p>
                       <p>
                           <input type="text" name="apellido" id="apellido" onChange={handleInputChange} value={values.apellido} placeholder="Apellido"/>
                       </p>
                       <p>
                            <select name="parentesco" onChange={handleInputChange} id="parentesco">
                               <option value={"parentesco"}>Parentesco</option>
                               <option value={"madre_padre"}>Madre/Padre</option>
                               <option value={"pareja"}>Pareja</option>
                               <option value={"familiar"}>Familiar</option>
                               <option value={"Amigo"}>Amigo</option>
                               <option value={"otro"}>Otro</option>
                           </select>
                       </p>
                       <p>
                           <input type="text" name="tel" id="tel" onChange={handleInputChange} value={values.tel} placeholder="Teléfono"/>
                       </p>
                       <p>
                           <input type="number" name="edad" id="edad" onChange={handleInputChange} value={values.edad} placeholder="Edad"/>
                       </p>
                       <p>
                           <select name="localidad" onChange={handleInputChange} id="localidad">
                               <option value={"localidad"}>Localidad</option>
                               <option value={"usaquen"}>Usquén</option>
                               <option value={"chapinero"}>Chapinero</option>
                               <option value={"santa_fe"}>Santa Fé</option>
                               <option value={"usme"}>Usme</option>
                               <option value={"tunjuelito"}>Tunjuelito</option>
                               <option value={"bosa"}>Bosa</option>
                               <option value={"kennedy"}>Kennedy</option>
                               <option value={"fontibon"}>Fontibón</option>
                               <option value={"engativa"}>Engativá</option>
                               <option value={"suba"}>Suba</option>
                               <option value={"barrios_unidos"}>Barrios Unidos</option>
                               <option value={"teusaquillo"}>Teusaquillo</option>
                               <option value={"martires"}>Los Mártires</option>
                               <option value={"antonio"}>Antonio Nariño</option>
                               <option value={"puente"}>Puente Aranda</option>
                               <option value={"candelaria"}>Candelaria</option>
                               <option value={"rafael"}>Rafael Uribe Uribe</option>
                               <option value={"bolivar"}>Ciudad Bolívar</option>
                               <option value={"sumapaz"}>Sumapaz</option>
                           </select>
                       </p>
                       <p>
                           <select name="genero" onChange={handleInputChange} id="genero">
                               <option value={"genero"}>Género</option>
                               <option value={"mujer"}>Mujer</option>
                               <option value={"hombre"}>Hombre</option>
                               <option value={"otro"}>Otro</option>
                           </select>
                          
                       </p>
                        

                       <p id="text">
                           ¿Has tenido síntomas de COVID-19 en las últimas 48 horas o has tenido contacto con una persona contagiada?

                       </p>
                       <p>
                           Si <input type="radio" name="certify1" id="yes" onChange={handleChange} checked={checked.certify1} /> 
                           No <input type="radio"  name="certify2" id="no" onChange={handleChange} checked={checked.certify2} /> 
                       </p>
                       <p>
                           <input type="submit" id="enviar" value="Enviar" />
                           <input type="reset" id="borrar" value="Borrar" />
                       </p>

                       </form>


                       

                </div>
                
        </div>

    )
}
export default Acompanante