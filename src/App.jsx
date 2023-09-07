import { useState } from 'react'
import './styles/App.scss'
import Navbar from './components/Navbar'

import "./stylesheets/App.scss";
import Hero from "./components/Hero";

export default function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <Navbar show={showNav} setShowNav={setShowNav}/>
      <Hero />
    </>
  );
}
