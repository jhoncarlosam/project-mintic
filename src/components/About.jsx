import React from "react";

export default function About() {
  return (
    <>
      {/* <!-- About-us --> */}
      <section id="about-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 pl-0 pr-0">
              <img
                className="img-fluid"
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="clothes"
              />
            </div>
            <div className="col-12 col-lg-6 pt-4 pb-4">
              <h2>Sobre nosotros</h2>
              <p>
                tienda en linea de ropa, ropa fresca y sencilla para su compra, el team de teamone trabaja en esta tienda online, manteniendo y 
                ajustando su codigo fuente
                </p>
              <a
                className="btn btn-outline-light"
                href="https://www.misiontic2022.gov.co/portal/"
                target="_blank" rel="noreferrer"
              >
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /About us --> */}
    </>
  );
}
