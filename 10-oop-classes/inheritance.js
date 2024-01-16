class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Logged in user is ${this.username}.`);
    }
}

//giving 'Teacher' access to 'User'
//'super' looks linto the extended class constructor and brings the value: username
class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`Course added by ${this.username}.`);
    }
}

const userOne = new Teacher("Tanim", "tanim@gmail.com", 123);

userOne.logMe();
userOne.addCourse();

//userTwo doesn't have access to addCourse under Teacher
const userTwo = new User("Kazi");
userTwo.logMe();
// userTwo.addCourse();

//to check the inheritance / instance
console.log(userTwo instanceof User);
