alert('Bem Vindo ao jogo do numero secreto')
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Digite um número entre 1 a 10');

if (chute == numeroSecreto) {
    alert("Isso ai! Voce descobriu o número secreto" + numeroSecreto + " com " + tentativas + "tentativas!");
}else {
    if (chute numeroSecreto) {
        alert("O numero secreto é menor que " + chute + ". Tente novamente!");
    } else {
        alert("O número secreto é maior que " + chute + ". Tente novamente!");
    }
    tentativas++;
}
}
let palavrasTentativas = tentativas > 1? " tentativa " : "tentativa";
alert("isso ai! voce acertou o numero secreto" + numeroSecreto + " com " + tentativas + palavrasTentativas)
//if (tentativas > 1 ) (
//alert(" isso ai! voce acertou o numero secreto" + numerosecreto + " com " + tentativas + tentativas)
