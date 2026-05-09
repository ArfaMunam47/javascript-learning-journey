// -------------- IIFE -----------------------
// ------------ Immediately Invoked Function Expression ----------------------
(function name(){
    console.log(`My name is Arfa Munam`);
    
}) (); //semi colon is important
//if we don't use semi colon here we'll get an error
// name()
(function one(){
    console.log("Just checking IIFE");
    
}) ();

// ------------ ARROW FUNCTION CHECKING --------------------
( () =>{
    console.log(`Arrow Function Testing IIFE`);
    
})();
// ---------- GIVING PARAMETERS TOO --------------------
console.log(( (num1,num2)=>num1+ num2)(33,44));
console.log(((num1)=>num1+1)(5));

//------------- Declaring Variable in ARROW FUNCTION & checking IIFE -----------------------------
let two=( (num3,num4)=>num3*num4)(3,4)
console.log(two);
let three= ((num)=>num/5)(15)
console.log(three);


