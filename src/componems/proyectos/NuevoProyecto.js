import React, { Fragment, useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //state del proyecto
    const proyectosContext = useContext(proyectoContext)
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostarError } = proyectosContext





    const [proyecto, guardarProyecto] = useState({
        Nombre: ''
    })

    //extraer nombre del proyecto
    const { nombre } = proyecto



    //lee los contenidos del input
    const onChangeProyecto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitProyecto = (e) => {
        e.preventDefault()

        // validar proyecto
        if (nombre === '') {
            mostarError()
            return
        }




        //agregar el state
        agregarProyecto(proyecto)



        //reiniciar form
        guardarProyecto({
            nombre: ''
        })



    }


    //mostrar formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }






    return (
        <Fragment>


            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            {
                formulario
                    ?
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >

                            <input
                                type="text"
                                className="input-text"
                                placeholder="nombre de proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            />

                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />

                        </form>
                    )
                    : null
            }

            {
                errorformulario ? <p className="mensaje error">Nombre del proyecto es obligatorio</p> : null
            }

        </Fragment>
    );
}

export default NuevoProyecto;