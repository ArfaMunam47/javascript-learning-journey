// _______________________ call
function setUserName(username){
    this.username=username
    console.log('called')
}
function createUser(username,email,password){
    setUserName.call(this, username)
    this.email=email
    this.password=password
}
const data1= new createUser('Arfa','arfamunam01@gmail.com','@123')
console.log(data1)
const data2= new createUser('Sania','sanisafdar33@gmail.com','@893')
console.log(data2)
// call stack __________ global execution context __________ function loading one by one
// function inside another function
// first we call then give our own this