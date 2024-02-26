import IntroVideo from "./IntroVideo";
import "../stylesheets/VideoSection.scss";
import PlayContext from "../contexts/PlayContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const VideoSection = () => {
	const [loopVideo, setLoopVideo] = useState(false);
	const [autoplayVideo, setAutoPlayVideo] = useState(false);
	return (
		<PlayContext>
			<section className="video-section">
				<h2 className="--header">Introductory Video</h2>
				<p className="--description">
					Watch the intro video below about our prestigious institution.
				</p>
				<IntroVideo loop={loopVideo} autoplay={autoplayVideo} />
				<Link to="/about" className="--cta">
					Learn more about us
				</Link>
			</section>
		</PlayContext>
	);
};

export default VideoSection;
