"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "../components/Header";
import Nav from "../components/Nav";
import HomeP from "../pages/HomeP";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

export default function Routers() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path = "/experience" element = {<Experience />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </main>
      <footer><Nav /></footer>
    </BrowserRouter>
  );
}