import React, { lazy } from "react";
import "./stylesheets/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import About from "./components/About";
import Gallery from "./components/gallery/Gallery";
import Enroll from "./components/enroll/Enroll";
import NavContextProvider from "./contexts/NavContext";
import Navbar from "./components/Navbar";
import RulesRegulations from "./components/rnr/RulesRegulations";
import Events from "./components/events-page/Events";
import Register from "./components/accounts/Register";
import AccessBoxProvider from "./contexts/AccessBoxContext";
import AccessTokenBox from "./components/accounts/AccessTokenBox";
import Dashboard from "./components/admin-dashboard/Dashboard";

// Main component
export default function App() {
  return (
    <>
      <NavContextProvider>
        <AccessBoxProvider>
          <Navbar />
          <AccessTokenBox />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/rules-and-regulations"
              element={<RulesRegulations />}
            />
            <Route path="/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
          </Routes>
        </AccessBoxProvider>
      </NavContextProvider>
    </>
  );
}
