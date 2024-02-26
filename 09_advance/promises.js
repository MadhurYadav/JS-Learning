// promise is obj
// promise is callback

// create promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calls, cryptography, network

    setTimeout(function(){
        // console.log("Async task is complete");
        resolve() // this connect resolve
    },1000)
})

// .then() is connected with resolve
promiseOne.then(function(){
    // console.log("Promise consumed");
})

// Promise without using variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolved");
})

//

// passing data from resolve to .then()
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Maddy", email: "maddy@example.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
})

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"madhur", password:"123"})
//         }else{
//             reject('ERROR SOMETHING WENT WRONG')
//         }
//     }, 1000)
// })

// // chaining
// promiseFour.then((user)=>{
//     // console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))


//

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// next

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
