//Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["batman", "superman"];
const myArr2 = new Array(10, 20, 30, 40, 50);

// console.log(myArr2[1]);
// console.log(myHeroes[1]);

//Array methods

//Adding next elements
// myArr.push(6);
// myArr.push(8);

//.pop removes any last element
// myArr.pop();

//.unshift & .shift only adds / removes the first element
myArr.unshift(100);
myArr.shift();
console.log("A ", myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(0));

//Copying existing array into a string
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//.slice() gives a range of portion excludes the last value in the range of the array and doesn't manipulate the original array.
const myN1 = myArr.slice(3, -1);
console.log(myN1);
// console.log("B ", myN1);
// console.log(myArr);

//.splice() gives a range of portion includes the last value in the range of the array and also manipulate the original array.
// const myN2 = myArr.splice(1, 4);
// console.log("C ", myN2);
// console.log(myArr);
