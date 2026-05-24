// 24-05-2026
// MAP METHOD
let array=[1,2,3,4,5,6,7,8,9,10]
let num= array.reduce(function(acc,currval){
    return acc + currval
},0)
console.log(num);
num=array.reduce((acc,currval) => acc + currval, 0)
console.log(num);
// EXAMPLE
let shoppingCart= [
    {
        itemName: "JS Course",
        price: 2999,
    },
    {
        itemName: "HTML Course",
        price: 2900,
    },
    {
        itemName: "CSS Course",
        price: 6999,
    },
    {
        itemName: "JAVA Course",
        price: 1999,
    },
    {
        itemName: "RUBY Course",
        price: 5999,
    },
    {
        itemName: "SWIFT Course",
        price: 3999,
    },
]
let num2=shoppingCart.reduce((acc, item) => ( acc + item.price),0)
console.log(num2);
// REDUCE METHOD GIVE US SUM BASICALLY BUT TO GIVE INITIAL VALUE IS IMPORTANT HERE


