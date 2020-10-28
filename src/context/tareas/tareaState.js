import React, { useReducer } from 'react'
import tareaContext from './tareaContext'
import tareaReducer from './tareaReducer'

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA
} from '../../types'

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir platafor', estado: true, proyectoId: 1 },
            { nombre: 'Elegir color', estado: false, proyectoId: 2 },
            { nombre: 'Elegir estados', estado: false, proyectoId: 3 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir platafor', estado: true, proyectoId: 1 },
            { nombre: 'Elegir color', estado: false, proyectoId: 3 },
            { nombre: 'Elegir estados', estado: false, proyectoId: 2 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir platafor', estado: true, proyectoId: 4 },
            { nombre: 'Elegir color', estado: false, proyectoId: 2 },
            { nombre: 'Elegir estados', estado: false, proyectoId: 3 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 1 },
            { nombre: 'Elegir platafor', estado: true, proyectoId: 4 },
            { nombre: 'Elegir color', estado: false, proyectoId: 3 },
            { nombre: 'Elegir estados', estado: false, proyectoId: 2 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 1 }


        ],
        tareasproyecto: null,
        errortarea: false
    }



    // crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState)




    //crear las funciones


    //obtener las tareas de un proyecto

    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }



    //AGREGAR TAREA AL PROYECTO SELECCIONADO
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }


    //VALIDA Y MUESTRA UN ERROR EN CASO DE QUE SEA NECESARIO

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA

        })
    }



    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )


}



export default TareaState