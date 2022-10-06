import React from "react";
import PrimeiroComponente from "../PrimeiroComponente";
import "../Components.css";

function ComponentePai() {
  const etiqueta = "Insira seu email: ";
  return (
    <div class="containerContador">
      <h1>Hello!</h1>
      <PrimeiroComponente
        etiqueta={etiqueta}
        numero={1}
      />
    </div>
  );
}

export default ComponentePai;
