import React, { useState, useEffect } from "react";

function ContadorEffect({ contador, resetarCount }) {
  const [countEffect, setCountEffect] = useState(0);

  useEffect(() => {
    setCountEffect(countEffect + 1);
    //resetarCount("aaa");
  }, [contador]);

  return (
    <div>
      <h2>useEffect ativado {countEffect} vezes</h2>
    </div>
  );
}

export default ContadorEffect;
