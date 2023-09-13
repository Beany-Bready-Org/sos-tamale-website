import React, { useRef, useState } from "react";
import introVideo from "../assets/Videos/test-intro.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import {
	useVideoPlaying,
	useVideoPlayingUpdater,
} from "../contexts/PlayContext";

const IntroVideo = () => {
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
					setShowPlayButton(false)
				}}
				onPause={() => {
					setIconMode("play");
					setShowPlayButton(true)
				}}
			></video>

			<div
				className={!showPlayButton ? "video-container__video-action-toggler hide" : "video-container__video-action-toggler"}
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
					style={{ fontSize: "1.3rem" }}
				/>
			</div>
		</div>
	);
};

export default IntroVideo;
