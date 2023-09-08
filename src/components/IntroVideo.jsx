import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import introVideo from "../assets/Videos/test-intro.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const IntroVideo = ({ videoPlaying, setVideoPlaying }) => {
	const videoRef = useRef();
	const videoPlayerButtonRef = useRef();
	const [showPlayButton, setShowPlayButton] = useState(true);

	return (
		<div className="video-container">
			<video
				src={introVideo}
				ref={videoRef}
				onClick={() => {
					setVideoPlaying((prev) => !prev);
					setShowPlayButton((prev) => !prev);
					!videoPlaying && videoPlayerButtonRef.current.style.opacity !== 0
						? videoRef.current.play()
						: videoRef.current.pause();
				}}
			></video>

			<div
				className="video-container__video-action-toggler"
				onClick={() => {
					setVideoPlaying((prev) => !prev);
					setShowPlayButton((prev) => !prev);
					!videoPlaying && videoPlayerButtonRef.current.style.opacity !== 0
						? videoRef.current.play()
						: videoRef.current.pause();
				}}
				ref={videoPlayerButtonRef}
				style={
					showPlayButton
						? null
						: { opacity: 0, transition: "opacity 300ms ease" }
				}
			>
				<FontAwesomeIcon
					icon={!videoPlaying ? faPlay : faPause}
					style={{ fontSize: "1.3rem" }}
				/>
			</div>
		</div>
	);
};

IntroVideo.propTypes = {
	videoPlaying: PropTypes.bool.isRequired,
	setVideoPlaying: PropTypes.func.isRequired,
};

export default IntroVideo;
