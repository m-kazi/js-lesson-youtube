const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Batman", "Superman", "Flash"];

//Adding Array into Array
// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);

//getting value from Array within an Array
// console.log(marvelHeroes[3][1]);

//.concat combines 2 or more arrays without modifying the existing one
// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

//Spread operator values using '...'
// const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);

//.flat returns a new array with all the sub arrays, depending on the depth
const another_array = [1, 2, 3, [20, 30, [4, 5, 6]], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(1);

// console.log(real_another_array);

//.from creates an Array and makes it each individual elements.
console.log(Array.from("Tanim"));

//.isArray checks if the value is Array or not
console.log(Array.isArray("Tanim"));

//Need to mention which value to make an Array - property or value
console.log(Array.from({ name: "Kazi" }));

//.of creates any value to Arrays
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
