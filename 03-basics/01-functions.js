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
console.log(userLoginMessage("Tanim"));
