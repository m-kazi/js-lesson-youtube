//singleton - constructor objects

//Also to use with databases - is an example below
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//This is to check if there's a property or not
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const regularUser = {
    email: "pat@google.com",
    fullname: {
        userfullname: {
            firstname: "Pat",
            lastname: "Smith",
        },
    },
};
// console.log(regularUser.fullname.userfullname.firstname);

//.assign will combines the objects and all values will be added into the "target"
const target = { a: 1, b: 2 };
const source = { c: 3, d: 4 };

const returnedTarget = Object.assign(target, source);
// console.log(target);
// console.log(source);
// console.log(returnedTarget);
// console.log(returnedTarget === target);

//Another way is to use spread operator
const obj1 = { ...target, ...source };
// console.log(obj1);

//Destructuring object
const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Tanim",
};
//console.log(course.courseInstructor);

//const {value to extract} = value to extract from
//also can rename {courseInstructor: instructor}
const { courseInstructor: instructor } = course;
// console.log(courseInstructor);
console.log(instructor);
