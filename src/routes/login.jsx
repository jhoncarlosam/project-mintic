
import { useState } from "react";
import axios from "axios"
import { Navigate } from 'react-router-dom';

import control from "../history"


export default function Login() { 
  
const [usuario, setUsuario] = useState('');
const [clave, setClave] = useState('');

const change = (event) => {
 setUsuario(event.target.value)
};
const change2 = (event) => {
  setClave(event.target.value)
 };


const verify = async () => {
  let data = await  axios.post("https://sea-turtle-app-c7hg6.ondigitalocean.app/api/auth/login", {
      usuario: usuario,
      clave: clave   
   }).catch(errr=>{alert(errr);});
   localStorage.setItem("TOKEN", data.data);
    if(localStorage.getItem("TOKEN")) {
      control.push("/home"); window.location.reload(true);
    } 
};

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Login</h2>
      
      
      <input type="text" id="usuario" placeholder="usuario" value={usuario} onChange={change} ></input>
      <input type="text" id="password" placeholder="clave" value={clave} onChange={change2} ></input>
      <button onClick={verify} > inciar  </button>

    </main>
  );
}