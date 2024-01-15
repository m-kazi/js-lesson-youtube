let allHeroes = ["thor", "batman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidyPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

// heroPower.getSpidyPower();

//creating my own property
//this can be accessed by both object and arrays
Object.prototype.tanim = function () {
    console.log(`Tanim is everywhere.`);
};

// heroPower.tanim();
// allHeroes.tanim();

const teacher = {
    course: "JavaScript",
    duration: 6,
};

const TAssistant = {
    fulltime: true,
    duties: "Q & A",
};

//teacher can access TAssistant property here
Object.setPrototypeOf(teacher, TAssistant);

//here we will add 'trueLength' to all the strings
let user = "KazzCode     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

user.trueLength();
"kazi".trueLength();
