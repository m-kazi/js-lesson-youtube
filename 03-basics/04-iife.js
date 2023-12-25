//Immediately Invoked Function Expressions - IIFE
//To avoid global scope pollution, we use IIFE

//named IIFE 'greenTea'
(function greenTea() {
    console.log(`cha Gorom.`);
})();

//Arrow function IIFE
((name) => {
    console.log(`Best coffee in town - ${name}`);
})("North End");
