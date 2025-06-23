const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes); 

// console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]); // flash

// const allHeroes = (marvel_heroes.concat(dc_heroes)); //concat gives a new array
// console.log(allHeroes)

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]; 
// console.log (all_new_heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); 
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */





// console.log(Array.isArray("Nikita")) //false
// console.log(Array.from("Nikita")); //[ 'N', 'i', 'k', 'i', 't', 'a' ]

console.log(Array.from({Name: "Nikita"})) // interesting // returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) ; // [ 100, 200, 300 ]




