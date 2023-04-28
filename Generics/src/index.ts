// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// inputEl.value = "LIK";
// const btn = document.querySelector<HTMLButtonElement>(".btn")!;


// Not convinient
function numberIdentity(item: number) {
  return item;
}
function stringIdentity(item: string) {
  return item;
}
function booleanIdentity(item: boolean) {
  return item;
}

// This is not good - no typechecking
function identityBad(item: any):any {
  return item;
}

// Very good, 5 stars
function identity<Type>(item: Type):Type {
  return item;
}

interface Cat {
  name: string,
  breed: string
}

// console.log(identity<string>("Give it to me baby"));
// console.log(identity<number>(90));
// console.log(identity<Cat>({name: "Djuro", breed: "domaca"}));



function getRandomElement<T>( arr: T[] ):T {
  const rndIndex = Math.floor((Math.random() * arr.length));
  return arr[rndIndex];
}

// console.log(getRandomElement<string>(["a", "b", "c"]));
// console.log(getRandomElement<number>([2,5,6,8,12,68 ]));

// getRandomElement(["a", "g", "wf", "ert"]);
// getRandomElement([1,2,3,4]);

// function mergeObjects<T ,U>(object1: T, object2: U) {
// return {
//     ...object1,
//     ...object2
//   }
// }

function mergeObjects<T extends object,U extends object>(object1: T, object2: U) {
return {
    ...object1,
    ...object2
  }
}

// const comboObject = mergeObjects({name: "colt"}, {pets: ["blue", "elton"]});
// console.log(mergeObjects({name: "nino"}, {num: 9}));

interface Lenghty {
  length: number
}

// function printDoubleLength<T extends Lenghty> (thing: T):number {
//   return thing.length * 2;
// }

function printDoubleLength<T> (thing: Lenghty):number {
  return thing.length * 2;
}

// printDoubleLength("3w4ewr");
// printDoubleLength(245);


// function makeEmptyList<T>(): T[] {
//   return [];
// }

// const strArray = makeEmptyList<string>();
// strArray.push("#RFF");

// const unknown = makeEmptyList();


function makeEmptyList<T = number>(): T[] {
  return [];
}

const unknown = makeEmptyList();


interface Song {
  title: string,
  artist: string
}

interface Video {
  creator: string,
  resolution: string
}

// class VideoPlaylist {
//   public videos: Video[] = [];
// }

// class SongPlaylist {
//   public videos: Video[] = [];
// }

class Playlist<T> {
  public queue: T[] = [];

  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();

songs.add({title: "first", artist: "bobo"});