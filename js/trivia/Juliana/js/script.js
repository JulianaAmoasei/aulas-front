
var nome = prompt("digite seu nome");

if (nome != null) {

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
    acertou1.innerHTML += "<span>PATOLINO, resposta correta!</span>";
} else {
    var errou1 = document.getElementById("resultadosErrados");
    errou1.innerHTML += "<span>Errado. O correto é PATOLINO.</span>";
}

if (pergunta2 == "chiquinha") {
    var acertou2 = document.getElementById("resultadosCertos");
    acertou2.innerHTML += "<span>CHIQUINHA, resposta correta!</span>";
} else {
    var errou2 = document.getElementById("resultadosErrados");
    errou2.innerHTML += "<span>Errado. O correto é CHIQUINHA.</span>";
}

if (pergunta3 == "azul") {
    var acertou3 = document.getElementById("resultadosCertos");
    acertou3.innerHTML += "<span>AZUL, resposta correta!</span>";
} else {
    var errou3 = document.getElementById("resultadosErrados");
    errou3.innerHTML += "<span>Errado. O correto é AZUL.</span>";
}

