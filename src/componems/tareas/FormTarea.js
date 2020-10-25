import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'




const FormTarea = () => {




    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext



    if (!proyecto) return null;


    //array destructuring
    const [proyectoActual] = proyecto





    return (


        <div className="formulario">


            <form>

                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="nombre de tarea"
                        name="nombre"
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


        </div>





    );
}

export default FormTarea;