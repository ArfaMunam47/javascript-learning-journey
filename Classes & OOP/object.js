// 14-06-2024 WORK
function multiplyBy5(num){
    return num*5
}
//  by DOT(.), we can access object properties
// String _ Array - Functions are OBJECTS
// EVERYTHING IS OBJECT IN JS
// STRING --> OBJECT --> NULL
// ARRAY --> OBJECT --> NULL
// FUNCTION --> OBJECT --> NULL
multiplyBy5.power= 4
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype) 
// in PROTOTYPE __ methods and properties are given

// PROTOTYPE give us _________ new _____ this ______ classes _________ inheritance
// by default, JAVASCRIPT behavior is prototypal

function getUserData(username,score,isLoggedIn){
    this.username=username
    this.score=score
    this.isLoggedIn=isLoggedIn
    return this
}
getUserData.prototype.increment=function(){
    this.score++
}
getUserData.prototype.printMe=function(){
    console.log(`Username : ${this.username} and score is ${this.score}`)
}
const data1= new getUserData('Arfa',89, true)
console.log(data1)
data1.printMe()
const data2= new getUserData('Alia',78, false)
console.log(data2)
data2.increment()
const data3=new getUserData('Wajeeha',49, true)
console.log(data3)
data3.printMe()
// NEW keyword function
// 1- new object create
// 2-prototype is linked
// 3-constructor is called
// 4-returned us new object

// NEW keyword function (ANOTHER)
// 1- new object create
// 2- constructor prototype called
// 3- constructor function execute
// 4- give us new object automatically

// NEW keyword function (ANOTHER CONCEPT)
// 1- new object create
// 2- constructor function called
// 3- pass this arguments/ values in this new object
// 4- give us new object 
