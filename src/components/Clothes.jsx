import React from "react";
export default function Clothes(props) {
  const genero = props.genero
  return (
    <>
      {/* <!-- hombre --> */}
      <section id={genero} class="mt-4">
        <div class="container">
          <div class="row">
            <div class="col text-center text-uppercase">
              <h2>{genero}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <a title="Ropa Hombre" href="#">
                <img
                  class="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <a title="Ropa Hombre" href="#">
                <img
                  class="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <a title="Ropa Hombre" href="#">
                <img
                  class="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /hombre --> */}
    </>
  );
}
