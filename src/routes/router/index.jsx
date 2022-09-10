import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../../App';
import Login from "../login"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;