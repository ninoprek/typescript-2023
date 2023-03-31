// class Player {
//   // public can be removed
//   public readonly first: string;
//   public readonly last: string;
//   // score = 0;  //this works also
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secret();
//   }

//   private secret(): void {
//     console.log("SECRET METHOD!");
//   }
// }

class Player {
  // private score: number = 0;

  constructor(
    public first: string,
    public last: string,
    protected _score: number
    ) {
      this.readScore();
  }

  private readScore(): void {
    console.log("SCORE: ", this.score);
  }

  get fullName(): string {
    return `${this.first} ${this.last}`
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score must be larget than 0");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

const elton = new Player("elton", "steel", 100);
// elton.first = "Elton";
// elton.score;
// elton.secret();
console.log(elton.fullName);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(
    public color: string
  ){}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {};
  public print () {
    console.log(`This is a ${this.brand} jacket!`);

  }
}

const bike = new Bike("blue");
const jacket1 = new Jacket("Prada", "Black");

abstract class Cat {};

// new Cat(); // Not possible

abstract class Employee {
  constructor(public first: string, public last: string){}

  abstract getPay():number ;
  greet (){
    console.log("JELLOO!!");
  }
}

class FulltimeEmployee extends Employee {
  constructor(public first: string, public last: string, private salary: number){
    super(first, last);
  }
  getPay(): number {
      return 13;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hourlyRate: number,
    private hourNum: number
    ){
      super(first, last);
    }
  getPay(): number {
      return this.hourNum * this.hourlyRate;
  }
}

const janko = new FulltimeEmployee("Janko", "Majko", 20005);
const betty = new PartTimeEmployee("Betty", "Schmetty", 23, 50)





