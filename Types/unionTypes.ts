let age: number | string | boolean = 21;
age = 23;
age = "32";
age = true;

type Point = {
  x: number,
  y: number
};

type Loc = {
  lat: number,
  long: number
}


let coordinates: Point | Loc = {x: 1, y: 34};
coordinates = {lat: 324.53, long: 3455.34};

function printAge(age: number | string): void {
  console.log("AGE: ", age);
};

printAge("23");
printAge(87);

function calculateTax(price: number | string, tax: number):number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return  price * tax;
};


const nums: number[] = [1,2,3,4];
// const stuff: any[] = [1,2,"3", true, {}]
const stuff: (number | string)[] = [1, 2, 3, "3", "4", "asf"];
const stuff2: number | string[] = [1, 2, 3, "3", "4", "asf"];

const coords: (Point | Loc)[] = [{lat: 324.53, long: 3455.34}, {x:1, y:2}];

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Monday";
today = "fef";
