import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './../Layout';
import Home from './../../container/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
