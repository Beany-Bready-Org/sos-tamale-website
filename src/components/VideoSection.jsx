import React, { useState } from "react";
import IntroVideo from "./IntroVideo";
import '../stylesheets/VideoSection.scss'

const VideoSection = () => {
    const [videoPLaying, setVideoPlaying] = useState(false)
	return (
		<section className="video-section">
			<h2 className="--header">Introductory Video</h2>
			<p className="--description">
				Watch the intro video below about our prestigious institution.
			</p>
			<IntroVideo videoPlaying={videoPLaying} setVideoPlaying={setVideoPlaying}/>
		</section>
	);
};

export default VideoSection;
