import React, { useState } from "react";
import "../Components.css";

function FormularioDinamico() {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState(false);
  var conteudoButton = "";
  if (button) {
    conteudoButton = "Esconder Lista";
  } else {
    conteudoButton = "Mostar Lista";
  }
  function lista() {
    setShow(!show);
    setButton(!button);
  }

  const users = [
    {
      nome: "Felipe",
      sobrenome: "Sinnemann",
      email: "felipe@gmail.com",
    },
    {
      nome: "Willian",
      sobrenome: "Oliveira",
      email: "will@gmail.com",
    },
  ];

  return (
    <div>
      {show &&
        users.map((dados) => {
          return (
            <div class="containerPrincipal">
              <p>Nome: {dados.nome} </p>
              <p>Sobrenome: {dados.sobrenome}</p>
              <p>Email: {dados.email}</p>
            </div>
          );
        })}
      <button onClick={lista}>{conteudoButton}</button>
    </div>
  );
}

export default FormularioDinamico;
