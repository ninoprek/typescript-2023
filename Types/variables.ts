let MovieTitle: string = "Amadeus";
MovieTitle = "Arrival";
MovieTitle = 0;
MovieTitle.toUpperCase();


// Type Inference
let x = 34;
x = 99;
x = "not a number";
x = false;

let isFunny = false;
isFunny = true;
isFunny = "not really"

// The any type

// let thing: any = "hello";
// thing = 34;
// thing = false;
// thing();
// thing.toUpperCase();

let thing = "hello";
thing();


const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie in movies) {
  if(movie === "Amadeus") {
    foundMovie = movie;
  }
}

// foundMovie();
// foundMovie = 1;
// foundMovie.sasfasf();