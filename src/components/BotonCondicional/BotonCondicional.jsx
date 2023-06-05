//LOGIN DE USUARIO:

import { useState } from "react"
const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    //Hay que crear los estados para administrar usuario y contraseña:

    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const habilitarUsuario = (e) => {
        e.preventDefault();
        //Ahora implemento la lógica de validación:
        if(usuario === "Omar" && pass === "Bonilla"){
            setVerificado(true);
        } else {
            setUsuario("Usuario no válido");
            setPass("Por favor ingrese los datos correctos");
            //Pasar a agregar el "onSubmit - habilitarUsuario en el "return"
        }
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }

    //Función de guardar usuario y guardar clave:

    const guardarUsuario = (e) => {
        setUsuario(e.target.value);
    } 
    const guardarPass = (e) => {
        setPass(e.target.value);
    }


  return (
    <>
    {
        verificado ? (<button onClick={deshabilitarUsuario}> Cerrar Sesión </button> ) : (

            <form onSubmit={habilitarUsuario}>
            <label htmlFor="">Usuario</label>
            <input type="text" value={usuario} onChange={guardarUsuario} />
    
            <label htmlFor="">Contraseña</label>
            <input type="text" value={pass} onChange={guardarPass} />
    
            <button>Iniciar Sesión </button>
    
            {/* ahora hay que crear una funcion que sea guardarUsuario y otra que sea guardarPass */}
            </form>   
        )
    }
    </>
  )
}

export default BotonCondicional