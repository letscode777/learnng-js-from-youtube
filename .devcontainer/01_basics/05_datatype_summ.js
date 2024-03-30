// primitive

// string, boolean, Number, null, undefined, symbol, BigInt(use n at the end)

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const tempOutside = null;
let userEmail; //= undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(score);
// console.log(scoreValue);
// console.log(isLoggedIn);
// console.log(tempOutside);
// console.log(userEmail);
// console.log(id === anotherId); //shows value looks same but are not

// Refrence(Non_primitive)

// array, Objects, functions

const heros = ["shaktiman", "nagraj", "druv", "juniorg"];

//   let myObj = {
 //  name: "chandan",
 //  Age: 28, // generally curly brackets contain objects
// };

const myfunction = () => {
    console.log("hello");
};
 console.log(typeof myfunction);
 console.log(typeof heros);
