import React, { useContext, useState } from "react";

const PlayContextProvider = React.createContext();
const PlayContextProviderUpdater = React.createContext();

export const useVideoPlaying = () => {
	return useContext(PlayContextProvider);
};

export const useVideoPlayingUpdater = () => {
	return useContext(PlayContextProviderUpdater);
};

const PlayContext = ({ children }) => {
	const [videoPlaying, setVideoPlaying] = useState(false);

	const updateVideoPlayingState = () => setVideoPlaying(prev => !prev)

	return (
		<PlayContextProvider.Provider value={videoPlaying}>
			<PlayContextProviderUpdater.Provider value={updateVideoPlayingState}>
				{children}
			</PlayContextProviderUpdater.Provider>
		</PlayContextProvider.Provider>
	);
};

export default PlayContext;
