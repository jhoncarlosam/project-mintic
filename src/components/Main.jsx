import React from "react";

export default function Main() {
  return (
    <>
      {/* <!-- Main --> */}
      <main id="main">
        <div
          id="carousel"
          class="carousel slide carousel-fade"
          data-ride="carousel"
          data-pause="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Hawaii 1"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1536871006178-9f9c6228c5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Hawaii 2"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1467779009031-53938b78ca38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Hawaii 3"
              />
            </div>
            <div class="overlay">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-md-6 offset-md-6 text-center text-md-right">
                    <h1>Tienda en linea</h1>
                    <p class="d-none d-md-block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam dolore, sequi in quam, esse accusamus, iure
                      incidunt reprehenderit ex id blanditiis! Enim id ipsa
                      ullam libero illum voluptatibus esse ex!
                    </p>
                    <a href="#join-the-team" class="btn btn-outline-light">
                      Quiero ser socio
                    </a>
                    <button type="button" class="btn btn-tienda">
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