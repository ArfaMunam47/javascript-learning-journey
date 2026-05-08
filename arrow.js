//Here we'll going to discover this object and arrow function
let obj={
    name:"Arfa Munam Butt",
    semester:"4th",
    welcomeMessage:function(){
        console.log(`${this.name}. Welcome to this website!`);
        console.log(this); //will give us whole object
        
        
    }
}
//_________ THIS refers to current context ________________
obj.welcomeMessage()
obj.name="Abubakar Shehbaz"
console.log(obj.name);

obj.welcomeMessage()
console.log(this); //will give us empty object
// log(THIS) will give different result in console 
function sub(){
    console.log(this);// will not be empty..and will give different result
    
}
sub()
console.log(this); //will be empty object 
// THIS gives different result in OBJECTS & FUNCTIONS 


function add(num1,num2){
    return num1 + num2
}
console.log(add(33,33));

// ------------------------- ARROW FUNCTION CONCEPT --------------------------------------
let name=(num1,num2) =>{
    return num1-num2
}
console.log(name(66,33));

let other=(num1,num2)=>num1-num2
console.log(other(60,33));

let anOther=(num1,num2)=>(num1-num2) //will mostly used in react
console.log(anOther(60,33));

let test=(num1) =>({name: "Arfa", semester: "4th"})
console.log(test()); // will give us object

