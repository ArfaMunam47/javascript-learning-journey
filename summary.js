// there are two types of datatypes
// primitive and non primitive
// #Primitive datatypes (7) string number bigInt boolean null undefined symbol(unique)
const name = "arfa"
console.log(typeof name);//1
const age = 13
console.log(typeof age);//2
const num = 133333n
console.log(typeof num);//3
const outTemp= null
console.log(typeof outTemp);//4
let userEmail;
console.log(typeof userEmail);//5
const isLoggedIn= false
console.log(typeof isLoggedIn);//6
let id= Symbol('124')
let anotherId= Symbol('💕')//7
console.log(id);
console.log(anotherId);

// console.log(id ===anotherId)
//symbols will not be equal to each other they will return different values

// #Non-Primituve datatypes (3) Array objects functions
const array=["arfa","ayesha","laraib","zoha"]  //array
// console.log(array)
let myObj= {
    name:"arfa munam",
    age:20,
    semester:"4th"
}// declaring object with name
console.log(myObj);

//to maste JS, master objects and browser events
({
    name:"arfa munam",
    age:20,
    semester:"4th"
 });//declaring oobject without name
// console.log(myObj);

//***************************** Functions**************************/
const myFunction= function(){
    console.log("Hello World")
}
myFunction();

// JS is dynamically typed language not statically types because here we don't have to define datatypes