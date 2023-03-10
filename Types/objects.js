// const dog = {
//   name: "Elton",
//   breed: "Australian shepard",
//   age: 0.5
// }
var printName = function (name) {
    return "Name: ".concat(name.first, " ").concat(name.last);
};
console.log(printName({ first: "Will", last: "Farrell" }));
// let coordinate: { x: number, y:number } = { x: 34, y:2 }
// function randonCoordinate (): { x: number, y: number } {
//   return {x: Math.random(), y: Math.random()}
// }
console.log(printName({ first: "Mick", last: "Jagger" }));
var singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer);
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 3444;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteus Brothers",
    numStreams: 1234542,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
calculatePayout(mySong);
printSong(mySong);
