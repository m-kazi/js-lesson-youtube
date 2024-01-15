//Parts of OOP
//object literal
//constructor function
//prototype
//classes
//instances

// const user = {
//     userName: "Tanim",
//     loggedIn: "true",
//     userEmail: "mk@gmail.com",

//     userDetails: function () {
//         console.log(`Username: ${this.userName}`);
//     },
// };

// console.log(user.userDetails());

//'new' creates a new instance
function user(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.userName}`);
    };

    // return this;
}

const userOne = new user("tanim", 10, true);
const userTwo = new user("kazi", 5, false);

console.log(userOne);
console.log(userTwo);
