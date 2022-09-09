import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer id="footer" className="pb-4 pt-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-lg">
              <Link to="/">CONTACTO</Link>
            </div>
            <div className="col-12 col-lg">
              <Link to="/">QUIENES SOMOS</Link>
            </div>
            <div className="col-12 col-lg">
              <Link to="/">AYUDA</Link>
            </div>
            <div className="col-12 col-lg">
              <Link to="/">SÍGUENOS</Link>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- /Footer --> */}
    </>
  );
}
