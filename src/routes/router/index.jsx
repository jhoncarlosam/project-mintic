import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../../App';
import Login from "../login"
import Register from "../registro"
import Editar from '../../components/editar';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;