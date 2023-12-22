//Objects can be declared in 2 ways - Constructor & Literal
//singleton - when we create object as constructor

//********* object literals ********

//An example of Symbol declaration & to add it into the object
const mySym = Symbol("key1");

const jsUser = {
    name: "Dave",
    "full name": "Dave Johnson",
    age: 25,
    [mySym]: "mykey1",
    location: "Virginia",
    email: "dave@google.com",
    isLoggedIn: false,
    LoggedInDays: ["Mon", "Tue", "Wed"],
};

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

//To update a value inside the Object
jsUser.email = "dave@microsoft.com";
// console.log(jsUser);

//To lock an object use .freeze
// Object.freeze(jsUser);
jsUser.email = "dave@chatgpt.com";
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello, JS user");
};
console.log(jsUser.greeting); //Output will be just the reference of the function not the value
jsUser.greeting(); //Output will be actual value

//When we reference the same object use 'this'
jsUser.greetingTwo = function () {
    console.log(`Hello, JS user ${this.name}`);
};

jsUser.greetingTwo();
