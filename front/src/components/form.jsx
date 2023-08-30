import React from "react";
// import FotoContacto from "../images/contacto.jpg";

const Form = props => {
    return (
        <form className="contacto row justify-content-center text-center">
            <div className="formContainer col-10 col-sm-6 my-5 p-5">
                <h2>Escríbeme y para que nos pongamos en contacto</h2>
                <div className="mb-3 mt-5">
                    <label for="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                    <label for="telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="telefono" />
                </div>
                <div className="mb-3">
                    <label for="correoElectronico" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="correoElectronico" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="comentario" className="form-label">Cuéntame como puedo ayudarte!</label>
                    <textarea type="text" className="form-control comentario" size="40" id="comentario" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    );
}

export default Form;