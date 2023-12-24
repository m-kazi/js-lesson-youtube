// {} - are always a scope like if-else, function

let a = 300; //Global scope

if (true) {
    let a = 10; //Block scope
    // console.log("INNER: ", a); //will print block scope
}

// console.log(a); //will print global scope

//Nested scope
//child scope can access parent but parent can't access child
function one() {
    const userName = "Tanim";

    function two() {
        const website = "Youtube";
        console.log(userName);
    }

    console.log(website);
    two();
}

// one();

//Nested if-else example - child scope can access parent but parent can't access child
if (true) {
    const userName = "Kazi";
    if (userName === "Kazi") {
        const website = " youtube";
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

//++++++++++++++++++ Interesting +++++++++++++++

//can be declared before the function example

console.log(addOne(2));

function addOne(num) {
    return num + 1;
}

//can't be declared before the function example

addTwo(5);

const addTwo = function (num) {
    return num + 2;
};
// console.log(addTwo(5));
