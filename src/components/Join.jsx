import React from "react";

export default function Team() {
  return (
    <>
      {/* <!-- Join the team --> */}
      <section id="join-the-team" class="pt-3 pb-3">
        <div class="container">
          <div class="row">
            <div class="col text-uppercase text-center">
              <small>Únete al</small>
              <h2>Equipo</h2>
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              Inscribete como{" "}
              <abbr data-toggle="tooltip" title="Beneficiario de misiontic2022">
                tripulante
              </abbr>
              . Conviértete en un programador Full-Stack!
            </div>
          </div>
          <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
              <form>
                <div class="form-row">
                  <div class="form-group col-12 col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                  <div class="form-group col-12 col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <textarea
                      name="text"
                      class="form-control form-control-lg"
                      placeholder="Un resumen sobre tus habilidades"
                    ></textarea>
                    <small class="form-text text-muted">
                      Recuerda incluir las skills que dominas.
                    </small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <button type="button" class="btn btn-tienda btn-block">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Join the team --> */}
    </>
  );
}
