import React from "react";

export default function Registrar() {
  return (
    <>
      {/* <!-- Modal --> */}
      {/* change tabindex to tabIndex */}
      <div
        className="modal fade"
        id="modalCompra"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Registrarse
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* <!-- añadir link al atributo objetivo --> */}
              <form action="">
                <div className="form-row">
                  <div className="form-group col">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Correo
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="username@gmail.com"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Contraseña
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="******"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
              {/* <div className="alert alert-warning" role="alert">
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  ¿Olvidaste tu contraseña?
                </a>
              </div> */}
              {/* <div className="alert alert-warning" role="alert">
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  Registrarse
                </a>
              </div> */}
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-tienda">
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Modal --> */}
    </>
  );
}
