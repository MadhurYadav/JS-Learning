// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //[0, 1, 2, 3, 4, 5, 6]
// myArr.push(7) //[0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop() //[0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9) //[9, 0, 1, 2, 3, 4, 5]
// myArr.shift() //[0, 1, 2, 3, 4, 5]
// console.log(myArr);

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //3


const newArr = myArr.join()

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5

//join operator
//Creates a string representation of the array by joining its elements with a comma as the default separator.



// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/*
The slice method is used to create a shallow copy of a portion of the array. In this case, it starts at index 1 (inclusive) and ends at index 3 (exclusive). The elements at indices 1 and 2 will be included in myn1, but the element at index 3 will not be. However, note that myArr remains unchanged.
*/

/*
The splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements. In this case, it starts at index 1 and removes three elements from myArr. The removed elements are stored in the variable myn2.
*/
