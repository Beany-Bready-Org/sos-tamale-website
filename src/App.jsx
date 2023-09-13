import React, { useState } from "react";
import "./stylesheets/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CampusesSection from "./components/CampusesSection";
import DidYouKnow from "./components/DidYouKnow";
<<<<<<< HEAD
import Gallery from "./components/Gallery";
=======
import StaffSection from "./components/StaffSection";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
>>>>>>> origin/contact-page

export default function App() {
	const [showNav, setShowNav] = useState(false);

<<<<<<< HEAD
  return (
    <>
      <header>
        <Navbar show={showNav} setShowNav={setShowNav} />
        <Hero />
      </header>

      <main>
        <VideoSection />
        <CampusesSection />
        {/* <SuccessSection /> */}
        <DidYouKnow />
        <Gallery />
      </main>
    </>
  );
=======
	return (
		<>
			<header>
				<Navbar show={showNav} setShowNav={setShowNav} />
				<Hero />
			</header>
			<Routes>
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<main>
				<VideoSection />
				<CampusesSection />
				<StaffSection />
				{/* <SuccessSection /> */}
				<DidYouKnow />
			</main>
		</>
	);
>>>>>>> origin/contact-page
}
