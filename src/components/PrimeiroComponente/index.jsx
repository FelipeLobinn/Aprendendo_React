import React from "react";
import "../Components.css";

function PrimeiroComponente({ etiqueta, numero }) {
  return (
    <div class="containerPrincipal">
      <form>
        <label>{etiqueta}</label>
        <br />
        <input />
        <br />
        <label>{numero}</label>
      </form>
    </div>
  );
}

export default PrimeiroComponente;
