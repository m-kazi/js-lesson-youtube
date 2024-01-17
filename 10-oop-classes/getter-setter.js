//Getting a velue and manupulate with setter

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    //getting the value and modified & returning
    get password() {
        return `${this._password}yo`;
    }

    //setting the value - storing the value
    set password(value) {
        this._password = value;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }
}

const tanim = new User("t@gmail.com", 12345);

console.log(tanim.password);
console.log(tanim.email);
