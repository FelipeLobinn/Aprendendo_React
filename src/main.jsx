import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PrimeiroComponente from "./components/PrimeiroComponente/index";
import ComponentePai from "./components/ComponentePai";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ComponentePai />
  </React.StrictMode>
);
