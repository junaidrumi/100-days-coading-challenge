var myName = "muhammad junaid";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
var firstLetter = myName.charAt(0).toUpperCase();
var restLetters = myName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetters;
console.log(titleCase);
