import React from 'react';
import About from '../../components/About';
import Team from '../../components/Join';
import Main from '../../components/Main';
import Modal from '../../components/Modal';
import Join from '../../components/Join';
import CategoriesGender from '../../components/CategoriesGender';
const Home = () => {
  const gender = [{ categorie: 'Hombre' }, { categorie: 'Mujer' }];

  return (
    <>
      <Main />
      <CategoriesGender gender={gender} />
      <About />
      <Team />
      <Join />
      <Modal />
    </>
  );
};

export default Home;
