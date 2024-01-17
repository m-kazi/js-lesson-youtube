//Discreptor to get all the details about 'properties'

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const tea = {
    name: "ginger tea",
    price: 100,
    isAvailable: true,

    orderTea: function () {
        console.log("It won't work");
    },
};

// console.log(Object.getOwnPropertyDescriptor(tea, "name"));

//Defining properties in object
//If enumerble is false , iteration will not work on the 'name' property
Object.defineProperty(tea, "name", {
    writable: true,
    enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(tea, "name"));

//to iterate on Objects
//skipping iteration on function inside the Objects
for (let [key, value] of Object.entries(tea)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
