const accountId = 144536
let accountEmail = "gagan@gmail.com"
var accountPassword = "231425"
accountState = "Maharashtra"

// accountId = 243516 //We cannot do this
console.log(accountId)
accountEmail = "diya@gmail.com"
accountPassword = "6573827"
accountState = "UP"

//to print all variables at once

/*
we should never prefer var because of problem of block scope and functional scope
use let always
*/

console.table([accountId , accountEmail , accountPassword , accountState])

