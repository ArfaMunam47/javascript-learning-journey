//Scope and Hoisting Concept in JS
function one(){
    const name= "Arfa Munam"
    function two(){
        const website= "Framer"
        console.log(name);
        
    }
    two()
    // console.log(website) this will surely give us error
    // Child can access parent scope but parent cannot access child scope which is called SCOPE & HOISTING in JS
    
    
}
// we call function outside the function but we cannot access members of functions outside the function.
one()
// console.log(name);

if(true){
    const name="Mehak Dastageer"
    if(name === "Mehak Dastageer"){
        const website=" Framer"
        console.log(website);
        console.log(name + website);
    }
    // console.log(name + website); will give us error surely
    console.log(name);
    
}
// console.log(name); will give us error

//____________________________________ Interesting Concept ____________________________________
console.log(addOne(55))
function addOne(num){
    return num + 1
}
// console.log(addOne(55))

// console.log(concept(55)); will give us error because we cannot call it before initialization
let concept=function subone(num){
    return num - 1
}
console.log(concept(55));
