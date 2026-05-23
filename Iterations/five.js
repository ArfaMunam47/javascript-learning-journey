// 25-05-2026 WORK
let coding=["js","ruby","html","swift","c++","java"]
// console.log(coding); // will print this array
//  --------------------- FOR EACH LOOP -------------------------------
coding.forEach( function (item){
// console.log(item); // will give this array items one by one

})
// iN CALLBACK FUNCTION HERE, WE DON'T GIVE FUNCTION NAME
//  USING ARROW FUNCTION
coding.forEach( (val) => {
    // console.log(val);
    
})
// CAN ALSO GIVE FUNCTION
function name(item){
    console.log(item);
    
}
coding.forEach(name) //  here we just give name of function

// can also access index , items and full array
coding.forEach( (item, index, array) =>{
    console.log(item,index,array);
    
})
//  ARRAY OF DIFFERENT OBJECTS 
let arr=[
    {
        name:"Arfa Munam",
        age:20,
        semester: "4th",
        cgpa:3.49
    },
    {
        name:"Sania Safdar",
        age:22,
        semester: "3th",
        cgpa:3.3
    },
    {
        name:"Ayesha Rafaqat",
        age:20,
        semester: "6th",
        cgpa:2.49
    },
    {
        name:"Sadia Farooq",
        age:20,
        semester: "4th",
        cgpa:3.42
    },
    {
        name:"Waqar-ul-Hassan",
        age:20,
        semester: "7th",
        cgpa:3.65
    },
]
arr.forEach( (item) => {
console.log(item); // will print everything
console.log(item.name); // will print only  names
console.log(item.semester); // will print only semester


}) // THIS WILL USED MOSTLY IN CODING AND PROJECTS WHERE WE'LL ACCESS ITEMS IN OBJECTS OF AN ARRAY