import React, { useContext, useState } from "react";

const AccessBoxContext = React.createContext();
export function useAccessBox() {
	return useContext(AccessBoxContext);
}

const AccessBoxProvider = ({ children }) => {
	const [showAccessBox, setShowAccessBox] = useState(false);
    
	return (
		<AccessBoxContext.Provider value={{ showAccessBox, setShowAccessBox }}>
			{children}
		</AccessBoxContext.Provider>
	);
};

export default AccessBoxProvider;
