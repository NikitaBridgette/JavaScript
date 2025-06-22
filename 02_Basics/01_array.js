// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["batman", "superman"]
// console.log(myArr[0]) // indexing in array starts from '0'

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// console.log(myArr)
// Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr); // Adds number or value in the end

// myArr.pop();
// console.log(myArr); // deletes number from the end

// myArr.unshift(9) // Adds value in the beginning of the array
// console.log(myArr)

// myArr.unshift() // Removes value from the beginning of the array
// console.log(myArr)

const myArr3 = [10, 20, 30, 40, 50, 60]
// console.log(myArr3.includes(9)); // false
// console.log(myArr3.indexOf(20)); // 1 

// const newArr = myArr.join() //converts to strings
// console.log(newArr); // 0, 1, 2, 3, 4, 5

//slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1, 3)
console.log (myn1); // [1,2]

console.log("B", myArr)
const myn2 = myArr.splice(1, 3);
console.log("C", myArr)
console.log (myn2);
 // In splice original array is modified 




