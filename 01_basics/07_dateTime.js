// Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toDateString()); // In js month start with 0
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// we use timestamp in creating polls or quiz where need to calculate who ans first
// timestamp return in millisecond
// we use milli sec for comparision

// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // this convert milli sec to sec

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long",
})



