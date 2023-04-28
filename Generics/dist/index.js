"use strict";
// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// inputEl.value = "LIK";
// const btn = document.querySelector<HTMLButtonElement>(".btn")!;
// Not convinient
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// This is not good - no typechecking
function identityBad(item) {
    return item;
}
// Very good, 5 stars
function identity(item) {
    return item;
}
// console.log(identity<string>("Give it to me baby"));
// console.log(identity<number>(90));
// console.log(identity<Cat>({name: "Djuro", breed: "domaca"}));
function getRandomElement(arr) {
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
function mergeObjects(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
// function printDoubleLength<T extends Lenghty> (thing: T):number {
//   return thing.length * 2;
// }
function printDoubleLength(thing) {
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
function makeEmptyList() {
    return [];
}
const unknown = makeEmptyList();
// class VideoPlaylist {
//   public videos: Video[] = [];
// }
// class SongPlaylist {
//   public videos: Video[] = [];
// }
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
songs.add({ title: "first", artist: "bobo" });
