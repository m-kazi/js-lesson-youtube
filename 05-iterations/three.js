//for-of loop will work on Maps but not on Object

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps are unique value, also key-value

const map = new Map();
map.set("IN", "India");
map.set("BD", "Bangladesh");
map.set("FR", "France");
map.set("FR", "France"); //Duplicates will not print

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value);
}
