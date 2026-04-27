//Array Part 2
// Array Methods
// ---------------------------- PUSH -------------------------------
let arr1=[0,1,2,3]
let arr2=[4,5,6,7]
arr1.push(arr2)
console.log(arr1);//will consider arr2 as single object
console.log(arr1[0]); //0
console.log(arr1[3]); //3
console.log(arr1[4]); // complete another array
console.log(arr1[4][2]); // 6  (2nd element of 4th array)

let arr3=['a','b','c']
let arr4=['d','e','f']
let arr5=arr3.push(arr4)
console.log(arr5); //will give length of both array which will be 3

// ---------------------------- CONCAT -------------------------------
let arr6=["arfa","julie","irsha"]
let arr7=["munam","khan","noor"]
let arr8=arr6.concat(arr7)
console.log(arr8); // will add all elements into an array separately
//modern developer don't use concat method nowadays 
let arr9=[1,2,3]
let arr55= arr9.concat({name:"ayesha", class:"10th" , section: "A"})
console.log(arr55)

// ----------------------------- SPREAD OPERATOR ----------------------------
let arrA=['g','h','i']
let arrB=['j','k','l']
console.log([...arrA,...arrB]) //most commonly used method in JS

//----------------------------------- FLAT METHOD --------------------------
let arrC=[ 1,2,3,4,[5,5,5],6,7,8,[9,9,9,[0,0,0,[6,6,6]]]] // array consisting of sub arrays
console.log(arrC.flat(Infinity)) // we give depth in flat and it convert all arrays into a single array

//-------------------------- Questions ------------------------
// +++++++++++++++++++++++++++ isArray ++++++++++++++++++++++++
console.log(Array.isArray("arfa")) // answer will be false
console.log(Array.isArray(["arfa",true,55])) // answer will be true

//++++++++++++++++++++++++++++++ From Method +++++++++++++++++++++++++
console.log(Array.from("arfa")) // will convert this into an array
console.log(Array.from([..."arfa",..."ayesha"])) // will convert this into an array
// can also use OBJECTS
console.log(Array.of({name: "ayesha", cast: "mughal" ,section:" B"})) // will convert into an array
  //+++++++++++++++++++++++++++ OF METHOD ++++++++++++++++++++++++++++++
  let score1= 100
  let score2= 200
  let score3= 300
  let score4= 400
  let score5= 500
  console.log(Array.of(score1,score2,score3,score4,score5)) // will add all the elements
  console.log(Array.of({name: "ayesha", cast: "mughal" ,section:" B"})) // will add all the elements

  

