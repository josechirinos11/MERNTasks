import React, { useReducer } from 'react'







import { v4 as uuidv4 } from "uuid"

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    MOSTRAR_TITULO
} from '../../types'






//state iniciallll
const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'tienda virtual' },
        { id: 2, nombre: 'intranet' },
        { id: 3, nombre: 'diseño web' }
    ]




    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }


    // dispach para ejecutar acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)




    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }



    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }


    //agregar proyecto nuevo
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4()

        //insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    const mostarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    //selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }


    const tituloProyecto = (proyecto) => {
        dispatch({
            type: MOSTRAR_TITULO,
            payload: proyecto
        })
    }



    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,

                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostarError,
                proyectoActual
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState