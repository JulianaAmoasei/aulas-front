var nome;
var resposta1;
var resposta2;
var resposta3;

function pegarRespostas() {
nome = document.forms["form"]["nome"].value;
resposta1 = document.forms["form"]["resposta1"].value;
resposta2 = document.forms["form"]["resposta2"].value;
resposta3 = document.forms["form"]["resposta3"].value;

document.getElementById("form").reset();
document.getElementById("resultadosCertos").innerHTML = "";
document.getElementById("resultadosErrados").innerHTML = "";

document.getElementById("promptNome").innerHTML = "Bem-vinda, " + nome + "!";

if (resposta1 == "patolino") {
    var acertou1 = document.getElementById("resultadosCertos");
    acertou1.innerHTML += "<span>PATOLINO, resposta correta!</span>";
} else {
    var errou1 = document.getElementById("resultadosErrados");
    errou1.innerHTML += "<span>Errado. O correto é PATOLINO.</span>";
}

if (resposta2 == "chiquinha") {
    var acertou2 = document.getElementById("resultadosCertos");
    acertou2.innerHTML += "<span>CHIQUINHA, resposta correta!</span>";
} else {
    var errou2 = document.getElementById("resultadosErrados");
    errou2.innerHTML += "<span>Errado. O correto é CHIQUINHA.</span>";
}

if (resposta3 == "azul") {
    var acertou3 = document.getElementById("resultadosCertos");
    acertou3.innerHTML += "<span>AZUL, resposta correta!</span>";
} else {
    var errou3 = document.getElementById("resultadosErrados");
    errou3.innerHTML += "<span>Errado. O correto é AZUL.</span>";
}
}

