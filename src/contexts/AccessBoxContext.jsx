import React, { useContext, useState } from "react";

const AccessBoxContext = React.createContext();
export function useAccessBox() {
	return useContext(AccessBoxContext);
}
const [showAccessBox, setShowAccessBox] = useState(false);

const AccessBoxProvider = ({ children }) => {
	return <AccessBoxContext.Provider>
        {children}
    </AccessBoxContext.Provider>;
};

export default AccessBoxProvider;
