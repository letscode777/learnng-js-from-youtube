// let todayDate = new Date()
// console.log(todayDate.toDateString())
// console.log(todayDate.toISOString())
// console.log(todayDate.toJSON())
// console.log(todayDate.toLocaleDateString())
// console.log(todayDate.toTimeString())
// console.log(todayDate.getTimezoneOffset())
// console.log(todayDate.toUTCString())

// let ounrDate = new Date(23,0,3)
// let ourDate = let  = new Date(23,0,3,5,34)

// console.log(ounrDate.toLocaleString())
// console.log(ourDate.toLocaleString())

let todayDate = new Date ("2024-01-04")
// console.log(todayDate.toLocaleString())
 let myTimestamp = Date.now()

 console.log(myTimestamp)
 console.log(todayDate.getTime())
 console.log(Math.floor(Date.now()/1000)) //{converted into seconds}

 console.log(todayDate.toLocaleString('default' , {year:"2-digit", day:"2-digit"}) ) // ctrl +space for suggestions