let victory = 87;
let defeat = 10;
let average = rank(victory, defeat);
let nivel = "";

function rank(numVictory, numDefeat) {
  let elo = numVictory - numDefeat;
  return elo;
}

switch (true) {
  case average != 0 && average <= 10:
    nivel = "Ferro";
    break;
  case average >= 11 && average <= 20:
    nivel = "Bronze";
    break;
  case average >= 21 && average <= 50:
    nivel = "Prata";
    break;
  case average >= 51 && average <= 80:
    nivel = "Ouro";
    break;
  case average >= 81 && average <= 90:
    nivel = "Diamante";
    break;
  case average >= 91 && average <= 100:
    nivel = "Lendário";
    break;
  case average >= 101:
    nivel = "Imortal";
    break;
  default:
    nivel = "Sem elo";
}

console.log(
  `O Herói tem de saldo de vitórias ${average} e está no nível de ${nivel}`
);
