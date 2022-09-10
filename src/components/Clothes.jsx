import React from "react";


const Clothes = ({ characters } = []) => {
  // const characters = props.characters;
  return (
    <>
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


    </>
  );
};
export default Clothes