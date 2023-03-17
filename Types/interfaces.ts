// type Point = {
//   x: number;
//   y: number;
// };

// const point: Point = {x:1, y:2};

interface Point {
  x: number;
  y: number;
};

const pt: Point = {x: 1, y: 2};

interface Person {
  readonly id: number,
  first: string;
  last: string;
  nickname?: string,
  sayHi: (name: string) => string
};

const thomas: Person = {
  id: 34353,
  first: "Thomas",
  last: "Hardy",
  nickname: "Thom",
  sayHi: (name: string) => {
    return `Hello ${name}!`;
  },
};

thomas.first = "Nino";
// thomas.id = 434;

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number):number;
}

let shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount: (discount: number): number => {
    return this.price * (100 - discount);
  }
}

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string,
  bark(): string
}

const elton: Dog = {
  name: "elton",
  age: 5,
  breed: "doggy dog",
  bark: () => {
    return "miau miau"
  }
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb detector" | "guide dog";
}

let chewy: ServiceDog = {
  name: "Chewy",
  age: 2,
  breed: "Chewawa",
  bark() { return "Yo Yo" },
  job: "drug sniffer"
}

interface Person {
  name: string
}

interface Employee {
  readonly id: number,
  email: string
}

interface Engineer extends Person, Employee {
  level: string,
  language: string[]
}

const pierre: Engineer = {
  id: 1,
  first: "Perica",
  last: "Francuz",
  name: "Pierre",
  email: "pierre@gmail.com",
  level: "mid",
  language: ["javascript", "typescript"],
  sayHi: (name: string) => {
    return `${this.first} says hi to ${name}`;
  }
}