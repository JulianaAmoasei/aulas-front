// Variáveis para manipular os elementos HTML que serão manipulados
var userHello = document.getElementById('hello');
var showResults = document.getElementById('mainContent');
var rightAnswers = document.getElementById('rightAnswers');
var wrongAnswers = document.getElementById('wrongAnswers');

console.log(showResults); 
// Permite ver o elemento vindo do HTML

/* Declaramos as variáveis com os valores digitados pelo usuário */

var userName = prompt("Coloque o seu nome");
userHello.innerHTML = "😊 Bem-vind@ " + userName + " 😊" ; //Mudamos o HTML com o dado enviado pelo usuário

var startGame = parseInt(prompt("Coloque o número correspondente a sua responsa \n Quer iniciar o jogo? \n 1.Sim \n 2.Não"));
console.log(startGame);

// Avaliamos as respostas do usuário

if (startGame == 2) { //CASO 1; usuário não quer jogar
  showResults.innerHTML =  "<h4>Obrigada pela visita, nos vemos na próxima 😉 </h4>"
} else { //Caso usuário quer jogar
  rightAnswers.innerHTML = "<h4> Perguntas corretas </h4>";
  wrongAnswers.innerHTML = "<h4> Perguntas incorretas </h4>";

  alert("Lembre-se de digitar o número correspondente a sua resposta 😉");
  
  /* Começa a partida
  
   PRIMEIRA PREGUNTA */
  var firstQuestion = parseInt(prompt("1. Qual a bebida preferida do Daniel? \n 1.Água \n 2. Suco \n 3.Vinho"));
  if (firstQuestion == 2) { //exemplo de opção com número
    rightAnswers.innerHTML += "1. Qual a bebida preferida do Daniel? <br> <strong>Resposta correta:</strong> 🍹 Suco 🍹";
  } else {
    alert("Ops! Mais sorte na próxima 😉");
    wrongAnswers.innerHTML += "1. Qual a bebida preferida do Daniel? <br> <strong>Resposta correta:</strong> 🍹 Suco 🍹";
  }
  //SEGUNDA PERGUNTA
  var secondQuestion = prompt("2. Qual a cor favorita da Gabi? \n A.Vermelho \n B.Verde \n C.Amarelo");
  if (secondQuestion.toLowerCase() === "a") { //Exemplo de opção de letra
    rightAnswers.innerHTML += "<br> 2. Qual a cor favorita da Gabi? <br> <strong>Resposta correta:</strong> 🔴 Vermelho 🔴";
  } else {
    alert("Ops! Mais sorte na próxima 😉");
    wrongAnswers.innerHTML += "<br> 2. Qual a cor favorita da Gabi? <br> <strong>Resposta correta:</strong> 🔴 Vermelho 🔴";
  }

}
