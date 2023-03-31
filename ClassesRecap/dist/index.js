"use strict";
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.readScore();
    }
    readScore() {
        console.log("SCORE: ", this.score);
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be larget than 0");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999;
    }
}
const elton = new Player("elton", "steel", 100);
// elton.first = "Elton";
// elton.score;
// elton.secret();
console.log(elton.fullName);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    ;
    print() {
        console.log(`This is a ${this.brand} jacket!`);
    }
}
const bike = new Bike("blue");
const jacket1 = new Jacket("Prada", "Black");
class Cat {
}
;
// new Cat(); // Not possible
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("JELLOO!!");
    }
}
class FulltimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return 13;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hourNum) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hourNum = hourNum;
    }
    getPay() {
        return this.hourNum * this.hourlyRate;
    }
}
const janko = new FulltimeEmployee("Janko", "Majko", 20005);
const betty = new PartTimeEmployee("Betty", "Schmetty", 23, 50);
