// Dates

let myDate = new Date()
// console.log(myDate);

// date into string
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate); //object

// let myCreatedDate = new Date (2025 , 4 , 28)
// let myCreatedDate = new Date (2025 , 4 , 28 , 15 , 3)
//use 24hr format for AM/PM differentation
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date ("06-16-2025")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// // console.log (myTimeStamp)
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// newDate.toLocaleString('defaut', {
//     weekday: "long"
// })
