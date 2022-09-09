import React from 'react';
import Footer from './Footer';
import Header from './Header';
const Loyout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Loyout;
