import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode >
    {/* process.env.PUBLIC_URL ensures correct basename from package.json homepage */}
    <BrowserRouter basename="/Bonitaa-salem">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
