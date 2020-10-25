import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'




const ListadoTarea = () => {



    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext


    if (!proyecto) return <h2>SELECCIONA UN PROYECTO</h2>


    //array destructuring
    const [proyectoActual] = proyecto


    const tareasProyecto = [
        { nombre: 'Elegir platafor', estado: true },
        { nombre: 'Elegir color', estado: false },
        { nombre: 'Elegir estados', estado: false },
        { nombre: 'Elegir hosting', estado: true }


    ]







    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto</button>



            <h2>PROYECTO: {proyectoActual.nombre} en MERNTasks</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))

                }

            </ul>

        </Fragment>
    );
}

export default ListadoTarea;


