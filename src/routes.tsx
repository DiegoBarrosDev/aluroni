import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/menu';
import Cabecalho from 'components/cabecalho';
import Sobre from 'pages/sobre';
import Rodape from 'components/rodape';
import NotFound from 'pages/notFound';
import Prato from 'pages/prato';

export default function appRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Cabecalho/>}>
            <Route index element={<Inicio/>}/> 
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element={<Sobre/>}/>
          </Route>
          <Route path='prato/:id' element={<Prato/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Rodape/>
      </Router>
    </main>
  );
}