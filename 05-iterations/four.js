//For-in loop for object

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python",
};

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(key);
    // console.log(`${key} is for ${myObject[key]}`);
}

const prog = ["js", "py", "cpp", "rb"];

for (const key in prog) {
    // console.log(prog[key]);
    // console.log(key);
    console.log(`${key} - ${prog[key]}`);
}
