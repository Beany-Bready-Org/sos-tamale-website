import VideoSection from "./VideoSection";
import CampusesSection from "./CampusesSection";
import DidYouKnow from "./DidYouKnow";
import Hero from "./Hero";
import Footer from "./Footer";
import MapEmbed from "./MapEmbed";
import Statistics from "./statistics/Statistics";
import GallerySection from "./GallerySection";
import NewsLetter from "./NewsLetter";
import InfoBox from "./info-section/InfoBox";

const Home = () => {
  return (
    <>
      <header>
        <Hero />
        {/* removed for now*/}
        <section className="info">
          <InfoBox
            title="Our School's Clubs"
            description="Explore our amazing school clubs driven by our very own students together with dedicated teachers who give their very best to the clubs!"
            linkRef="/school-clubs"
          />
          <InfoBox
            title="Headmistress's Address"
            description="A welcome message from this prestigious institution's headmistress, Mrs. Catherine Mawah."
            linkRef="https://www.youtube.com"
          />
          <InfoBox
            title="Leaders of our Student Body"
            description="Let's introduce you to our dedicated and hardworking leaders!"
            linkRef="https://www.youtube.com"
          />
        </section>
        {/* <Statistics teachers={33} nonTeachingStaff={16} students={400} /> */}
      </header>
      <main>
        {/* <VideoSection /> */}
        <CampusesSection />
        {/* <StaffSection /> */}
        <GallerySection size={6} />
        <div className="news-did-wrapper">
          {/* <NewsLetter /> */}
          <DidYouKnow />
        </div>
        <MapEmbed />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
