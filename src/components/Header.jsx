import React from "react";

export default function Header() {
  return (
    <>
      {/* <!-- Header --> */}
      <nav id="header" className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <img className="logo"
              src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="tienda logo"
            />
            Tienda
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#main">
                  inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hombre">
                  hombre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mujer">
                  mujer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sale">
                  sale
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-tienda"
                  href="/#"
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
