//for loop

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 3) {
        // console.log("3 is printed also.");
    }
    // console.log(element);
}

//for loop inside a for loop
for (let i = 1; i <= 5; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 5; j++) {
        // console.log(`Inner loop value: ${j} and outer loop ${i}`);
        // console.log(i + "*" + j + " = " + i * j);
        // console.log(`${i}*${j} = ${i * j}`);
    }
}

//for loop in an Array

let myArray = ["Flash", "Batman", "Superman", "WonderWoman"];
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // console.log(`5 detected.`);
        break;
    }
    // console.log(i);
}

//continue
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // console.log(`5 detected.`);
        continue;
    }
    // console.log(i);
}
