import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken") || "";

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      return navigate("/");
    }
  }, [accessToken]);

  return children;
};

export default ProtectedRoutes;
