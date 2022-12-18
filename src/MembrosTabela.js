import React from "react";
import "./MembrosTabela.css";

export default function MembrosTabela(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
          </tr>
        </thead>
        <tbody>
          {props.dados.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.matricula}</td>
                <td>{item.curso}</td>
                <td>{item.setor}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.status}</td>
                <td>{item.cargo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
