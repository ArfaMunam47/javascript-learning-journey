// ControlFlow  ........Logic Flow
// ------------------------- IF
// if(condition){

// }else{

// }   //------syntx
if(true){
    console.log("This will be shown in terminal because the condition is true");
    
}
if(false){
    console.log("This will not get printed");
    
}
if( 2 == "2"){
    console.log("This will not check the datatype");
    
}
if( 2 != "2"){
    console.log("This will not check the datatype");
    
}
console.log("The above statement is false so this console will be printed");
// == , != , < , > , === , !==, <= ,>=
if ("2" === "2"){
    console.log(`Will check the datatype`);
    
}
console.log('This will also printed because JS will treat it as separate line of code');
const isUserLoggedIn = true
const temperature = 50
if(temperature > 60){
    console.log("Temperature is greater than 60");
    
} else{
    console.log("Temperature is less than 60");
    
}
if (isUserLoggedIn !== false){
    console.log(`This check strictly not equal to`);
    
}
console.log(`Hello world. just did some random work`);

