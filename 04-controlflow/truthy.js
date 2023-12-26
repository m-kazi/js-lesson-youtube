//Truthy values-  Anything inside strings will be a truthy value
// "0", "false", " ", []. {}, function(){}

//falsy value-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// const userEmail = "tanim@google.com";
// const userEmail = ""; - Empty string will give falsy value
const userEmail = []; // Empty Array will give truthy value

if (userEmail) {
    console.log("Got the email.");
} else {
    console.log("Don't have the email.");
}

//To check if the Array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//To check if the object is empty
const emptyObj = { name: "Tanim" };

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty.");
}

//Nullish Coalescing Operator (??): only deals with null or undefined
//Sometimes from the databse multiple values can be returned or null or undefined, thet's where we use this. It's like a callback.

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = undefined ?? 20 ?? 10;

// console.log(val1);

//Ternary Operator

const teaPrice = 79;

teaPrice >= 80
    ? console.log("Price is more than 80")
    : console.log("Price is less than 80");
