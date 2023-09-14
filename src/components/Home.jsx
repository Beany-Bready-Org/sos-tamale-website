import React, {useState} from 'react'
import Navbar from './Navbar'
import VideoSection from './VideoSection'
import CampusesSection from './CampusesSection'
import StaffSection from './StaffSection'
import DidYouKnow from './DidYouKnow'
import Gallery from './Gallery'
import Hero from './Hero'

const Home = () => {
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
      <StaffSection />
      <DidYouKnow />
      <Gallery />
    </main>
  </>
  )
}

export default Home