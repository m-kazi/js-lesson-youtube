//explicitly define number value using 'new'
const balance = new Number(100);
// console.log(balance);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 123.7699;
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
// console.log(hundreds.toLocaleString());

//******************* Maths ***************

//console.log(Math);
//console.log(Math.abs(-3)); //converts negative number to positive only
//console.log(Math.round(4.8));
//console.log(Math.ceil(4.1)); //only choose the upper round up value
//console.log(Math.floor(4.8)); //only choose the lower round up value
//console.log(Math.min(2, 3, 4, 5)); //Finds out the lowest value
//console.log(Math.max(2, 3, 4, 5)); //Finde out the highest value

console.log(Math.random()); //Only gives number between 0 - 1
console.log(Math.random() * 10); // Multiply 10 to shift the value on left
console.log(Math.random() * 10 + 1); // Gives minimum value more than '1'
console.log(Math.floor(Math.random() * 10 + 1)); // Round up into the lowest value

//To get a number between min and max value below
const min = 5;
const max = 10;

//min - max to get into the range, +1 to avoid '0' value, +min to get the minimum value by the min variable
console.log(Math.floor(Math.random() * (max - min + 1) + min));
