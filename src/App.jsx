import { useState } from 'react'
import './styles/App.scss'
import Navbar from './components/Navbar'
import VideoSection from './components/VideoSection'


export default function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <Navbar show={showNav} setShowNav={setShowNav}/>
      <VideoSection />
    </>
  )
}
