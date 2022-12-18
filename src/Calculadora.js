import fatorArrastoInduzido from './images/fatorArrastoInduzido.png'
// import './App.css';
import { calcReynolds, calculo1, calculo2 } from './codigo';

function Calculadora() {
    return (
        <div className="App">
            <h1><b>Calculadora Aerodinâmica</b></h1>

            <br></br>

            <h2>1ª Etapa - Dados Práticos e Cálculo de Reynolds</h2> <br></br>

            <h3>Dados do Avião</h3>
            <div class="inputs">
                <p>
                    Peso (N)<br></br>
                    <input id="peso" type="number" size="10" /> <br></br>
                    Área Molhada (m<sup>2</sup>)<br></br>
                    <input id="areaMolhada" type="number" size="10" /> <br></br>
                </p>
            </div> <br></br>

            <h3>Características do Fluido</h3>
            <div class="inputs">
                <p>
                    Velocidade (m/s)<br></br>
                    <input id="velocidade" type="number" size="10" /> <br></br>
                    Densidade (kg/m<sup>3</sup>) <br></br>
                    <input id="densidade" type="number" size="10" /> <br></br>
                    Viscosidade cinemática (m<sup>2</sup>/s) <br></br>
                    <input id="viscoCin" type="number" size="10" /> <br></br>
                </p>
            </div> <br></br>

            <h3>Dados da Asa</h3> <br></br>
            <div class="inputs">
                <p>
                    Tipo <br></br>
                    <select name="tipoAsas" id="tipoAsa">
                        <option value="1">Retangular</option>
                        <option value="2">Trapezoidal</option>
                        <option value="3">Mista</option>
                    </select>
                    <br></br>
                    Envergadura (m) <br></br>
                    <input id="envergadura" type="number" size="10" /> <br></br>
                    Semi envergadura (m)<br></br>
                    <input id="semiEnvergadura" type="number" size="10" /> <br></br>
                    Corda na raiz (m)<br></br>
                    <input id="cordaRaiz" type="number" size="10" /> <br></br>
                    Corda na ponta (m)<br></br>
                    <input id="cordaPonta" type="number" size="10" /> <br></br>
                </p>
            </div> <br></br>

            <div class="text-center"><button class="button button1" type="button" onClick={calcReynolds}><b>CALCULAR
                REYNOLDS</b></button></div>
            <b><p class="outputs" id="calcReynolds">
            </p> </b><br></br>

            <h2>2ª Etapa - Cálculo de Alongamento e Afilamento</h2> <br></br>

            <h3>Dados do Perfil Aerodinâmico</h3>
            <div class="inputs">
                <p>
                    cl<sub>max</sub> <br></br>
                    <input id="clMax" type="number" size="10" /> <br></br>
                    &alpha;<sub>cl = 0</sub>  <br></br>
                    <input id="clZero" type="number" size="10" /> <br></br>
                    cl<sub> &alpha; = 0</sub> <br></br>
                    <input id="clAlphaZero" type="number" size="10" /> <br></br>
                    &alpha; <sub>1</sub> <br></br>
                    <input id="alpha1" type="number" size="10" /> <br></br>
                    cl <sub>1</sub> <br></br>
                    <input id="cl1" type="number" size="10" /> <br></br>
                    &alpha; <sub>2</sub> <br></br>
                    <input id="alpha2" type="number" size="10" /> <br></br>
                    cl <sub>1</sub> <br></br>
                    <input id="cl2" type="number" size="10" /> <br></br>
                </p>
            </div> <br></br>

            <div class="text-center"><button class="button button2" type="button" onClick={calculo1}><b>CALCULAR ALONGAMENTO E
                AFILAMENTO</b></button></div> <br></br>
            <b><p class="outputs" id="Alongamento"></p>
                <p class="outputs" id="Afilamento"></p></b> <br></br>

            <h2>3ª Etapa - Cálculo dos Resultados Finais</h2> <br></br>

            <div class="imgHome">
                <img src={fatorArrastoInduzido} width="700" alt='fator' />
            </div>

            <div class="inputs"> Fator de arrasto induzido &delta; <br></br>
                <input id="delta" type="number" size="10" />
            </div> <br></br><br></br>

            <div class="text-center">
                <button class="button button3" type="button" onClick={calculo2}><b>CALCULAR RESULTADOS</b></button>
            </div> <br></br>


            <p class="outputs" id="areaAsa"></p>
            <p class="outputs" id="alongamento"></p>
            <p class="outputs" id="afilamento"></p>
            <p class="outputs" id="cordaMedia"></p>
            <p class="outputs" id="yMedio"></p>
            <p class="outputs" id="a0"></p>
            <p class="outputs" id="aAsa"></p>
            <p class="outputs" id="constProp"></p>
            <p class="outputs" id="CLMax"></p>
            <p class="outputs" id="velStol"></p>
            <p class="outputs" id="coefAtrito"></p>
            <p class="outputs" id="coefParasita"></p>
            <p class="outputs" id="clProjeto"></p>
            <p class="outputs" id="cdProjeto"></p>
            <p class="outputs" id="efProjeto"></p>

            <div id="tabela3">
                <table id="tabela">
                    <thead>
                        <tr>
                            <th>Área da Asa (m<sup>2</sup>)</th>
                            <th>Alongamento</th>
                            <th>Afilamento</th>
                            <th>Corda Média (m)</th>
                            <th>Y médio (m)</th>
                            <th>Coeficiente angular do perfil <br></br>(grau<sup>-1</sup>)</th>
                            <th>Coeficiente angular da asa <br></br>(grau<sup>-1</sup>)</th>
                            <th>Constante de proporcionalidade</th>
                            <th>Constante de sustentação máximo da asa</th>
                            <th>Velocidade de estol (m/s) </th>
                            <th>Coeficiente de atrito equivalente</th>
                            <th>Coeficiente de arrasto parasita</th>
                            <th>Coeficiente de sustentação do projeto</th>
                            <th>Coeficiente de arrasto do projeto</th>
                            <th>Eficiência máxima do projeto</th>
                        </tr>
                    </thead>
                    <tbody id="linhas">
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calculadora;
