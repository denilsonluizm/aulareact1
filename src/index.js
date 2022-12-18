// Trabalho 1 - Desenvolvimento de Sistemas Web - T01 - 2022.1
    
// Alunos:
// Denilson Luiz Amaro Martins - 2020031625
// Pedro Henrique Azevedo do Prado - 2022001536

// Professor:
// Eduardo Ribeiro Felipe

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Menu from './Menu';
import Sobre from './Sobre';
import Calculadora from './Calculadora';
import Membros from './Membros';

// Criando Menu e suas referências

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="membros" element={<Membros/>}/>
        <Route path="calculadora" element={<Calculadora/>}/>
        <Route path="sobre" element={<Sobre/>}/>
      </Routes>
  </BrowserRouter>
);