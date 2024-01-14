// filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )

const newNums = myNums.filter( (num) => {
    return num > 4
})

// when we use {} in arrow then we have to use 'return'
// otherwise it'll directly return
// console.log(newNums);

// using for each

const NumsArr = []

myNums.forEach( (num) => {
    if(num > 4) NumsArr.push(num)
})

// console.log(NumsArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);


// -------------------------

// map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumns = myNumbers.map( (num) => num + 10)

// chaining
const newNumns = myNumbers
                    .map( (num) => num * 10)
                    .map((num) => num + 1)
                    .filter( (num) => num >= 40)
// console.log(newNumns);

// -----------------

// reduce

const myNum = [1,2,3]

const initialValue = 0

const myTotal = myNum.reduce(function(accumaltor, currentValue){
    console.log(`acc: ${accumaltor} and currval: ${currentValue}`);
    return accumaltor + currentValue
},initialValue)

// console.log(myTotal);

// 
// 1. accumaltor = initialValue
// 2. accumaltor = accumaltor + currentValue
// currentValue is value of Arr 

// using reduce with arrow function

const myTotals = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotals);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);