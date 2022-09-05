import React from "react";

export default function Main() {
  return (
    <>
      {/* <!-- Main --> */}
      <main id="main">
        <div
          id="carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="clothes"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1536871006178-9f9c6228c5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="clothes"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1467779009031-53938b78ca38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="clothes"
              />
            </div>
            <div className="overlay">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 offset-md-6 text-center text-md-right">
                    <h1>Tienda en linea</h1>
                    <p className="d-none d-md-block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam dolore, sequi in quam, esse accusamus, iure
                      incidunt reprehenderit ex id blanditiis! Enim id ipsa
                      ullam libero illum voluptatibus esse ex!
                    </p>
                    <a href="#join-the-team" className="btn btn-outline-light">
                      Quiero ser socio
                    </a>
                    <button type="button" className="btn btn-tienda">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- /Main --> */}
    </>
  );
}