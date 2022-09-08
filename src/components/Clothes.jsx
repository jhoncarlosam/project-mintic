import React from "react";

// export default function Clothes(props) {
const Clothes = ({ characters } = []) => {
  // const genero = props.genero
  // const characters = props.characters;
  return (
    <>
      {/* <!-- hombre --> */}
      <section id="hombre" className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col text-center text-uppercase">
              <h2>hombre</h2>
            </div>
          </div>

          {/* CONSUMO DE API */}
          <div className="row">
            {characters.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <img
                    className="img-responsive img-thumbnail img-1"
                    src={"https://drive.google.com/uc?id=" + item.url}
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.tipo}</h5>
                    <hr />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* /CONSUMO DE API */}

          {/* <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <a title="Ropa Hombre" href="/#">
                <img
                  className="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <a title="Ropa Hombre" href="/#">
                <img
                  className="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <a title="Ropa Hombre" href="/#">
                <img
                  className="img-responsive img-1"
                  src="https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Shorts Hombre"
                  width="1024"
                  height="1133"
                />
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* <!-- /hombre --> */}
    </>
  );
};
export default Clothes