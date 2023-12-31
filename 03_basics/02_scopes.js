var c = 300 // global scope
let a = 300

if(true){
    // block scope
    let a = 10
    const b = 20
    var c = 30 // or c = 30
    // console.log("Inner a:", a);
}


// console.log("Outer a:",a); 
// console.log(b); 
// console.log(c); // c=30

// {} this is scope
// scope of let and const is inside {} but var can access outside also

// also we declare var c = 300 first but later it changed to 30, so finally it print 30
// this can lead to major problem in large code, so we prefer to use let instead of var




function one(){
    const username = "james"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}

one()

// In nested, child can access parent variables but vice versa not true
// two() can access one() variables
// but one() can't access two() variables


if (true) {
    const username = "james"
    if (username === "james") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error (scope)
}

// console.log(username); // error (scope)

// ++++++++++++++++++ interesting ++++++++++++++++++



// console.log(addone(5)) //6

function addone(num){
    return num + 1
}



// addTwo(5) // Error (can't access before initialization )
const addTwo = function(num){
    return num + 2
}

// addone() will run even if access before intitalized
// but addTwo will not run because it stored in a variable and then access 

