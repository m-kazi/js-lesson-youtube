//Promises usage
//Do an async task
//DB calls, cryptography, network

//creating Promises - approach #1
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is completed.");
        //call resume()
        resolve();
    }, 2000);
});

//'then' is connected to 'resolve'
promiseOne.then(function () {
    console.log("Promise consumed");
});

//creating Promises - approach #2
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task - 2 completed");
        resolve();
    }, 3000);
}).then(() => {
    console.log("Task-2 consumed");
});

//creating Promises - approach #3
//Passing data, adding parameter into 'resolve'
//pass that data into 'then'
//then, catch, finally

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "KazzCode", email: "kazzcode@g.com" });
    }, 5000);
});

promiseThree.then((userdata) => {
    console.log(userdata);
});

//creating Promises - approach #4

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Tanim", password: "123" });
        } else {
            reject("ERROR ! Something went wrong.");
        }
    }, 5000);
});

//called chaining: value from first .then passes into the second .then
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("The promise either resolved or rejected."));

//creating Promises - approach #5 - async / await

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", password: "123" });
        } else {
            reject("ERROR ! JS code went wrong.");
        }
    }, 7000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

//using jSON placeholder api - async /await
//data comes as string format so need to convert

// async function allUsers() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         //it takes time to convert data, so use 'await' also
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// allUsers();

//Using JSON placeholder api - then / catch
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));
