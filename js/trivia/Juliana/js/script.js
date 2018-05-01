
var nome = prompt("digite seu nome");

if (nome !== null) {

    document.getElementById("promptNome").innerHTML = 
        "Bem-vinda, " + nome + "!";
        alert("Bem-vinda, " + nome + "!");
} else {
    alert("ok, anônima!")
}

var iniciaJogo = prompt("Gostaria de jogar? (escreva SIM ou NÃO");

if (iniciaJogo == "não") {
    var mensagemNao = document.getElementById("tituloResultados");
    tituloResultados.innerHTML = "Que pena. Até a próxima!";
    document.getElementById("resultadosCertos") = null;
    document.getElementById("resultadosErrados") = null;

} else {
    var pergunta1 = prompt("nome do pato inimigo do pernalonga");
    var pergunta2 = prompt("nome da amiga do Chaves");
    var pergunta3 = prompt("cor do cabelo da Ju");
    tituloResultados.innerHTML = "RESULTADOS:";
}

if (pergunta1 == "patolino") {
    var acertou1 = document.getElementById("resultadosCertos");
    acertou1.innerHTML += "<p>PATOLINO, resposta correta!</p>";
} else {
    var errou1 = document.getElementById("resultadosErrados");
    errou1.innerHTML += "<p>Errado. O correto é PATOLINO.</p>";
}

if (pergunta2 == "chiquinha") {
    var acertou2 = document.getElementById("resultadosCertos");
    acertou2.innerHTML += "<p>CHIQUINHA, resposta correta!</p>";
} else {
    var errou2 = document.getElementById("resultadosErrados");
    errou2.innerHTML += "<p>Errado. O correto é CHIQUINHA.</p>";
}

if (pergunta3 == "azul") {
    var acertou3 = document.getElementById("resultadosCertos");
    acertou3.innerHTML += "<p>AZUL, resposta correta!</p>";
} else {
    var errou3 = document.getElementById("resultadosErrados");
    errou3.innerHTML += "<p>Errado. O correto é AZUL.</p>";
}

