let nomeDoHeroi = "Cigano";
let xpDoHeroi = 8172;

switch (true) {
  case xpDoHeroi >= 1 && xpDoHeroi <= 1000:
    text = "Ferro";
    break;
  case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
    text = "Bronze";
    break;
  case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
    text = "Prata";
    break;
  case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
    text = "Ouro";
    break;
  case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
    text = "Platina";
    break;
  case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
    text = "Ascendente";
    break;
  case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
    text = "Imortal";
    break;
  case xpDoHeroi >= 10001:
    text = "Radiante";
    break;
  default:
    text = "sem Elo";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + text);
