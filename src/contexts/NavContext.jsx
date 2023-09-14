import React, { useContext, useState } from "react";

const NavContext = React.createContext();
const NavContextUpdater = React.createContext();

export function useShowNav() {
    return useContext(NavContext);
}
export function useShowNavToggler() {
    return useContext(NavContextUpdater);
}

const NavContextProvider = ({ children }) => {
	const [showNav, setShowNav] = useState(false);

    const navStateToggler = () => setShowNav(prev => !prev)

	return (
		<NavContext.Provider value={showNav}>
			<NavContextUpdater.Provider value={navStateToggler}>
				{children}
			</NavContextUpdater.Provider>
		</NavContext.Provider>
	);
};

export default NavContextProvider;
