import VideoSection from "./VideoSection";
import CampusesSection from "./CampusesSection";
import DidYouKnow from "./DidYouKnow";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <VideoSection />
        <CampusesSection />
        {/* <StaffSection /> */}
        <DidYouKnow />
        <GallerySection size={12}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
