import React from "react";

export default function Modal() {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="modalCompra"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Inicio de sesión
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <!-- añadir link al atributo objetivo --> */}
              <form action="">
                <div class="form-row">
                  <div class="form-group col">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          Correo
                        </span>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="username@gmail.com"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          Contraseña
                        </span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="******"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div class="alert alert-warning" role="alert">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-tienda">
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
