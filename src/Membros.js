// Trabalho 1 - Desenvolvimento de Sistemas Web - T01 - 2022.1
    
// Alunos:
// Denilson Luiz Amaro Martins - 2020031625
// Pedro Henrique Azevedo do Prado - 2022001536

// Professor:
// Eduardo Ribeiro Felipe

import React, { useEffect, useState } from "react";
import axios from "axios";
import imgEdit from "./images/imgEdit.ico";
import imgDelete from "./images/imgDelete.ico";
import decolar from "./images/decolar.ico";
import pousar from "./images/pousar.ico";
import decolarInverso from "./images/decolarInverso.jpeg";
import pousarInverso from "./images/pousarInverso.jpeg";
import "./Membros.css";

export default function Membros() {
  {/* Definindo variáveis e métodos para estas */}

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

  {/* Inserindo a URL do banco de dados */}

  const url = "https://backend-gnx9kw2l3-denilsonluizm.vercel.app/";

  {/* Puxando dados atuais do banco de dados */}

  useEffect(() => {
    fetch(url + "membros")
      .then((response) => response.json())
      .then((data) => setMembros(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novosDados() {
    setTipo("novo");
  }

  {/* Limpando as caixas de preenchimento de informações de membros */}

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

  {/* Colocando informações nas caixas de preenchimento de informações de membros */}

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

  {/* Função ativada quando é solicitada a EXCLUSÃO de um membro - com confirmações e avisos. */}

  function apagarDados(cod) {
    if(window.confirm('Você tem certeza que deseja apagar o membro?')){
      axios.delete(url + "membros/" + cod).then(() => {
        //atualizar a lista
        setMembros(membros.filter((item) => item.id !== cod));
      });
      alert("Você APAGOU este membro!");
    }else{
      alert("Você NÃO apagou este membro!");
    }
    
  }

  {/* Adicionando informações de um novo membro cadastrado */}

  function atualizaListaComNovoMembro(response) {
    let { id, nome, matricula, curso, setor, email, telefone, status, cargo } = response.data;
    let obj = { id: id, nome: nome, matricula: matricula, curso: curso, setor: setor, email: email, telefone: telefone, status: status, cargo: cargo };
    let members = membros;
    members.push(obj);
    setMembros(members);
    limparDados("");
  }

  {/* Atualizando informações de um membro já cadastrado */}

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

  {/* Função que faz a requisição POST para cadastrar as informações de um novo membro no banco de dados */}

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
        {/* Função que faz a requisição PUT para cadastrar as novas informações de um membro já existente no banco de dados */}
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


  {/* Interface intuitiva de cadastro, atualização e remoção de membros */}
  return (
    <div className="App">
      <br></br>
      <br></br>
      <button type="button" onClick={novosDados}>
        Novo Cadastro
      </button>
      <br></br>
      <br></br>
      {tipo ? (
        <>
          Nome:
          <br></br>
          <input
            type="text"
            name="txtNome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          Matricula:
          <br></br>
          <input
            type="text"
            name="txtMatricula"
            value={matricula}
            onChange={(e) => {
              setMatricula(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          Curso:
          <br></br>
          <select
            value={curso}
            onChange={(e) => {
              setCurso(e.target.value);
            }}>
            <option value=""></option>
            <option value="Engenharia Ambiental">Engenharia Ambiental</option>
            <option value="Engenharia da Computação">Engenharia da Computação</option>
            <option value="Engenharia de Controle e Automação">Engenharia de Controle e Automação</option>
            <option value="Engenharia Elétrica">Engenharia Elétrica</option>
            <option value="Engenharia de Materiais">Engenharia de Materiais</option>
            <option value="Engenharia Mecânica">Engenharia Mecânica</option>
            <option value="Engenharia da Mobilidade">Engenharia da Mobilidade</option>
            <option value="Engenharia de Produção">Engenharia de Produção</option>
            <option value="Engenharia de Saúde e Segurança">Engenharia de Saúde e Segurança</option>
          </select>
          <br></br>
          <br></br>
          Setor:
          <br></br>
          <select
            value={setor}
            onChange={(e) => {
              setSetor(e.target.value);
            }}>
            <option value=""></option>
            <option value="Aerodinâmica">Aerodinâmica</option>
            <option value="Capitania">Capitania</option>
            <option value="Cargas e Aeroelasticidade">Cargas e Aeroelasticidade</option>
            <option value="Desempenho">Desempenho</option>
            <option value="Estabilidade e Controle">Estabilidade e Controle</option>
            <option value="Estruturas">Estruturas</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Gestão de Pessoas">Gestão de Pessoas</option>
            <option value="Gestão de Projetos">Gestão de Projetos</option>
            <option value="Marketing">Marketing</option>
            <option value="Sistemas Elétricos">Sistemas Elétricos</option>
          </select>
          <br></br>
          <br></br>
          Email:
          <br></br>
          <input
            type="text"
            name="txtEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          Telefone:
          <br></br>
          <input
            type="text"
            name="txtTelefone"
            value={telefone}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          Status:
          <br></br>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}>
            <option value=""></option>
            <option value="ATIVO">ATIVO</option>
            <option value="DESLIGADO">DESLIGADO</option>
            
          </select>
          <br></br>
          <br></br>
          Cargo:
          <br></br>
          <select
            value={cargo}
            onChange={(e) => {
              setCargo(e.target.value);
            }}>
            <option value=""></option>
            <option value="Acessor">Acessor</option>
            <option value="Capitão">Capitão</option>
            <option value="Diretor">Diretor</option>
            <option value="Trainee">Trainee</option>
          </select>
          <br></br>
          <br></br>
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
      {/* Função flecha que mostra, de forma cadenciada, os membros já cadastrados no banco de dados */}
      {membros
        ? membros.map((item) => {
          return (
            <div key={item.id}>
              <div className="linha">
                <b>ID:</b> {item.id} <br></br>
                <b>Nome:</b> {item.nome} <br></br>
                <b>Matrícula:</b> {item.matricula} <br></br>
                <b>Curso:</b> {item.curso} <br></br>
                <b>Setor:</b> {item.setor} <br></br>
                <b>E-mail:</b> {item.email} <br></br>
                <b>Telefone:</b> {item.telefone} <br></br>
                <b>Status:</b> {item.status} <br></br>
                <b>Cargo:</b> {item.cargo}{" "} <br></br>
                {/* Botão que dá a possibilidade de alterar informações de membros do banco de dados */}
                <img
                  alt="Editar"
                  src={decolarInverso}
                  id={item.id}
                  height={20}
                  width={20}
                />
                <button onClick={(e) => editarDados(item.id)}>Editar</button>
                <img
                  alt="Editar"
                  src={decolar}
                  id={item.id}
                  height={20}
                  width={20}
                />
                {"  "}
                <br></br>
                {/* Botão que dá a possibilidade de apagar membros do banco de dados*/}
                <img
                  alt="Apagar"
                  src={pousarInverso}
                  id={item.id}
                  height={20}
                  width={20}
                />
                <button alert onClick={(e) => apagarDados(item.id)}>Apagar</button>
                <img
                  alt="Apagar"
                  src={pousar}
                  id={item.id}
                  height={20}
                  width={20}
                />
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          );
        })
        : false
      }
    </div>
  );
}
