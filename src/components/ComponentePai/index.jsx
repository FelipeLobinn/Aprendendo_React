import React from "react";
import PrimeiroComponente from "../PrimeiroComponente";

function ComponentePai() {
  const etiqueta = "Insira seu email: ";
  return (
    <PrimeiroComponente
      etiqueta={etiqueta}
      numero={1}
    />
  );
}

export default ComponentePai;
