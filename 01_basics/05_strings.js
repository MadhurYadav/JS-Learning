'use strict';
const name = "James";
const repoCount = 50;

// The following line uses concatenation, not template literals:
// console.log(name + repoCount + "Value");

// This line uses template literals to create a string with embedded variables:
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('james-jm-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('c'));
// console.log(gameName.indexOf('t')); //-1

const newString = gameName.substring(0,4)
// In substring we can't give negative values
// console.log(newString); //jame
// (0,4) means 0,1,2,3

const gameNames = "helloMyName"
const anotherString = gameNames.slice(-12,4)
// console.log(anotherString); //hell

const str = "Hello, World!";
const sliced = str.slice(7, 12);    // "World"
const sub = str.substring(7, 12);   // "World"
const sliceNeg = str.slice(-5, -1); // "orld"
const subNeg = str.substring(-5, -1); // "Hello, World!"

// console.log(sliced);
// console.log(sub);
// console.log(sliceNeg);
// console.log(subNeg);

/*
The substring method is used to extract a portion of the string str. In this specific case, the starting index is -5 and the ending index is -1.

When using substring with negative indices, the behavior is as follows:

Negative Indices in substring:
If the start or end parameter is negative, it is treated as if it were 0.
This means that negative indices are effectively converted to 0.
In your example:

start is -5, but it's treated as 0.
end is -1, but it's also treated as 0.
So, effectively, substring(0, 0) is used, and this extracts characters starting from index 0 up to, but not including, index 0. The result is an empty string.

Therefore, subNeg is assigned the value "Hello, World!" because the extracted substring is the portion of the string from index 0 to, but not including, index 0, which is an empty string.

*/



/*
The slice method is used to extract a portion of the string str. In this specific case, the starting index is -5 and the ending index is -1.

When using slice with negative indices, the behavior is a bit different from substring:

Negative Indices in slice:
If either the start or end parameter is negative, it counts positions from the end of the string.
A negative index -n corresponds to the position str.length - n.
In your example:

start is -5, so it corresponds to the position str.length - 5, which is the fifth-to-last character in the string.
end is -1, so it corresponds to the position str.length - 1, which is the last character in the string.
Therefore, slice(-5, -1) extracts characters from the fifth-to-last character up to, but not including, the last character. The result is the substring "orld".

*/


const newStringOne = " jimmy   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://jimmy.com/jimmy%20jacob"

console.log(url.replace('%20','-'));
console.log(url.includes('sundar')); //false
console.log(gameName.split('-'));
