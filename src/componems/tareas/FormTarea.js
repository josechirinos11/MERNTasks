import React from 'react';


const FormTarea = () => {
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