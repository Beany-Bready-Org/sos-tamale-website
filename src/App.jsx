import React from "react";
import "./stylesheets/App.scss";
import { Routes, Route, redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import About from "./components/About";
import Enroll from "./components/Enroll";
import NavContextProvider from "./contexts/NavContext";
import Navbar from "./components/Navbar";

export default function App() {
  // const history = useNavigate();

  // function handleHistory(url) {
  //   history.push(url);
  //   console.log(history)
  // }

  

  return (
    <>
      <NavContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </NavContextProvider>
    </>
  );
}
