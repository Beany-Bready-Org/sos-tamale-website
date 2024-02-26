import React, { useRef, useState } from "react";
import introVideo from "../assets/Videos/test-intro.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import {
	useVideoPlaying,
	useVideoPlayingUpdater,
} from "../contexts/PlayContext";
import PropTypes from "prop-types";

const IntroVideo = ({ loop, autoplay }) => {
	const videoPlaying = useVideoPlaying();
	const setVideoPlaying = useVideoPlayingUpdater();
	const videoRef = useRef();
	const videoPlayerButtonRef = useRef();
	const [showPlayButton, setShowPlayButton] = useState(true);
	const [iconMode, setIconMode] = useState("play");

	return (
		<div
			className="video-container"
			onClick={() => {
				setVideoPlaying();
				!videoPlaying && videoPlayerButtonRef.current.style.opacity !== 0
					? videoRef.current.play()
					: videoRef.current.pause();
			}}
		>
			<video
				src={introVideo}
				ref={videoRef}
				onPlay={() => {
					setIconMode("pause");
					setShowPlayButton(false);
				}}
				onPause={() => {
					setIconMode("play");
					setShowPlayButton(true);
				}}
			></video>

			<div
				className={
					!showPlayButton
						? "video-container__video-action-toggler hide"
						: "video-container__video-action-toggler"
				}
				onClick={() => {
					setVideoPlaying();
					setShowPlayButton((prev) => !prev);
					!videoPlaying && videoPlayerButtonRef.current.style.opacity !== 0
						? videoRef.current.play()
						: videoRef.current.pause();
				}}
				ref={videoPlayerButtonRef}
			>
				<FontAwesomeIcon
					icon={iconMode === "play" ? faPlay : faPause}
					style={{ fontSize: "clamp(1.2em, 4vmin, 1.75em)", marginLeft: "3px" }}
				/>
			</div>
		</div>
	);
};

IntroVideo.propTypes = {
	loop: PropTypes.bool.isRequired,
	autoplay: PropTypes.bool.isRequired,
};

export default IntroVideo;
