import React, { useState } from "react";
import IntroVideo from "./IntroVideo";

const VideoSection = () => {
    const [videoPLaying, setVideoPlaying] = useState(false)
	return (
		<section className="video-section">
			<h2 className="video-section__header">Introductory Video</h2>
			<p className="video-section__description">
				Watch the intro video below about our prestigious institution.
			</p>
			<IntroVideo videoPLaying={videoPLaying} setVideoPlaying={setVideoPlaying}/>
		</section>
	);
};

export default VideoSection;
