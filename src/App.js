import React, { useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Clothes from "./components/Clothes";
import Join from "./components/Join";
import Team from "./components/Team";
import About from "./components/About";
import Modal from "./components/Modal";
// import { Link } from "react-router-dom";
import axios from 'axios'

// let datos_api = "default";
//   axios.get('https://lobster-app-tadp5.ondigitalocean.app/notes/recollector');

function App() {

  // const [state, setState] = useState(initialState)
  const [characters, setCharacters] = useState([])

  const urlInitial = "https://sea-turtle-app-c7hg6.ondigitalocean.app/api/images"
  // const urlInitial = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = async (url) => {

    let raw = await axios.get("https://sea-turtle-app-c7hg6.ondigitalocean.app/api/images", {
      headers: {
        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2V2aW4iLCJjb21vZGluIjoiMzExMyIsImlhdCI6MTY2MjY2MzY3MSwiZXhwIjoxNjYyNjc0NDcxfQ.uL5DR11br36ABaJgfn_c-tOoDxRfN-QgjP_QW4JJyVQ'
      }
    })

    setCharacters(raw.data);


    

    
  };

  useEffect(() => {
    fetchCharacters(urlInitial)
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main />
      <Clothes characters={characters} />
      <About />
      <Team />
      <Join />
      <Footer />
      <Modal />
      {/* <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav> */}
    </React.Fragment>
  );
}

export default App;
