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
				<Statistics teachers="25 +" nonTeachingStaff="30 +" students="500 +" />
			</header>
			<main>
				<VideoSection />
				<CampusesSection />
				{/* <StaffSection /> */}
				<GallerySection size={8} />
				<div className="news-did-wrapper">
					<NewsLetter />
					<DidYouKnow />
				</div>
				<div style={{ height: "100%", maxHeight: "100%" }}>
					<MapEmbed />
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Home;
