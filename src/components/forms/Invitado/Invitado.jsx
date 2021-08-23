import React, {useState} from "react" /*import react y crear el estado de la aplicación que pertenece a un componente*/ 
import '../css/Invitado.css'/*Import the styles*/
import { db } from "../../../firebase"

const Invitado = (props) => { /*Traer de link*/

    const initialSateValues = { /*Guardar todo en una constante con valores iniciales*/
        nombre:'',
        entidad:'',
        tel: '',
        apellido: '',
        edad:'',
        localidad:'',
        genero:'',
        sintomas:false,
        rol:'invitado',
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
        <div className="Container_Invitado"> 

                <div className="BoxInvitado"> 
                    <h1>
                        Invitado
                    </h1>

                    <form action="" onSubmit={handleSubmit}>
                       <p>
                           <input type="text" name="nombre" id="nombre" onChange={handleInputChange} value={values.nombre} placeholder="Nombre" />
                       </p>
                       <p>
                           <input type="text" name="apellido" id="apellido" onChange={handleInputChange} value={values.apellido} placeholder="Apellido"/>
                       </p>
                       <p>
                           <input type="text" name="entidad" id="entidad"onChange={handleInputChange} value={values.entidad} placeholder="Entidad"/>
                           
                       </p>
                       <p>
                           <input type="number" name="tel" id="tel" onChange={handleInputChange} value={values.tel} placeholder="Teléfono"/>
                       </p>
                       <p>
                           <input type="number" name="edad" id="edad" onChange={handleInputChange} value={values.edad} placeholder="Edad"/>
                       </p>
                       <p>
                           <select name="localidad" onChange={handleInputChange} id="localidad">
                               <option value={"localidad"}>Localidad</option>
                               <option value={"usaquen"}>1.Usquén</option>
                               <option value={"chapinero"}>2.Chapinero</option>
                               <option value={"santa_fe"}>3.Santa Fé</option>
                               <option value={"usme"}>4.San Cristóbal</option>
                               <option value={"usme"}>5.Usme</option>
                               <option value={"tunjuelito"}>6.Tunjuelito</option>
                               <option value={"bosa"}>7.Bosa</option>
                               <option value={"kennedy"}>8.Kennedy</option>
                               <option value={"fontibon"}>9.Fontibón</option>
                               <option value={"engativa"}>10.Engativá</option>
                               <option value={"suba"}>11.Suba</option>
                               <option value={"barrios_unidos"}>12.Barrios Unidos</option>
                               <option value={"teusaquillo"}>13.Teusaquillo</option>
                               <option value={"martires"}>14.Los Mártires</option>
                               <option value={"antonio"}>15.Antonio Nariño</option>
                               <option value={"puente"}>16.Puente Aranda</option>
                               <option value={"candelaria"}>17.Candelaria</option>
                               <option value={"rafael"}>18.Rafael Uribe Uribe</option>
                               <option value={"bolivar"}>19.Ciudad Bolívar</option>
                               <option value={"sumapaz"}>20.Sumapaz</option>
                               <option value={"soacha"}>21.Soacha</option>
                               <option value={"otros"}>22.Otros</option>
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
                        

                       <p id="text1">
                           ¿Has tenido síntomas de COVID-19 en las últimas 48 horas o has tenido contacto con una persona contagiada?

                       </p>
                       <p id="AnswerYesNo">
                           Si <input type="radio" name="certify1" id="yes" onChange={handleChange} checked={checked.certify1} /> 
                           No <input type="radio"  name="certify2" id="no" onChange={handleChange} checked={checked.certify2} /> 
                       </p>
                       <p>
                           <input type="submit" id="enviar1" value="Enviar" />
                           <input type="reset" id="borrar" value="Borrar" />
                       </p>

                       </form>


                       

                </div>
                
        </div>

    )
}
export default Invitado