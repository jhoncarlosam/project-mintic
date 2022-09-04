import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Clothes from './components/Clothes'
import Join from './components/Join'
import Team from './components/Team'
import About from './components/About'
import Modal from './components/Modal'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Clothes genero="hombre"/>
      <Clothes genero="mujer" />
      <About />
      <Team />
      <Join />
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
