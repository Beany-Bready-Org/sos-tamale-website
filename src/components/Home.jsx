import VideoSection from "./VideoSection";
import CampusesSection from "./CampusesSection";
import DidYouKnow from "./DidYouKnow";
import Hero from "./Hero";
import Footer from "./Footer";
import MapEmbed from "./MapEmbed";
import Statistics from "./statistics/Statistics";
import GallerySection from "./GallerySection";
import NewsLetter from "./NewsLetter";

const Home = () => {
	return (
		<>
			<header>
				<Hero />
				{/* removed for now*/}
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
