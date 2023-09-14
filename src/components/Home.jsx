import Navbar from "./Navbar";
import VideoSection from "./VideoSection";
import CampusesSection from "./CampusesSection";
import StaffSection from "./StaffSection";
import DidYouKnow from "./DidYouKnow";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <VideoSection />
        <CampusesSection />
        <StaffSection />
        <DidYouKnow />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
