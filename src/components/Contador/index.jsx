import React, { useState } from "react";
import ContadorEffect from "../ComponenteEffect";

function Contador() {
  const [count, setCount] = useState(0);

  function aumentarCount() {
    setCount(count + 1);
  }

  return (
    <div>
      {
        <div>
          <ContadorEffect
            contador={count}
            resetarCount={setCount}
          />
          <p>Contagem atual: {count} </p>
          <button onClick={aumentarCount}>Aumentar</button>
          <button onClick={() => setCount(count - 1)}>Diminuir</button>
        </div>
      }
    </div>
  );
}

export default Contador;
