import React, { Fragment } from 'react';
import Tarea from './Tarea'




const ListadoTarea = () => {


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
            <h2>PROYECTO: Tienda virtual en MERNTasks</h2>
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


