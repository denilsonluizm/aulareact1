// Trabalho 1 - Desenvolvimento de Sistemas Web - T01 - 2022.1
    
// Alunos:
// Denilson Luiz Amaro Martins - 2020031625
// Pedro Henrique Azevedo do Prado - 2022001536

// Professor:
// Eduardo Ribeiro Felipe
import esquematico from "./images/esquematico.jpeg";
import logoCompleto from "./images/logoCompleto.png";
import React from "react";

export default function Sobre() {
  return (
    <div className="App">
      <br></br>
      <br></br>

      {/* Colocando logo na página HOME */}

      <div class="imgHome">
        <img src={logoCompleto} alt="logoCompletoLotsAerodesign" width="700" />
      </div>

      {/* Título e explicação sobre o projeto (mockup) */}

      <h1>
        <b>Sobre este projeto</b>
      </h1>

      <p class="textoApresentacao">
        Este projeto tem como intuito aplicar o uso dos frameworks trabalhados
        em sala de aula na matéria Desenvolvimento de Sistemas Web da
        Universidade Federal de Itajubá, cursada com o professor Eduardo Ribeiro
        Felipe. Neste ponto da matéria, já foram discutidos tópicos sobre HTML,
        CSS, JS, React, banco de dados, link de front com back-end, validação de
        dados, segurança de requisiçoes etc.
        <br></br>
        <br></br>Na aplicação em questão, escolhemos montar um site para a
        L.O.T.S., equipe de competição de aerodesign da UNIFEI Itabira. Esse
        site vem com o intuito em grande parte acadêmico, mas também com intuito
        de, no futuro, poder ser útil para os membros da equipe.
        <br></br>
        <br></br>O banco de dados projetado foi implementado pelo ElephantSQL,
        com métodos de acesso referentes à API Rest. O banco em questão tem
        apenas uma tabela, que é a tabela de "Membros", sendo um banco de dados
        de todas as pessoas da equipe.
        <br></br>
        <br></br>
        Quando falamos de "API Rest", nem todos podem enxergar isso de modo
        trivial. Afinal, o que é uma API? Uma API (interface de programação de
        aplicações, do inglês) é um conjunto de padrões e protocolos que
        integram um usuário a uma aplicação, permitindo que ele acesse e faça
        uso das funcionalidades do software em questão. Uma API funciona como
        uma monte entre o usuário e o sistema requisitado. Dessa forma, facilita
        bastante o acesso e desenvolvimento de aplicações para a Internet.
        <br></br>
        <br></br>
        Agora que sabemos o que é uma API, vamos esclarecer o faz com que ela
        seja do tiop REST. A abreviação REST se refere a Representational State
        Transfer (Transferência de Estado Representacional) e é um tipo de
        arquitetura de software. Uma REST indica que existe um conjunto de
        restrições que devem ser seguidas no desenvolvimento de uma aplicação na
        Internet. Com essas regras, é possível o desenvolvimento de uma
        aplicação com interface bem definida, com rotinas padronizadas e
        facilmente representadas, facilitando a comunicação entre os usuários e
        as máquinas.
      </p>

      {/* Esquemático do funciomanento da aplicação */}

      <div>
        <img src={esquematico} width="1080" alt="membros" />
      </div>
    </div>
  );
}
