const myName: string = "muhammad junaid";

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

let firstLetter: string = myName.charAt(0).toUpperCase();
let restLetters: string = myName.slice(1).toLowerCase();
let titleCase= firstLetter + restLetters;

console.log(titleCase);
