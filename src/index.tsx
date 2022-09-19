import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Botao from './components/botao';
import Cardapio from './pages/cardapio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cardapio/>
    <Botao/>
  </React.StrictMode>
);