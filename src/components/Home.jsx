import VideoSection from "./VideoSection";
import CampusesSection from "./CampusesSection";
import DidYouKnow from "./DidYouKnow";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import Footer from "./Footer";
import MapEmbed from "./MapEmbed";
import Statistics from "./statistics/Statistics";

const Home = () => {
	return (
		<>
			<header>
				<Hero />
				<Statistics teachers="25" nonTeachingStaff="30" students="500" />
			</header>
			<main style={{marginTop: "20em"}}>
				<VideoSection />
				<CampusesSection />
				{/* <StaffSection /> */}
				<DidYouKnow />
				<GallerySection size={12} />
				<div style={{height: "100%"}}>
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
