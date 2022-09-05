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
// import Test from "./components/Test"

// import axios from 'axios'
// let datos_api = "default";
//   axios.get('https://lobster-app-tadp5.ondigitalocean.app/notes/recollector');

function App() {

  // const [state, setState] = useState(initialState)
  const [characters, setCharacters] = useState([])

  const urlInitial = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      // .then((data) => console.log(data.results))
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(urlInitial)
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main />
      <Clothes characters={characters} />
      {/* <Test characters={characters}/> */}
      {/* <Clothes genero="mujer" /> */}
      <About />
      <Team />
      <Join />
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
