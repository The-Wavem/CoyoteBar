import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/public/Home";
import Menu from "./pages/public/Menu";
import Location from "./pages/public/Location";
import Contact from "./pages/public/Contact";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="local" element={<Location />} />
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  );
}
