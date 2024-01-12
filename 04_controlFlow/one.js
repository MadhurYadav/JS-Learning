// if

// code execute
if(true){

}

// code doesn't execute
if(false){

}

// const isUserloggedIn = true
// const temperature = 41

// if(temperature == 40){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // out of scope 


// short hand notation

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // not good practice

// if(balance < 500){
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance < 900){
//     console.log("Less than 750");
// } else{
//     console.log("Less than 720");
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}

