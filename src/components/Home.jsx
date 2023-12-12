import VideoSection from "./VideoSection";
import CampusesSection from "./CampusesSection";
import DidYouKnow from "./DidYouKnow";
import Hero from "./Hero";
import Footer from "./Footer";
import MapEmbed from "./MapEmbed";
import Statistics from "./statistics/Statistics";
import GallerySection from "./GallerySection";

const Home = () => {
  return (
    <>
      <header>
        <Hero />
        <Statistics teachers="25 +" nonTeachingStaff="30 +" students="500 +" />
      </header>
      <main>
        <VideoSection />
        <CampusesSection />
        {/* <StaffSection /> */}
        <DidYouKnow />
        <GallerySection size={12}/>
        {/* No div here, or there'll be a space between footer*/}
        <MapEmbed />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
