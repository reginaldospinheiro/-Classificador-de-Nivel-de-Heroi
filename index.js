const prompt = require('prompt-sync')();

let nomeDoHeroi = prompt("Entre com o nome do seu Herói: ")
var xp = 0
let classe = "Papelão"


console.log("Bem vindo Herói " + nomeDoHeroi + " ao mundo mágico NoobLand!")
console.log("Você pode realizar batalhas e subir de nível")
console.log("Se não desejar, pode não fazer nenhuma batalha")
console.log("O seu nível atual é: " + xp)
console.log("Sau Classe inicial é: " + classe)

let batalha = prompt("\n Defina o numero de batalhas que deseja realizar e subir o seu nível: \n")
for (let i = 0; i < batalha; i++){
  console.log("\n Você fez 1 batalha, ganhou 100 XP \n")
}

xp = batalha * 100


if (xp >= 100 && xp <= 1000) {
  classe = "Ferro"
}

else if (xp >= 1001 && xp <= 2000){
  classe = "Bronze"
}

else if (xp >= 2001 && xp <= 5000){
  classe = "Prata"
}

else if (xp >= 5001 && xp <= 7000){
  classe = "Ouro"
}

else if (xp >= 7001 && xp <= 8000){
  classe = "Platina"
}

else if (xp >= 8001 && xp <= 9000){
  classe = "Ascendente"
}

else if (xp >= 9001 && xp <=10000){
  classe = "Imortal"
}

else (xp >= 10001){
  classe = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi + "\n" + "Fez o toal de " + batalha + " batalhas" + "\n" +  "Está com o total  " + xp + " de XP" + "\n" + "Está na Classe de Herói "+ classe + "\n")