import React, { useContext, useState } from "react";

const PlayContextProvider = React.createContext();
const PlayContextProviderUpdater = React.createContext();

export const useVideoPlaying = () => {
    return useContext(PlayContextProvider)
}

export const useVideoPlayingUpdater = () => {
    return useContext(PlayContextProviderUpdater)
}

const PlayContext = ({ children }) => {
   

	const [videoPlaying, setVideoPlaying] = useState(false);
	value = {
		videoPlaying,
	};
	return (
		<PlayContextProvider.Provider value={value}>
			<PlayContextProviderUpdater value={setVideoPlaying}>
				{children}
			</PlayContextProviderUpdater>
		</PlayContextProvider.Provider>
	);
};

export default PlayContext;
