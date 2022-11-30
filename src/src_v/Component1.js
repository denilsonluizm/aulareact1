import React, { useEffect, useState } from "react";
import UsuariosTabela from "./UsuariosTabela";

export default function Component1() {
  const [contador, setContador] = useState(0);
  const [dados, setDados] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp));
  }, [url]);

  function incContador() {
    setContador(contador + 1);
  }

  const decrement = function decContador() {
    setContador((contador) => contador - 1);
  };

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  return (
    <>
      <div>Componente de Exemplo na aula Dev</div>
      <p>Paragrafo de teste.</p>
      <button onClick={incContador}> Incrementar </button> <br></br>
      <button onClick={decrement}> Dencrementar </button>
      <p>{contador}</p>

      {dados.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name} -- </span>
            <span>{item.email} </span>
          </div>
        );
      })}

      <UsuariosTabela dados={dados} />

    </>
  );
}
