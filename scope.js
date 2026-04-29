//SCOPE CONCEPT
// let a=10
// const b=20
// var c=30
var c=500 // it will not get printed 
//in JS, we don't use VAR now because it confuses block{} like it has scope problem and can cause some bugs in code
let a=400 //GLOBAL SCOPE
if (true){
let a=10
const b=20
var c=30
console.log("INNER VALUE: ",a); //10

}
console.log(a);//400

// console.log(a);
// console.log(b);
// A Value can't be printed if not declares so a and  b will not get printed but c will get printed because it is confused  by {} blocks
console.log(c);
//there is a difference in GLOBAL VARIABLE of CODE ENVIRONMENT & CONSOLE IN GOOGLE