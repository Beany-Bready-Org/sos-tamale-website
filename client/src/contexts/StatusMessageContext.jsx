import React, { useState, useContext, createContext } from "react";

const StatusMessageContextProvider = createContext();

export const useStatusMessage = () => {
  return useContext(StatusMessageContextProvider);
};

const StatusMessageContext = ({ children }) => {
  const [statusMessage, setStatusMessage] = useState({
    message: "",
    success: false,
  });

  // Dismissible status message function
  const showStatusMessageForAWhile = (message, success) => {
    if (message && success) {
      setStatusMessage((prev) => {
        return { ...prev, message, success };
      });
    }

    const timeout = setTimeout(() => {
      setStatusMessage({ message: "", success: false });
    }, 1500);

    return () => clearTimeout(timeout);
  };

  return (
    <StatusMessageContextProvider.Provider
      value={{ statusMessage, showStatusMessageForAWhile }}
    >
      {children}
    </StatusMessageContextProvider.Provider>
  );
};

export default StatusMessageContext;
