import React, { useContext, useState } from 'react';
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Tarea = ({ tarea }) => {



    // extrr si un proyecto esa activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext


    //obtener la funcion del context de tareadfsfgfg
    const tareasContext = useContext(tareaContext)
    const { tareas, eliminarTarea, obtenerTareas, cambiarEstadoTarea } = tareasContext



    //array destructuring
    const [proyectoActual] = proyecto



    const onSubmit = e => {
        e.preventDefault()
        console.log("desde el boto")

    }


    // elimina tarea
    const clickeliminarTarea = (id) => {
        console.log(proyectoActual.id)
        eliminarTarea(id)
        obtenerTareas(proyectoActual.id)
    }


    // funcion que modifica el estado
    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        cambiarEstadoTarea(tarea)
    }



    return (
        <li className="tarea sombra">
            <p>{tarea.nombre} </p>
            <div className="estado">
                {
                    tarea.estado
                        ?
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => cambiarEstado(tarea)}
                            >Completo</button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}
                            >incompleto</button>
                        )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => clickeliminarTarea(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;
