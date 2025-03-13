class hero {
  constructor(heroName, heroAge, typeHero) {
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.typeHero = typeHero;
  }

  attack() {
    if (this.typeHero === "Mago") {
      return "magia";
    } else if (this.typeHero === "Guerreiro") {
      return "espada";
    } else if (this.typeHero === "Monge") {
      return "artes marciais";
    } else this.typeHero === "Ninja";
    return "shuriken";
  }

  message() {
    console.log(`O ${this.typeHero} atacou usando ${this.attack()}`);
  }
}

let newHero = new hero("Lucas", 32, "Mago");

newHero.message();
