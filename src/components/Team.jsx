import React from "react";

export default function Team() {
  return (
    <>
      {/* <!-- Team one --> */}
      <section id="team-one" className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase">
              <small>Conoce al</small>
              <h2>Equipo 1</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://avatars.githubusercontent.com/u/42685009?v=4"
                  alt="Foto de Jhon"
                />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning p-1 mx-2">JavaScript</span>
                    <span className="badge badge-primary  p-1 mx-2 ">React</span>
                    <span className="badge badge-primary  p-1 mx-2 ">Node.js</span>
                  </div>
                  <h5 className="card-title">Jhon Acevedo</h5>
                  <p className="card-text">
                    Desarrollador Front-End, encargado del desarrollo
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://drive.google.com/uc?id=1nJcujGxoe7qpnjtY7TX7aIL7DsOpFxb4"
                  alt="Foto de Miguel"
                />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-success  p-1 mx-2">React</span>
                    <span className="badge badge-secondary  p-1 mx-2">Javascript</span>
                    <span className="badge badge-secondary  p-1 mx-2">Node</span>
                  </div>
                  <h5 className="card-title">Miguel Hernandez</h5>
                  <p className="card-text">
                    Desarrollador Front-End Pruebas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://drive.google.com/uc?id=1y0n1saa-Ba1PENthQbX4r6VqHWVWepio"
                  alt="Foto de Laura"
                />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-primary  p-1 mx-2">React</span>
                    <span className="badge badge-success  p-1 mx-2">Node</span>
                  </div>
                  <h5 className="card-title">Laura Francisca</h5>
                  <p className="card-text">
                   Desarrollador Front-End diseño
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://drive.google.com/uc?id=1kVbMApfudUjFGHe-DvbxpWIwdQCSP_VX"
                  alt="Foto de Jesus"
                />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-info  p-1 mx-2">C++</span>
                    <span className="badge badge-success  p-1 mx-2">Node</span>
                    <span className="badge badge-success  p-1 mx-2">MongoDB</span>
                  </div>
                  <h5 className="card-title">Kevin Bohorquez</h5>
                  <p className="card-text">
                    Desarrollador Back-End
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1505866535066-ccebd6b2b98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=589&q=80"
                  alt="Foto de Kevin"
                />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-info  p-1 mx-2">sysadmin</span>
                    <span className="badge badge-success  p-1 mx-2">linux</span>
                  </div>
                  <h5 className="card-title">Jesús Duran</h5>
                  <p className="card-text">
                   DevOps despliegue 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Team one --> */}
    </>
  );
}