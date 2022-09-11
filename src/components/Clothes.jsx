import React from "react";
import control from "../global"
import axios from "axios"
import route from "../history"

const Clothes = ({ characters } = []) => {

  const redirect = (ruta) =>{
    route.push(ruta); window.location.reload(true);
   };

 const editar = async (id) =>{
  
  let todo = await axios.get(control+"/api/images", {
    headers: {
      'access-token': localStorage.getItem("TOKEN")
    }
  });

  let unique;
 todo.data.forEach(element => {
    if(element._id == id){
      unique = element;
    }
 });

 

 redirect("/editar");

  
 };

  return (
    <>
          {/* CONSUMO DE API */}
          <div className="container">
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
                    <h5 className="card text-success"> {item.precio} </h5>
                    <hr />
                    <button>carro</button>
                    <button onClick={()=>{ editar(item._id)}} >editar</button>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
          </div>
          {/* /CONSUMO DE API */}


    </>
  );
};
export default Clothes