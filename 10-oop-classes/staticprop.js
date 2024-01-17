class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Logged in by ${this.username}`);
    }

    //to restrict access use 'static'
    static createId() {
        return "x123";
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const userOne = new User("Tanim");
// console.log(userOne.createId());

const userTwo = new Teacher("Kazi", "kazi@gmail.com");
userTwo.logMe();
console.log(userTwo.createId());
