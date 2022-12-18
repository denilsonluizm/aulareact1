import React, { useEffect, useState } from "react";
import axios from "axios";
import imgEdit from "./images/imgEdit.ico";
import imgDelete from "./images/imgDelete.ico";
import "./Membros.css";

export default function Membros() {
  const [membros, setMembros] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");
  const [setor, setSetor] = useState(""); 
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [status, setStatus] = useState("");
  const [cargo, setCargo] = useState("");
  const [tipo, setTipo] = useState("");

  const url = "https://backend-n3w118fyk-denilsonluizm.vercel.app/";

  useEffect(() => {
    fetch(url + "membros")
      .then((response) => response.json())
      .then((data) => setMembros(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novosDados() {
    setTipo("novo");
  }

  function limparDados() {
    setId("");
    setNome("");
    setMatricula("");
    setCurso("");
    setSetor("");
    setEmail("");
    setTelefone("");
    setStatus("");
    setCargo("");
    setTipo("");
  }

  function editarDados(cod) {
    let membro = membros.find((item) => item.id === cod);
    const { id, nome, matricula, curso, setor, email, telefone, status, cargo } = membro;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setMatricula(matricula);
    setCurso(curso);
    setSetor(setor);   
    setEmail(email);
    setTelefone(telefone);
    setStatus(status);
    setCargo(cargo);
  }

  function apagarDados(cod) {
    axios.delete(url + "membros/" + cod).then(() => {
      //atualizar a lista
      setMembros(membros.filter((item) => item.id !== cod));
    });
  }

  function atualizaListaComNovoMembro(response) {
    let { id, nome, matricula, curso, setor, email, telefone, status, cargo } = response.data;
    let obj = { id: id, nome: nome, matricula: matricula, curso: curso, setor: setor, email: email, telefone: telefone, status: status, cargo: cargo };
    let members = membros;
    membros.push(obj);
    setMembros(membros);
    limparDados("");
  }

  function atualizaListaMembroEditado(response) {
    let { id } = response.data;
    const index = membros.findIndex((item) => item.id === id);
    let members = membros;
    members[index].nome = nome;
    members[index].matricula = matricula;
    members[index].curso = curso;
    members[index].setor = setor;
    members[index].email = email;
    members[index].telefone = telefone;
    members[index].status = status;
    members[index].cargo = cargo;
    setMembros(members);
    limparDados("");
  }

  function gravaDados() {
    if (nome !== "" && matricula !== "" && email !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "membros", {
            nome: nome,
            matricula: matricula, 
            curso: curso, 
            setor: setor, 
            email: email, 
            telefone: telefone, 
            status: status, 
            cargo: cargo,
          })
          .then((response) => atualizaListaComNovoMembro(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
        axios
          .put(url + "membros/" + id, {
            id: id,
            nome: nome,
            matricula: matricula, 
            curso: curso, 
            setor: setor, 
            email: email, 
            telefone: telefone, 
            status: status, 
            cargo: cargo,
          })
          .then((response) => atualizaListaMembroEditado(response))
          .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  return (
    <div>
      <button type="button" onClick={novosDados}>
        Novo
      </button>
      {tipo ? (
        <>
          <input
            type="text"
            name="txtNome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtMatricula"
            value={matricula}
            onChange={(e) => {
              setMatricula(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtCurso"
            value={curso}
            onChange={(e) => {
              setCurso(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtSetor"
            value={setor}
            onChange={(e) => {
              setSetor(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtTelefone"
            value={telefone}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtStatus"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtCargo"
            value={cargo}
            onChange={(e) => {
              setCargo(e.target.value);
            }}
          />
          <button type="button" onClick={limparDados}>
            Cancelar
          </button>
          <button type="button" onClick={gravaDados}>
            Gravar
          </button>
        </>
      ) : (
        false
      )}
      {membros
        ? membros.map((item) => {
            return (
              <div key={item.id}>
                <div className="linha">
                  {item.id} - {item.nome} - {item.matricula} - {item.curso} - {item.setor} - {item.email} - {item.telefone} - {item.status} - {item.cargo}{" "}
                  <img
                    alt="Editar"
                    src={imgEdit}
                    id={item.id}
                    height={20}
                    width={20}
                    onClick={(e) => editarDados(item.id)}
                  />
                  <img
                    alt="Apagar"
                    src={imgDelete}
                    id={item.id}
                    height={20}
                    width={20}
                    onClick={(e) => apagarDados(item.id)}
                  />
                </div>
              </div>
            );
          })
        : false}
    </div>
  );
}
