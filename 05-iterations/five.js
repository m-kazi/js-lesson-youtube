//forEach loop

const coding = ["js", "ruby", "java", "python"];

// coding.forEach((code) => {
//     console.log(code);
// });

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
];

myCoding.forEach((item) => {
    console.log(item.languageFileName);
});
