const id = "Tanim"
const repoCount = 10

//console.log(`My id is ${id} and Repo count is ${repoCount}.`);

//Another way to declare String as object

const gameName = new String('KaziTanim')
console.log(gameName);

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

//trim - Trims the spaces
const newStringOne = "    Tanim    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanim.com/tanim%20Kazi"
console.log(url.replace('%20', '-'));

//creating array based on the separetor value '/'
console.log(url.split('/'));

//Searching if the character is there or not
console.log(url.includes('tan'));


