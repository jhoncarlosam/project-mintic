import React from "react";
import cntrol from "../history"

export default function Header() {


  function cerrar_sesion (){
    localStorage.clear();
    cntrol.push("/"); window.location.reload(true);
  };


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
              <li  className="nav-item">
              <a onClick={cerrar_sesion} className="nav-link" href="#">
                  cerrar sesion
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
