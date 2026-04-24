const accountId=1234445
let accountPassword="2222"
var accountEmail="arfamunam01@gmail.com"
accountCity="Lahore"
// accountId=34523 
// so we cannot change const values
accountPassword="0000"
var accountEmail="arfabutt624@gmail.com"
accountCity="Faisalabad"
let accountState;
/* we use only const and let to declare variables. we don't use var as there is scope problem here*/
// we can also assign value to variables by not using const and let but this is not  preferrable mostly

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);