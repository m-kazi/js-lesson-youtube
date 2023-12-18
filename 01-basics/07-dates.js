//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//Month starts with '0' below, also time can be added
// let myCreatedDate = new Date(2023, 11, 19);
// let myCreatedDate = new Date(2023, 11, 19, 20, 10);
let myCreatedDate = new Date("2023-12-19");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

//Time works as miliseconds
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//Converting in second
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); //Month starts with 0 , so added 1 to get the exact value

let newDateCustom = newDate.toLocaleString("default", {
    weekday: "short",
});

console.log(newDateCustom);
