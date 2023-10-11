import React, { useContext, useState, useReducer } from "react";

const NavContext = React.createContext();
const NavContextUpdater = React.createContext();
const NavDisplayContext = React.createContext();

export function useShowNav() {
  return useContext(NavContext);
}
export function useShowNavToggler() {
  return useContext(NavContextUpdater);
}
export function useNavDisplay() {
  return useContext(NavDisplayContext);
}

export const NAV_DISPLAY_ACTIONS = {
  HOME: "home",
  ABOUT: "about",
  CONTACT: "contact",
  ENROLL: "enroll",
  // GALLERY: "gallery",
};

const NavContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case NAV_DISPLAY_ACTIONS.HOME:
        return (state = NAV_DISPLAY_ACTIONS.HOME);
      case NAV_DISPLAY_ACTIONS.ABOUT:
        return (state = NAV_DISPLAY_ACTIONS.ABOUT);
      case NAV_DISPLAY_ACTIONS.CONTACT:
        return (state = NAV_DISPLAY_ACTIONS.CONTACT);
      case NAV_DISPLAY_ACTIONS.ENROLL:
        return (state = NAV_DISPLAY_ACTIONS.ENROLL);
      // case NAV_DISPLAY_ACTIONS.GALLERY:
      //   return (state = NAV_DISPLAY_ACTIONS.GALLERY);
    }
  };
  const [showNav, setShowNav] = useState(false);
  const [state, dispatch] = useReducer(reducer, NAV_DISPLAY_ACTIONS.HOME);
  const [showDropMenus, setShowDropMenus] = useState(false)

  const navStateToggler = () => setShowNav((prev) => !prev);
  const showDropMenusToggler = (state) => setShowDropMenus(state)

  const navDisplayValues = {
    dispatch,
    state,
  };

  return (
    <NavDisplayContext.Provider value={navDisplayValues}>
      <NavContext.Provider value={{showNav, showDropMenus}}>
        <NavContextUpdater.Provider value={{navStateToggler, showDropMenusToggler}}>
          {children}
        </NavContextUpdater.Provider>
      </NavContext.Provider>
    </NavDisplayContext.Provider>
  );
};

export default NavContextProvider;
