// 18-05-2026 WORK
// Truthy and Falsy  Values CONCEPT
// const email= "arfamunam01@gmail.com" 
 const email= "" //will be falsy value
if(email){
    console.log("Got the email");
    
}else{
    console.log("Didn't get the email");
    
}
// ----------------------- FALSY VALUES
//  0 , -0, false , null , undefined , Nan , bigInt
// ----------------------- TRUTHY VALUES
// {}obj , [] array, function(){}, "0", " ", 'false'
// const name= " "     //truthy
// const name= {}         //truthy
// const name= function(){}      //truthy
const age= {}
if(Object.keys(age).length=== 0){
    console.log("We got the empty object");  //Accessing empty OBJECT
    
}
const name= [] //truthy
if(name.length=== 0){
    console.log("Array is empty"); //Accessing empty ARRAY
}else{
    console.log("We have array elements");
    
}
if(name){
    console.log("Name is given here");
}else{
    console.log("Didn't mention the name here");
    
}

// NULLISH COALESCING OPERATION    -----null -----------undefined
// const score = 10 ?? 20   //10
// const score = null ?? 20        //20
const score = undefined ?? 20      //20
console.log(score);

// ------------------ TERNIARY OPERATOR
// condition ? true : false ;           ---syntax
const val= 500
val >=200 ? console.log("Val is greater than 200"): console.log("Val is less than 200");

// JUST REVISING THE CONCEPT
const semester= 4
if(semester >=3) console.log("Semester is greater"), console.log("Semester is lower");  // bad practice // not prefferable

// SWITCH STATEMENT
const month= 4
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        break;
}

// GOOGLE CONSOLE 
// false == 0 -------------------true
// false == '' -------------------true
// '' == 0 -------------------true


