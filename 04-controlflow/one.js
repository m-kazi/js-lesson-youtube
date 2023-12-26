// if - else condition
// <, >, <=, >=, ==, !=, ===, !==, &&, ||

// const score = 50;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// } else {
//     console.log(`User power is down.`);
// }

// const balance = 400;

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance >= 1000) {
//     console.log("Sufficient balance.");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && loggedInFromEmail) {
    console.log("Allowed to shopping.");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Welcome to the site.");
}
