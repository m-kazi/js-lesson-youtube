function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

//Only return can be saved into any variable
const result = addTwoNumbers(5, 3);
// console.log("Result: ", result);

//if username === undefined, username has a default value as an example
function userLoginMessage(username = "User") {
    if (!username) {
        console.log("Please type a username:");
        return;
    }
    return `${username} just logged in.`;
}
// console.log(userLoginMessage("Tanim"));

//Rest operator in function '...' - 3 dots
function calculateCart(val1, ...num1) {
    return num1;
}
// console.log(calculateCart(200, 300, 400));

//Handling objects in function
const user = {
    name: "Tanim",
    price: 200,
};

function handleObject(anyobject) {
    console.log(
        `Username is ${anyobject.name}, item price is ${anyobject.price}.`
    );
}

// handleObject(user);
handleObject({
    name: "Kazi",
    price: 300,
});

//Arrays in function

const myArr = [10, 20, 30];

function returnArray(getArray) {
    return getArray[2];
}
// console.log(returnArray(myArr));
console.log(returnArray([200, 300, 500]));
