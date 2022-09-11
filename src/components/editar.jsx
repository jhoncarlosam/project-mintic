import React from 'react'
import { useState } from 'react'

export default function Editar(props) {

    const dato = props.url;

    const [tipo, setTipo] = useState("");
    const [url, setUrl] = useState("");
    const [precio, setPrecio] = useState("");


    const gTipo = (event) => {
        setTipo(event.target.value)
    };
    const gUrl = (event) => {
        setUrl(event.target.value)
    };
    const gPrecio = (event) => {
        setPrecio(event.target.value)
    };

    // const verify = () =>{
    //     console.log(tipo, url, precio);
    // };

  return (
    <>
       
       <h2>ghola</h2>

       <input type="text"  value={tipo} onChange={gTipo} />
       <input type="text" value={url} onChange={gUrl} />
       <input type="text" value={precio} onChange={gPrecio} />
       <button>actualizar</button>

    </>
  )
}
