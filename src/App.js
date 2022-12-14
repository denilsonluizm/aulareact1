// Trabalho 1 - Desenvolvimento de Sistemas Web - T01 - 2022.1
    
// Alunos:
// Denilson Luiz Amaro Martins - 2020031625
// Pedro Henrique Azevedo do Prado - 2022001536

// Professor:
// Eduardo Ribeiro Felipe

import membros from './images/membros.png';
import logoCompleto from './images/logoCompleto.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <br></br>
      <br></br>

      {/* Colocando logo na página HOME */}

      <div class="imgHome">
        <img src={logoCompleto} alt="logoCompletoLotsAerodesign" width="700" />
      </div>

      {/* Título e texto de apresentação */}

      <h1><b>Quem Somos?</b></h1>

      <p class="textoApresentacao">
        Aequipe L.O.T.S. Aerodesign, tem como propósito representar a Universidade Federal de Itajubá – Unifei
        Campus Avançado de Itabira em Competições organizadas e promovidas pela SAE Brasil. Constituída por acadêmicos
        de engenharia, e através das disponibilizações de recursos e espaço cedidos pela instituição, a equipe
        conseguiu se consolidar.
        <br></br>
        <br></br>
        A L.O.T.S obteve os mencionados recursos devido ao seu objetivo de aplicar os conceitos aprendidos
        durante o curso de engenharia como a física clássica e a administração, na elaboração de um projeto e na
        construção de uma aeronave rádio controlada, a fim de que essa possa participar, anualmente, na competição sediada em São
        José dos Campos (SP).
        <br></br>
        <br></br>
        A competição ocorre em duas etapas: a primeira é a análise do projeto, realizada pelos profissionais da SAE
        Brasil que possuem conhecimento na área; a segunda são as competições de voo, as quais visam conferir se
        a equipe obteve êxito nos requerimentos e desafios prescritos no regulamento.
        <br></br>
        <br></br>
        Por meio da competição, a L.O.T.S contribui diretamente com o avanço técnico e científico dos membros da
        equipe, visto que os estudantes envolvidos sempre buscam se inovar para conseguirem cumprir os desafios
        propostos, os quais se baseiam em obstáculos reais da indústria aeronáutica.
      </p>

      {/* Imagem de alguns dos membros */}

      <div>
        <img src={membros} width="700" alt="membros" />
      </div>
    </div>
  );
}

export default App;
