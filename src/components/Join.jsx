import React from "react";

export default function Join() {
  return (
    <>
      {/* <!-- Join the team --> */}
      <section id="join-the-team" className="pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col text-uppercase text-center">
              <small>Únete al</small>
              <h2>Equipo</h2>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              Inscribete como{" "}
              <abbr data-toggle="tooltip" title="Beneficiario de misiontic2022">
                tripulante
              </abbr>
              . Conviértete en un programador Full-Stack!
            </div>
          </div>
          <div className="row">
            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
              <form>
                <div className="form-row">
                  <div className="form-group col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <textarea
                      name="text"
                      className="form-control form-control-lg"
                      placeholder="Un resumen sobre tus habilidades"
                    ></textarea>
                    <small className="form-text text-muted">
                      Recuerda incluir las skills que dominas.
                    </small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <button type="button" className="btn btn-tienda btn-block">
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
