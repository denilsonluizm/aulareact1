import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Component1 from './Component1';
import UsuariosTabela from './UsuariosTabela';
import Menu from './Menu';
import Sobre from './Sobre';
import Usuarios from './Usuarios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="usuarios" element={<Component1 />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="pessoas" element={<Usuarios/>}/>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

