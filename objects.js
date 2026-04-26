// OBJECTS PART 1
// Singleton  ( only single object )
// Object.create() this create a singleton object but we'll discuss it later
// Literal Object  ( how to create an object )
// ---------------key & value -----------------
let obj={
    name:"Arfa",
    "FULL_NAME" : "Arfa TechVenture",
    age:20,
    email:" arfabutt624@gmail.com",
    location:"Model Town, Hafizabad",
    semester:"4th",
    isLoggedIn:true,
    lastLoginDays:["Thursday","Saturday"]
}
// -------------------- ACCESS METHODS --------------------------
console.log(obj.name)
console.log(obj.semester)
console.log(obj.lastLoginDays) 
// -------------------- ANOTHER ACCESS METHODS --------------------------
console.log(obj["name"])
console.log(obj["isLoggedIn"])
console.log(obj["location"])
console.log(obj.FULL_NAME)
console.log(obj["FULL_NAME"]) // both are correct ways to access elements of an OBJECT

//------------------------ TO CHANGE ELEMENT OF AN ARRAY -------------------
obj.name="Sadia Farooq"
console.log(obj.name);
console.log(obj);

//---------------------------- Freeze Method -------------------------
Object.freeze(obj)
obj.name="Hassan Irfan Khalid"
console.log(obj.name);
console.log(obj); // it will not change the value because now we freeze it

//----------------------------- Symbols ---------------------------

// ++++++++++++++++++++++++ WRONG Method of using symbol ++++++++++++++++++++
let sym= Symbol("#US")
let obj2={
    sym:"#US",
    name: "Mehak Dastageer",
    location: " Gujrat",
    class: "FS2",
    email:"mehak001@gmail.com",
    section:"blue"
}
console.log(obj2.sym); // here it's type will be considered as string

// ++++++++++++++++++++++++ RiIGHT Method of using symbol ++++++++++++++++++++

let mySym= Symbol("#UAE") //DECLARATION IS IMPORTANT HERE
let obj3={
    [mySym]:"#UAE"
}
console.log(obj3[mySym]); //both results will be same but there will be difference in type and method used here

// _________________________________ Functions _________________________________
obj2.myFunc= function(){
    console.log("Hello JS Users")
}
obj2.myFunc()
console.log(obj2.myFunc()) // both are correct ways

obj2.newFuc= function(){
    console.log(`Hello World! This is  me, Mehak Dastageer , ${this.email}`)  // here we can use tactics (``) too and can give reference
    console.log(`Hello World! This is  me, Arfa Munam , ${this.location}`) // this operator is used to point out reference 
}
console.log(obj2.newFuc) //  just an investigation study 
console.log(obj2.newFuc())
