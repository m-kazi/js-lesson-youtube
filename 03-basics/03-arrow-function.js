//Using .this in objects only

const user = {
    username: "Tanim",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to the website.`);
        console.log(this);
    },
};

// user.welcomeMessage();
// user.username = "Kazi";
// user.welcomeMessage();

//Globally .this will give empty object in Node env.
// console.log(this);

//++++++++++ Arrow function +++++++++++
const chai = () => {
    let username = "Yo";
    console.log(this);
};
// chai();

//Implicit arrow functin in 1 line
const number = (num1, num2) => num1 + num2;

//Implicit arrow functin in 1 line for object
const addObject = (num1, num2) => ({ username: "Tanim" });

console.log(number(3, 3));
console.log(addObject());
