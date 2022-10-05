import React from "react";

function PrimeiroComponente({ etiqueta, numero }) {
  return (
    <div>
      <form>
        <p>Hello</p>
        <label>{etiqueta}</label>
        <br />
        <input />
        <label>{numero}</label>
      </form>
    </div>
  );
}

export default PrimeiroComponente;
