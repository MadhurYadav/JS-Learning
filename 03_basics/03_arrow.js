const user = {
    username: "james",
    price: 999,

    welcomeMessage : function(){
        // console.log(`${this.username} , welcome to website`); // this refers to current context, means inside {} scope(here username)
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {}

// when this print in line 7, it gives detail about object user


// when this prnt in line 15, it gives {}, empty object
// but if we print this same in browser then it'll return 'window' as global object



function chai(){
    let username = "james"
    // console.log(this)
    // console.log(this.username); //udefined 
    // as 'this' can be used inside object
}

chai()

const coffee = function() {

    let username = "james"
    // console.log(this.username); //undefined
}

coffee()

// ---- ARROW FUNCTION ----
// () => {}

const tea = ()=> {
    let username = "james"
    // console.log(this);
}

tea()


const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3,4));


// Implicit Return (for one line statement)

// const multiplyTwo = (num1, num2) => num1 * num2
const multiplyTwo = (num1, num2) => (num1 * num2)

// console.log(multiplyTwo(3,4));

// if {} use then we have to write 'return'
// if () use then we can avoid 'return' ! Also this will use in 'React'

// const learn = (num1, num2) => {username: "james"} // hives undefined
const learn = (num1, num2) => ({username: "james"})

console.log(learn()); 

