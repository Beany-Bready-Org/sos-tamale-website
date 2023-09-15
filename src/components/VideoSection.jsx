import React from "react";
import IntroVideo from "./IntroVideo";
import "../stylesheets/VideoSection.scss";
import PlayContext from "../contexts/PlayContext";

const VideoSection = () => {
	return (
		<PlayContext>
			<section className="video-section">
				<h2 className="--header">Introductory Video</h2>
				<p className="--description">
					Watch the intro video below about our prestigious institution.
				</p>
				<IntroVideo />
			</section>
		</PlayContext>
	);
};

export default VideoSection;
