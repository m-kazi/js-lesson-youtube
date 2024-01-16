// .call need to use here

function setUserName(username) {
    this.username = username;
    console.log(username);
}

function createUser(username, email, password) {
    // this.username = username;
    //calling the above function
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const userOne = new createUser("tanim", "tanim@google.com", "123");
console.log(userOne);
