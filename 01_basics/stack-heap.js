/*

Stack (Primitive)
When stack memory used then you'll get copy of variable

Heap (Non Primitive)
When Heap memory used then you'll get refrence of variable

*/

let myWorld = "India"
let anotherWorld = myWorld
anotherWorld = "USA"

console.log(myWorld); //India
console.log(anotherWorld); //USA

// As it's stored in stack, so var value copy
// That's why orginal val didn't change

let userOne = {
    email:"abcd@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "pqrs@google.com"

console.log(userOne.email); // pqrs@google.com
console.log(userTwo.email); // pqrs@google.com

// As value stored in heap, so it pass refrence
// That's why original value changed

