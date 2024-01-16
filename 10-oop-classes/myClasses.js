//using class

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeName() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

const userOne = new User("KazzCode", "kz@fb.com", 123);

// console.log(userOne);
// console.log(userOne.encryptPassword());
// console.log(userOne.changeName());

//without 'class' behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};
User.prototype.changeName = function () {
    return `${this.username.toUpperCase()}`;
};

const userTwo = new User("Tanim", "tanim@fb.com", 345);

console.log(userTwo.encryptPassword());
console.log(userTwo.changeName());
