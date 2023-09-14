import React from "react";
import "./stylesheets/App.scss";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from "./components/About";
import Enroll from "./components/Enroll";

export default function App() {
	return (
		<>
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/enroll" element={<Enroll />} />
      </Routes> 
		</>
	);
}
