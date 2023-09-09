import { useState } from 'react'

import './stylesheets/App.scss'

import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import VideoSection from './components/VideoSection'


export default function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <Navbar show={showNav} setShowNav={setShowNav}/>
      <Hero />
      <VideoSection />
    </>
  );
}
