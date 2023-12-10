const accountId =  144553 //value can't be changed (locked)
let accountEmail = "madhur@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "my@google.com"
accountPassword = "Hey"
accountCity = "Ajmer"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
console.log(accountState) 
// if we didn't specify any value to variable then it's value is undefined
