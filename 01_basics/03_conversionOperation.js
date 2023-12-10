let score = "Hello"

// console.log(typeof score); // string
// console.log(typeof(score)); // string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);// number
// console.log(valueInNumber); //NaN

// "33" => 33
// "33abc"=>NaN
// true => 1; false => 0

let isLoggedIn = "monday"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

// *********** Operations ************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.66666666666666
// console.log(2%3); // 2

let str1 = "hello"
let str2 = "monday"

let str3 = str1 + str2
// console.log(str3); // hellomonday

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3); // 2

// console.log(+true); // 1
// console.log(+""); // 0

// The unary plus operator (+) attempts to convert its operand to a number. true is converted to 1, and an empty string "" is converted to 0.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
let roadCounter = 200

++gameCounter;
roadCounter++;
// console.log(gameCounter); // 101
gameCounter++;
// console.log(gameCounter); // 102 

// console.log(roadCounter); // 201
++roadCounter;
// console.log(roadCounter); // 202


// pre and post incerement
let x = 5;
let y = x++;
// console.log(y);
// console.log(x);
// y is assigned the current value of x (5), then x is incremented
// x is now 6, y is 5

let a = 10;
let b = ++a;
// console.log(b);
// console.log(a);
// a is incremented first (to 11), then b is assigned the new value of a (11)
// a and b are both 11


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion