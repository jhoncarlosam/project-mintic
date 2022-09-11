import React, { useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Clothes from "./components/Clothes";
import Team from "./components/Team";
import About from "./components/About";
import axios from 'axios'
import Join from "./components/Join";
import API from "./global"


function App() {
  const [characters, setCharacters] = useState([])
  const [covers, setCovers] = useState([])



  const fetchCharacters = async () => {
    let raw = await axios.get(API+"/api/images", {
      headers: {
        'access-token': localStorage.getItem("TOKEN")
      }
    })
    setCharacters(raw.data);
  };

  const fetchCovers = async () => {
    let raw = await axios.get(API+"/api/images?tipo=cover", {
      headers: {
        'access-token': localStorage.getItem("TOKEN")
      }
    })
    setCovers(raw.data);
  };


  useEffect(() => {
    fetchCharacters()
    fetchCovers()
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main covers={covers} />
      <Clothes characters={characters} />
      <About />
      <Team />
      <Join/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
