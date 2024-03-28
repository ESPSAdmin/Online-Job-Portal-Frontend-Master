import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { AuthContextProvider, JobContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <JobContextProvider>
      <Router>
        <App />
      </Router>
    </JobContextProvider>
  </AuthContextProvider>
);
