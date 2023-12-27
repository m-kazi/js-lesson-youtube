const coding = ["js", "ruby", "java", "python"];

const codingLang = coding.filter((item) => item == "python");
// console.log(codingLang);

//Whenever the {} - curly braces uses, must have return
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.filter((num) => {
    return num > 5;
});

// console.log(newNum);

//Another example with forEach, here need to ue push to the empty array.

const anotherNum = [];

myNum.forEach((num) => {
    if (num >= 5) {
        anotherNum.push(num);
    }
});
// console.log(anotherNum);
