import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PrimeiroComponente from "./components/PrimeiroComponente";
import ComponentePai from "./components/ComponentePai";
import Contador from "./components/Contador";
import FormularioDinamico from "./components/ComponenteDinamico";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormularioDinamico />
  </React.StrictMode>
);
