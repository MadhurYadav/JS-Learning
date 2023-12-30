function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("R");
    console.log("Y");
    console.log("!");
}

// sayMyName();

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
}

// addTwoNumbers() // Nan (as no value passed)
// addTwoNumbers(3,4);
// addTwoNumbers(3,"4"); // 3 also converted to string and result will be 34

// const result = addTwoNumbers(3,5);
// console.log("Result:", result); // undefined 

// 8 will print because there is log in function 
// but function function will also return something

function multiplyTwoNumbers(num1, num2){

    let ans = num1 * num2;
    return ans;
    console.log("Hello"); // this will never print as after return nothing can print!
}

const ans = multiplyTwoNumbers(3,4);
// console.log(ans);
// this ans is diff from 'ans' in function 
// because of scope

function loginUserMessage(username){
    if(!username){ // it is same as -> username == undefined (as undefined treat as false in if() in js)
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage()); // udefined as no value is passed
// console.log(loginUserMessage("james"));

// Problem : Shooping Cart
// we don't know how many items user will add in cart, so we can't judge how many parameter we need
// like in above example we have 2 parameter

// using rest operator
function calculateCartPrice(...nums1){
    return nums1;
}

console.log(calculateCartPrice(200,400,500));
// rest operator bind these in array

function practice(val1, val2, ...nums){
    return nums;
}

console.log(practice(200,400,500)); //[500]
// as, 200->val1, 400->val2


const user = {
    item:"Bat",
    price:"20000"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.item} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    item:"ball",
    price:"200"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,500,600]));




 





