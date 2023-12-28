// .reduce() method

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

const total = myNums.reduce((acc, currval) => acc + currval, 0);

// console.log(myTotal);
// console.log(total);

//Adding total price to the cart example
shoppingCart = [
    {
        courseName: "py course",
        price: 100,
    },
    {
        courseName: "js course",
        price: 200,
    },
    {
        courseName: "java course",
        price: 100,
    },
];

const priceToPay = shoppingCart.reduce((acc, course) => acc + course.price, 0);
console.log(priceToPay);
