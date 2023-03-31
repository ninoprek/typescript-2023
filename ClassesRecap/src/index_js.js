class Player {
  static description = "This is a player in our game."
  #score = 0;
  numLives = 10;
  constructor(first, last){
    console.log("IN CONSTRUCTOR");
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  get fullName() {
    return `${this.first} ${this.last}`
  }
  set fullName(newName) {
    const name = newName.split(" ");
    if (name.length > 1) {
      this.first = name[0];
      this.last = name[1];
    } else {
      throw new Error("Full name needs to have first and the last name");
    }
  }
  // getScore() {
  //   return this.#score;
  // }
  get score() {
    return this.#score;
  }
  // updateScore(newScore) {
  //   this.#score = newScore;
  // }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive")
    }
    this.#score = newScore;
  }
  taunt() {
    console.log("BOOYAAAA - ",this.first);
  }
  loseLife() {
    if (this.numLives > 0) this.numLives -= 1;
  }
  #secret() {
    console.log("SECRET!!!");
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

// const player1 = new Player("blue", "steele");
// // player1.taunt();
// // console.log(player1);
// // const player2 = new Player("charlie", "brown");
// // player2.taunt();

// console.log(player1);
// player1.loseLife();
// // console.log(player1.getScore());
// console.log(player1.score);
// // player1.updateScore(34);
// player1.score = 54;
// // console.log(player1.getScore());
// console.log(player1.score);
// console.log(player1);
// // player1.secret();
// console.log(player1.fullName);
// player1.fullName = "CHUBAKA Kabaja";
// console.log(player1.fullName);

const adminPlayer = new AdminPlayer("jojo", "bengi", ["delete", 'restore world']);