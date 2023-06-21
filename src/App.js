import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicial from './PaginaInicial';
import SegundaPagina from './SegundaPagina';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/segunda" element={<SegundaPagina />} />
      </Routes>
    </Router>
  );
};

export default App;