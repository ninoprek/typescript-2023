function square(num: number) {
  return num * num;
}

// function greet(person: string | number) {
//   if (typeof person == "number") person * 3;

//   return `Hi there, ${person}! How are you?`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {
};

square(3);
// square(true);
// square("#3");
doSomething("ChickenFace", 76,false);

function greet(person: string = "stranger"): string {
  return `Hi there, ${person}! How are you?`;
}

greet();
greet("Janko");

const rando = (num: number) => {
  if(Math.random() < 0.5) return num.toString();
  return num;
};

const colors = ["red", "orange", "blue"];
colors.map(color => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  // return "";
}

function makeError (msg: string): never {
  // return undefined;
  throw new Error(msg);
};