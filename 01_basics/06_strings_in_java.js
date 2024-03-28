// const  name = "chandan"
// const age = " 28"
 
// console.log(name+ age +" hello") // not trending 
// console.log(`my name is ${name} and my age is ${age}`) //much better way 
// const game = "hello world";

// const stringgame = game.slice(0,1) // keys for word you want to keep  (open bracket gor last key)
// couldnt got the - neg key concept in slice 
// console.log(game.length);
// console.log(game[0])
// console.log(game.__proto__)
// console.log(game.length)
// console.log(game.toLowerCase)
// console.log(game.indexOf('e'))
// console.log(stringgame);
// const newstring = "baba    ki booti    "
// console.log(newstring)
// console.log(newstring.trim())  {trim removes starting and end space}

 // const url = "chandanwatoocoo0001@gmail.com"
//  console.log(url.replace(`000`,`fubb`))
// console.log(url.includes(`chn`))
//  const newString = "ram.kaka.cristiano.messi"
//   console.log(newString.split(`a`))  //can be used . any alphabet or -

// const para = "ram is a good man"
// const line = "is"
// console.log(para.lastIndexOf(line))
 
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);