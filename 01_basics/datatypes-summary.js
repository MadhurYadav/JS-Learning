//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; // In js we don't specify datatype
 // In typescript we've to mention datatype

 const scoreValue = 100.3
 const isLoggedIn = false
 const outsideTemp = null

 let userEmail; // or we can write let userEmail = undefined

 const id = Symbol('123')
 const anotherId = Symbol('123')

//  console.log(id === anotherId); //false

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber); //bigint


// Refrence (Non prmitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"james",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function 

// return type of function is object-function which genrally written as function

// https://262.ecma-international.org/5.1/#sec-11.4.3