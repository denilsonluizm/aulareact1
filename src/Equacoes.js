// Trabalho 1 - Desenvolvimento de Sistemas Web - T01 - 2022.1
    
// Alunos:
// Denilson Luiz Amaro Martins - 2020031625
// Pedro Henrique Azevedo do Prado - 2022001536

// Professor:
// Eduardo Ribeiro Felipe

function areaAsa(tipo, envergadura, semiEnvergadura, cordaRaiz, cordaPonta) {
    let area;

    if (tipo === 1) {
        area = envergadura * cordaRaiz;
    }
    if (tipo === 2) {
        area = ((cordaRaiz + cordaPonta) * envergadura) / 2;
    }
    if (tipo === 3) {
        area = semiEnvergadura * cordaRaiz + (cordaRaiz + cordaPonta) * ((envergadura - semiEnvergadura) / 2);
    }

    return area;
}

function alongamentoAsa(envergadura, areaAsa) {
    return (envergadura * envergadura) / areaAsa;
}

function afilamentoAsa(cordaRaiz, cordaPonta, tipo) {
    let afilamento;

    if (tipo == 1) {
        afilamento = cordaRaiz / cordaRaiz;
    }
    else {
        afilamento = cordaPonta / cordaRaiz;
    }

    return afilamento;
}

function cordaMediaAsa(cordaRaiz, afilamento, tipo) {
    let cordaMedia;

    if (tipo == 1) {
        cordaMedia = cordaRaiz;
    }
    else {
        cordaMedia = (2 / 3) * cordaRaiz * ((1 + afilamento + (afilamento * afilamento)) / (1 + afilamento));
    }

    return cordaMedia;
}

function yMedioAsa(envergadura, afilamento) {
    return (envergadura / 6) * ((1 + (2 * afilamento)) / (1 + afilamento));
}

function numeroReynolds(velocidade, cordaMedia, viscoCin) {
    return (velocidade * cordaMedia) / viscoCin;
}

function constanteProporcionalidade(delta, alongamento) {
    return 1 / (Math.PI * 0.75 * (1 / (1 + delta)) * alongamento);
}

function coefAtritoEquivalenteLam(reynolds) {
    return 1.328 / (Math.sqrt(reynolds));
}

function coefAtritoEquivalenteTurb(reynolds) {
    return 0.42 / ((Math.log(0.056 * reynolds)) * (Math.log(0.056 * reynolds)));
}

function coefAngularPerfil(alpha1, cl1, alpha2, cl2) {
    return (cl2 - cl1) / (alpha2 - alpha1);
}

function coefAngularAsa(a0, alongamento, delta) {
    let a;

    if (alongamento > 4) {
        a = a0 / (1 + ((a0 * 57.2958) / (Math.PI * alongamento * (1 / (1 + delta)))))
    }
    else {
        a = a0 / Math.sqrt(1 + Math.pow((a0 * 57.2958) / (Math.PI * alongamento), 2) + ((a0 * 57.2958) / (Math.PI * alongamento)))
    }

    return a;
}

function CLMaxAsa(a0, a, clMax) {
    return clMax * (1 - (1 - (a / a0)));
}

function coefArrastoParasita(coefAtritoEquivalente, areaAsa, areaMolhada) {
    return coefAtritoEquivalente * (areaMolhada / areaAsa);
}

function coefSustentacaoProjeto(coefArrastoParasita, constanteProporcionalidade) {
    return Math.sqrt(coefArrastoParasita / constanteProporcionalidade);
}

function coefArrastoProjeto(coefArrastoParasita, constanteProporcionalidade, coefSustentacaoProjeto) {
    return coefArrastoParasita + constanteProporcionalidade * Math.pow(coefSustentacaoProjeto, 2);
}

function eficienciaMaxProjeto(coefSustentacaoProjeto, coefArrastoProjeto) {
    return coefSustentacaoProjeto / coefArrastoProjeto;
}

function velocidadeEstol(peso, densidadeAr, areaAsa, CLMaxAsa) {
    return Math.sqrt((2 * peso) / (densidadeAr * areaAsa * CLMaxAsa))
}

function sustentaçãoPontoAtuante(nMax, peso) {
    return nMax * peso;
}

export function calcReynolds() {
    let peso, areaMolhada, velocidade, densidade, viscoCin, tipo, envergadura, semiEnvergadura,
        cordaRaiz, cordaPonta, cordaMedia, afilamento, reynolds;

    // Dados do Avião a
    peso = parseFloat(document.getElementById("peso").value);
    areaMolhada = parseFloat(document.getElementById("areaMolhada").value);

    // Características do Fluido
    velocidade = parseFloat(document.getElementById("velocidade").value);
    densidade = parseFloat(document.getElementById("densidade").value);
    viscoCin = parseFloat(document.getElementById("viscoCin").value);

    // Dados da Asa
    tipo = parseInt(document.getElementById("tipoAsa").value);
    envergadura = parseFloat(document.getElementById("envergadura").value);
    semiEnvergadura = parseFloat(document.getElementById("semiEnvergadura").value);
    cordaRaiz = parseFloat(document.getElementById("cordaRaiz").value);
    cordaPonta = parseFloat(document.getElementById("cordaPonta").value);

    // Cálculo
    afilamento = afilamentoAsa(cordaRaiz, cordaPonta, tipo);
    cordaMedia = cordaMediaAsa(cordaRaiz, afilamento, tipo);

    // Mostrar no site
    reynolds = numeroReynolds(velocidade, cordaMedia, viscoCin);
    document.getElementById("calcReynolds").innerHTML = "Reynolds: " + reynolds.toFixed(0);

}

export function calculo1() {

    let tipo, envergadura, semiEnvergadura, cordaRaiz, cordaPonta,
        area, alongamento, afilamento, cordaMedia, yMed, reynolds, velocidade, viscoCin;

    // Características do Fluido
    velocidade = parseFloat(document.getElementById("velocidade").value);
    viscoCin = parseFloat(document.getElementById("viscoCin").value);

    // Dados da Asa
    tipo = parseInt(document.getElementById("tipoAsa").value);
    envergadura = parseFloat(document.getElementById("envergadura").value);
    semiEnvergadura = parseFloat(document.getElementById("semiEnvergadura").value);
    cordaRaiz = parseFloat(document.getElementById("cordaRaiz").value);
    cordaPonta = parseFloat(document.getElementById("cordaPonta").value);

    // Cálculo
    area = areaAsa(tipo, envergadura, semiEnvergadura, cordaRaiz, cordaPonta);
    alongamento = alongamentoAsa(envergadura, area);
    afilamento = afilamentoAsa(cordaRaiz, cordaPonta, tipo);
    cordaMedia = cordaMediaAsa(cordaRaiz, afilamento, tipo);
    yMed = yMedioAsa(envergadura, afilamento);
    reynolds = numeroReynolds(velocidade, cordaMedia, viscoCin);

    // Mostrar no site
    document.getElementById("Alongamento").innerText = "Informe Delta para Alongamento = " + alongamento.toPrecision(4) + " e";
    document.getElementById("Afilamento").innerText = "Afilamento = " + afilamento;
}

export function calculo2() {
    let tipo, envergadura, semiEnvergadura, cordaRaiz, cordaPonta, delta, peso, densidadeAr, clProjeto, cdProjeto,
        clMax, clZero, clAlphaZero, alpha1, cl1, alpha2, cl2, constProp, CLMax, coefAtrito, areaMolhada, efProjeto,
        area, alongamento, afilamento, cordaMedia, yMed, reynolds, a0, aAsa, velStol, coefParasita, velocidade, viscoCin;

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");
    const td9 = document.createElement("td");
    const td10 = document.createElement("td");
    const td11 = document.createElement("td");
    const td12 = document.createElement("td");
    const td13 = document.createElement("td");
    const td14 = document.createElement("td");
    const td15 = document.createElement("td");
    const tbody = document.querySelector("tbody");

    // Dados do Avião
    peso = parseFloat(document.getElementById("peso").value);
    areaMolhada = parseFloat(document.getElementById("areaMolhada").value);

    // Características do Fluido
    velocidade = parseFloat(document.getElementById("velocidade").value);
    densidadeAr = parseFloat(document.getElementById("densidade").value);
    viscoCin = parseFloat(document.getElementById("viscoCin").value);

    // Dados da Asa
    tipo = parseInt(document.getElementById("tipoAsa").value);
    envergadura = parseFloat(document.getElementById("envergadura").value);
    semiEnvergadura = parseFloat(document.getElementById("semiEnvergadura").value);
    cordaRaiz = parseFloat(document.getElementById("cordaRaiz").value);
    cordaPonta = parseFloat(document.getElementById("cordaPonta").value);

    // Dados do Perfil Aerodinâmico
    clMax = parseFloat(document.getElementById("clMax").value);
    clZero = parseFloat(document.getElementById("clZero").value);
    clAlphaZero = parseFloat(document.getElementById("clAlphaZero").value);
    alpha1 = parseFloat(document.getElementById("alpha1").value);
    alpha2 = parseFloat(document.getElementById("alpha2").value);
    cl1 = parseFloat(document.getElementById("cl1").value);
    cl2 = parseFloat(document.getElementById("cl2").value);
    delta = parseFloat(document.getElementById("delta").value);

    // Cálculo
    area = areaAsa(tipo, envergadura, semiEnvergadura, cordaRaiz, cordaPonta);
    alongamento = alongamentoAsa(envergadura, area);
    afilamento = afilamentoAsa(cordaRaiz, cordaPonta, tipo);
    cordaMedia = cordaMediaAsa(cordaRaiz, afilamento, tipo);
    yMed = yMedioAsa(envergadura, afilamento);
    reynolds = numeroReynolds(velocidade, cordaMedia, viscoCin);
    a0 = coefAngularPerfil(alpha1, cl1, alpha2, cl2);
    aAsa = coefAngularAsa(a0, alongamento, delta);
    constProp = constanteProporcionalidade(delta, alongamento);
    CLMax = CLMaxAsa(a0, aAsa, clMax);
    velStol = velocidadeEstol(peso, densidadeAr, area, CLMax);
    coefAtrito = coefAtritoEquivalenteTurb(reynolds);
    coefParasita = coefArrastoParasita(coefAtrito, area, areaMolhada);
    clProjeto = coefSustentacaoProjeto(coefParasita, constProp);
    cdProjeto = coefArrastoProjeto(coefParasita, constProp, clProjeto);
    efProjeto = eficienciaMaxProjeto(clProjeto, cdProjeto);

    // Atribuindo valores que serão adicionados dinamicamente na tabela
    td.innerText = area.toFixed(3);
    td2.innerText = alongamento.toFixed(3);
    td3.innerText = afilamento.toFixed(3);
    td4.innerText = cordaMedia.toFixed(3);
    td5.innerText = yMed.toFixed(3);
    td6.innerText = a0.toFixed(3);
    td7.innerText = aAsa.toFixed(3);
    td8.innerText = constProp.toFixed(3);
    td9.innerText = CLMax.toFixed(3);
    td10.innerText = velStol.toFixed(3);
    td11.innerText = coefAtrito.toFixed(3);
    td12.innerText = coefParasita.toFixed(3);
    td13.innerText = clProjeto.toFixed(3);
    td14.innerText = cdProjeto.toFixed(3);
    td15.innerText = efProjeto.toFixed(3);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    tr.appendChild(td10);
    tr.appendChild(td11);
    tr.appendChild(td12);
    tr.appendChild(td13);
    tr.appendChild(td14);
    tr.appendChild(td15);
    tbody.appendChild(tr);
}
