import { useState } from "react";

import "./stylesheets/App.scss";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CampusesSection from "./components/CampusesSection";

export default function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <Navbar show={showNav} setShowNav={setShowNav} />
        <Hero />
      </header>

      <main>
        <VideoSection />
        <CampusesSection />
      </main>
    </>
  );
}
