import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/public/Home';
import Location from './pages/public/Location';
import Contact from './pages/public/Contact';
import Menu from './pages/public/Menu';

export default function Router() {
  return (
    <Routes>
      {/* Rotas Institucionais com Navbar & Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="local" element={<Location />} />
        <Route path="contato" element={<Contact />} />
      </Route>

      {/* WebApp Independente de Cardápio de Mesa (Sem Navbar e Footer Institucionais) */}
      <Route path="/cardapio" element={<Menu />} />
    </Routes>
  );
}
