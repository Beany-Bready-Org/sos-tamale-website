import { useState } from "react";

import "./stylesheets/App.scss";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Gallery from "./components/Gallery";

export default function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <Navbar show={showNav} setShowNav={setShowNav} />
        <Hero />
      </header>

      <VideoSection />

      <Gallery /> 
    </>
  );
}
