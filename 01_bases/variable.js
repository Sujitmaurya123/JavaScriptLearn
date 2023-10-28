const accountId = 144345
let accountEmail = "sujitkumar.com"
var accountPassword = "12345"
accountCity = "Mirzapur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sujit@sk.com"
accountPassword = "212564551"
accountCity = "Utter Pradesh"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])