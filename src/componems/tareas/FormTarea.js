import React, { useContext, useState } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'



const FormTarea = () => {



    // extrr si un proyecto esa activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext


    //obtener la funcion del context de tareadfsfgfg
    const tareasContext = useContext(tareaContext)
    const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareasContext





    //state del formulariopn
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //extraer el nombre del proyecto
    const { nombre } = tarea


    // si no hay proyecto seleccionado
    if (!proyecto) return null;


    //array destructuring
    const [proyectoActual] = proyecto


    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }





    const onSubmit = e => {
        e.preventDefault()

        //validar
        if (nombre.trim() === '') {
            validarTarea()
            return
        }

        // pasar la validacion

        // agregar nueva tarea en el proyectotarea.proyectoId
        tarea.proyectoId = proyectoActual.id
        tarea.estado = false

        agregarTarea(tarea)

        //obtener y filtrar as tareas del proyecto
        obtenerTareas(proyectoActual.id)







        //reiniciar el form

        guardarTarea({
            nombre: ''
        })
    }


    return (


        <div className="formulario">


            <form
                onSubmit={onSubmit}
            >

                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="nombre de tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    >
                    </input>
                </div>



                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    >
                    </input>
                </div>

            </form>

            {errortarea ?
                <p className="mensaje error">El nombre de la tarea es obligatorio</p>
                :
                null
            }

        </div>





    );
}

export default FormTarea;