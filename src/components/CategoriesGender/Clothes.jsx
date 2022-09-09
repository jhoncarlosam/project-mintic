import React from 'react';
import { Link } from 'react-router-dom';
export default function Clothes(props) {
  const genero = props.genero;
  return (
    <>
      {/* <!-- hombre --> */}
      <section id={genero} className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase">
              <h2>{genero}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Link title="Ropa Hombre" to="/">
                <img
                  className="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Link title="Ropa Hombre" to="/">
                <img
                  className="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Link title="Ropa Hombre" to="/">
                <img
                  className="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /hombre --> */}
    </>
  );
}
