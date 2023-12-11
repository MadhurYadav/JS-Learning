// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false 
// console.log(2 != 1); //true


// console.log("2" > 1); //true
// console.log("02" > 1); //true
//  It's better to compare same datatype number
// In typescript it's restricted to compare diff datatypes number

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/*
Comparision and Equality operator works diff in Js

The reason is that an equality check == and comparisions > < >= <= work diff
Comparision convert null to a number, treating it as 0.
That's why (3)null >= 0 is true and null > 0 is false.

So, 0>0 false, 0==0 false, but 0>=0 true
*/


// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false
// console.log(undefined >= 0); //false

// === 
// It check value and data type also!

console.log("2" === 2);


