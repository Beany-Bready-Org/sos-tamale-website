import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import ErrorBoundary from "./error-boundary/ErrorBoundary.jsx";
ErrorBoundary;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary></ErrorBoundary>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
