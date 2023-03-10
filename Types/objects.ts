
// const dog = {
//   name: "Elton",
//   breed: "Australian shepard",
//   age: 0.5
// }

const printName = (name: {first: string, last: string}):string => {
  return `Name: ${name.first} ${name.last}`
};

console.log(printName({first: "Will", last: "Farrell"}));


// let coordinate: { x: number, y:number } = { x: 34, y:2 }
// function randonCoordinate (): { x: number, y: number } {
//   return {x: Math.random(), y: Math.random()}
// }

console.log(printName({first: "Mick", last: "Jagger"}));
const singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer);

// type Point = {
//   x: number,
//   y: number
// };

// function doublePoint (point: Point): Point {
//   return {x: point.x*2, y: point.y*2}
// }

type myNum = number;
let age: myNum = 3444;


type Song = {
  title: string,
  artist: string,
  numStreams: number,
  credits: {
    producer: string,
    writer: string
  }
}

function calculatePayout (song: Song):number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song):void {
  console.log(`${song.title} - ${song.artist}`)
}


const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteus Brothers",
  numStreams: 1234542,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North"
  }
}

calculatePayout(mySong);
printSong(mySong);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = {x: 1, y:3};

type User = {
  readonly id: number;
  username: string
};

const user: User = {id: 2, username: "catgurl"};

console.log(user.id);
user.id = 5;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow"
}

type Cat = {
  numLives: number;
}

type Dog = {
  breed: string;
}

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 3
};