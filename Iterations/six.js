// 24-05-2026
let array=[0,1,2,3,4,5,6,7,8,9,10]
let num= array.forEach( (item) =>{
    // console.log(item);
    return item
    
})
console.log(num); //undefined
// FOR EACH LOOP don't return values
// FILTER CONCEPT
// let num2= array.filter((item) => item>=5)
// let num2= array.filter((item) => (item>=5))
let num2= array.filter((item) => {
    return item>=5
})
console.log(num2); //filter return values, it is also a call back function 

// To make FOR EACH LOOP return VALUES
let newArr=[]
let num3=array.forEach((item)=>{
if(item>=5)
    newArr.push(item)
})
console.log(newArr);


