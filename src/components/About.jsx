import React from "react";

export default function About() {
  return (
    <>
      {/* <!-- About-us --> */}
      <section id="about-us">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-6 pl-0 pr-0">
              <img
                class="img-fluid"
                src="https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
                alt="clothes"
              />
            </div>
            <div class="col-12 col-lg-6 pt-4 pb-4">
              <h2>Sobre nosotros</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ipsa saepe. Voluptate perferendis tempora recusandae aliquam
                quae rerum commodi sunt in voluptates quam atque ipsam adipisci
                delectus harum magni nihil blanditiis, id, non soluta porro quo!
                Quam libero perferendis totam.
              </p>
              <a
                class="btn btn-outline-light"
                href="https://www.misiontic2022.gov.co/portal/"
                target="_blank"
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
