// singleton (when make using constructor)
// object.create

// when obj make with literal it doesn't become singleton

// object literals
const JsUser = {
    name: "James",
    age: 21,
    location: "Jaipur",
    email: "james@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); //dot notation
// console.log(JsUser["email"]); //sqaure notation

// Always prefer to use square notation
// because if we mention key in "" then we can't use with dot notation

const exam = {
    "sub": "Maths",
    date: "24-02-2009"
}

// console.log(exam.sub);
// console.log(exam["sub"]);

// Interview Question - Create a symbol and declare inside object

const mySum = Symbol("key1");

const sports = {
    1:"basketball",
    2:"cricket",
    [mySum]: "mykey1" 
}

// console.log(sports[mySum]);
// console.log(typeof mySum); //symbol

// if we mention mysum:"mykey1" in obj then it'll not symbol
// it return string

// Note on Symbol
// Symbols are unique and are often used as property keys when you want to avoid naming conflicts. Symbols are not enumerable in for...in loops, so they won't be accidentally included.


// change value in obj
JsUser.age=30;
// console.log(JsUser);

//freeze some value
JsUser.email="james@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser);

//after freeze now we can't change value
JsUser.age=20
JsUser.email="james@microsoft.com"
// console.log(JsUser);

// Methods
// They are properties of objects that are functions. When a function is part of an object, it is referred to as a method. Methods allow objects to perform actions or provide functionality.

JsUser.greeting = function(){
    // console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//when you have to refer same object - use 'this'

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greeting);
