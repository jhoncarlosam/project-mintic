import { useState } from "react";
import axios from "axios"
import control from "../history"
import API from "../global"
import "../App.css";

export default function Login() { 
  
  document.body.style.backgroundColor = "#1C2833";


const [usuario, setUsuario] = useState('');
const [clave, setClave] = useState('');

const change = (event) => {
 setUsuario(event.target.value)
};
const change2 = (event) => {
  setClave(event.target.value)
 };

 const redirect = (ruta) =>{
  control.push(ruta); window.location.reload(true);
 };
 const goRegister = ()=>{ redirect("/register"); }

const verify = async () => {
  let data = await  axios.post(API+"/api/auth/login", {
      usuario: usuario,
      clave: clave   
   }).catch(errr=>{alert(errr);});
   localStorage.setItem("TOKEN", data.data);
    if(localStorage.getItem("TOKEN")) {
      redirect("/home");
    } 
};

  return (
    <main style={{ padding: "1rem 0" }}  Name="fondo_login"  >
   
     <div className="wrapper">
     <div className="form-signin  shadow-lg rounded">       
       <h2 className="form-signin-heading">Iniciar sesion</h2>
       <input type="text" className="form-control" name="username" value={usuario} onChange={change} placeholder="usuario" required="" autofocus="" />
       <input type="password" className="form-control" name="password" value={clave} onChange={change2} placeholder="clave" required=""/>      
      <button className="btn btn-lg btn-primary btn-block" onClick={verify} >Enviar</button>  
      <p className="text-primary ml-2" style={{cursor:"pointer"}}  onClick={goRegister}>registrarse</p>  
     </div>
   </div>
 

  </main>
  );
}