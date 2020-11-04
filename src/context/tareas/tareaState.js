import React, { useReducer } from 'react'
import tareaContext from './tareaContext'
import tareaReducer from './tareaReducer'
import { v4 as uuidv4 } from "uuid"


import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: '1', nombre: 'Elegir platafor', estado: true, proyectoId: 1 },
            { id: '2', nombre: 'Elegir color', estado: false, proyectoId: 2 },
            { id: '3', nombre: 'Elegir estados', estado: false, proyectoId: 3 },
            { id: '4', nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { id: '5', nombre: 'Elegir platafor', estado: true, proyectoId: 1 },
            { id: '6', nombre: 'Elegir color', estado: false, proyectoId: 3 },
            { id: '7', nombre: 'Elegir estados', estado: false, proyectoId: 2 },
            { id: '8', nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { id: '9', nombre: 'Elegir platafor', estado: true, proyectoId: 4 },
            { id: '10', nombre: 'Elegir color', estado: false, proyectoId: 2 },
            { id: '11', nombre: 'Elegir estados', estado: false, proyectoId: 3 },
            { id: '12', nombre: 'Elegir hosting', estado: true, proyectoId: 1 },
            { id: '13', nombre: 'Elegir platafor', estado: true, proyectoId: 4 },
            { id: '14', nombre: 'Elegir color', estado: false, proyectoId: 3 },
            { id: '15', nombre: 'Elegir estados', estado: false, proyectoId: 2 },
            { id: '16', nombre: 'Elegir hosting', estado: true, proyectoId: 1 }


        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
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
        tarea.id = uuidv4()
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

    // ELIMINAR EL TAREA

    const eliminarTarea = (proyectoId) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: proyectoId
        })
    }

    //CAMVIA EL ESTADO DE TAREA
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }


    //extrae una tarea actual
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    // EDITA MODIFICA UNA TAREA
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //LIMPIAR TAREA

    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA

        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )


}



export default TareaState