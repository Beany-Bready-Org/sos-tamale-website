import React from "react";
import "./stylesheets/App.scss";
import { Routes, Route, redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import About from "./components/About";
import Gallery from "./components/gallery/Gallery";
import Enroll from "./components/enroll/Enroll";
import NavContextProvider from "./contexts/NavContext";
import Navbar from "./components/Navbar";
import RulesRegulations from "./components/rnr/RulesRegulations";

export default function App() {
  return (
    <>
      <NavContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rules-and-regulations" element={<RulesRegulations />} />
        </Routes>
      </NavContextProvider>
    </>
  );
}
