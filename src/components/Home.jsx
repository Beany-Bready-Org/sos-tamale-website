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
				<Statistics teachers={250} nonTeachingStaff={100} students={500} />
			</header>
			<main>
				<VideoSection />
				<CampusesSection />
				{/* <StaffSection /> */}
				<GallerySection size={8} />
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
