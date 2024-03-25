//let score = "33abc"

//console.log(typeof score ); // string
//console.log(typeof(score)); // string

//let scoreInNumber = Number(score) // string to number conversion
//console.log(typeof(scoreInNumber))
//console.log(typeof score)
//console.log(scoreInNumber)   //  output  NaN (not a number)

// output can be different if score has different data types { output will have value according to string boolean var const datatypes}
  // "33" -> 33
  // "33abc" -> NaN
  // true-> 1 , false-> 0

  let isLoggedIn = "hh"
  let booleanisLoggedIn = Boolean(isLoggedIn) // * CAPTITAL LETTER EROR *
  console.log(booleanisLoggedIn)
  console.log(typeof(booleanisLoggedIn))
   //if isLoggedIn value would have been diff data types
   // 1-> true , 0-> false ,  ""-> false   , "chandan"-> true
   

   // *************** operations ***************
// let value = 4
// let negvalue = -value
// console.log(negvalue)

//  console.log(2+2)  
//  console.log(2-2)
//  console.log(2*2 )
//  console.log(2**3)  2 raise the power
//  console.log(2/2)   
//  console.log(2%3)   remainder  

// let str1 = "hello"
// let str2 = " chandan"
// let str3 = str1 + str2 
// console.log(str3)


// console.log("1"+ 2)
// console.log(1 + "2")
// console.log("1"+2+2)
// console.log(1 +1+"2")

// console.log( (3+4) * (5 /3))  **use pelenthises for better code understanding  ORRR  GO TO TYPE CONVERSION OF ECMA SCRIPT 
 
let gamecounter = 1000;
gamecounter++ ;// ++gamecounter can be used but know the diff between prefic and suffix
console.log(gamecounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);


  
