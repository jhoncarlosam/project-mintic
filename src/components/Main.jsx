import React from "react";

const  Main = ({ covers } = []) => {

  return (
    <>
      {/* <!-- Main --> */}
      <main id="main">
        <div
          id="carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-pause="false"
        >

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={"https://drive.google.com/uc?id="+covers[0]?.url}
                alt="clothes"
              />
            </div>
      

        {covers.map((item, index) => (
              <div key={index} className="carousel-item">
                  <img className="d-block w-100" src={"https://drive.google.com/uc?id="+item.url} alt={item.tipo} />
              </div>
            ))
        }

          
            <div className="overlay">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 offset-md-6 text-center text-md-right">
                    <h1>Moda Fresca</h1>
                    <p className="d-none d-md-block">
                       viste como y a la moda
                    </p>
                    <button type="button" className="btn btn-tienda">
                      ir a comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}

export default Main;