import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Select the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Render the app, wrapped inside BrowserRouter for routing capabilities
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// This is used for tracking performance, if you want to send the results to an analytics endpoint
reportWebVitals();
