import './App.css';

// Config Reac Router
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


//COMPONENTES
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm';

// PAGES
import About from './pages/About';

import Home from './pages/Home';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFund from './pages/NotFund';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/** barra de busca */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/** NESTED ROUTER */}
          <Route path='/products/:id/info' element={<Info />} />
          {/** ROTA DINAMICA */}
          <Route path='/products/:id' element={<Product />} />
          {/** PAGINA DE BUSCA */}
          <Route path='/search' element={<Search />} />
          {/** REDIRECT */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/** ERRO 404 ou rota não localizada */}
          < Route path="*" element={<NotFund />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
