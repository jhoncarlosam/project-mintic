
import { useState } from "react";
import axios from "axios"

import control from "../history"
import API from "../global"

export default function Register() { 
  
  document.body.style.backgroundColor = "#1C2833";

const [usuario, setUsuario] = useState('');
const [clave, setClave] = useState('');

const change = (event) => {
 setUsuario(event.target.value)
};
const change2 = (event) => {
  setClave(event.target.value)
 };


const verify = async () => {
  let data = await  axios.post(API+"/api/auth/register", {
      usuario: usuario,
      clave: clave   
   }).catch(errr=>{alert(errr);});
      control.push("/"); window.location.reload(true);
};

  return (
    <main style={{ padding: "1rem 0" }}>
     <div className="wrapper">
     <div className="form-signin  shadow-lg rounded">       
       <h2 className="form-signin-heading">Registrese</h2>
       <input type="text" className="form-control" name="username" value={usuario} onChange={change} placeholder="usuario" required="" autofocus="" />
       <input type="password" className="form-control" name="password" value={clave} onChange={change2} placeholder="clave" required=""/>      
      <button className="btn btn-lg btn-primary btn-block" reload="false" onClick={verify} >Enviar</button>  
     </div>
   </div>

    </main>
  );
}
