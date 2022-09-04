import React from "react";

export default function Header() {
  return (
    <>
      {/* <!-- Header --> */}
      <nav id="header" class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img className="logo"
              src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="logo"
              alt="tienda logo"
            />
            Tienda
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#main">
                  inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#hombre">
                  hombre
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#mujer">
                  mujer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sale">
                  sale
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-tienda"
                  href="#"
                  data-toggle="modal"
                  data-target="#modalCompra"
                >
                  Cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- /Header --> */}
    </>
  );
}
