// 18-06-2026 WORK
const myArr=[]
// %DebugPrint(myArr)
// WILL LEARN SOME DEEP CONCEPTS ABOUT ARRAY IN GIT BASH WHICH IS BASICALLY SHELL
// %DebugPrint tell us hidden details about Array and it is given is v8-debug.cmd
// GIT BASH
// pwd ----->ls -la
// node -v ---->npm -v
// npm install jsvu(JAVASCRIPT VERSION UPDATER) -g
// ~/.jsvu/bin
//  ~/.jsvu/bin/v8-debug.cmd
//  ~/.jsvu/bin/v8-debug.cmd --allow-natives-syntax
// cd (move)
// cmd (file name)
// cd OneDrive ---> cd Desktop ---> cd JS ---> cd 'fun with js'
// node test.js
// const myArr=[]  ----> %DebugPrint(myArr) ---> now will give us hidden details about Array
// v8 engine _____ Array 2 TYPES ----> 1: PACKED(continuous) don't have gaps  2:Holey (contain gaps)
// Array OPTIMIZATION (different)
// 1-SMI (small integer)
// 2-Packed Elements
// 3-Double(float, string, functions)

const newArr=[1,2,3,4,5]  //-- array contain elements and object contain properties
// Packed SMI 
newArr.push(6.7)
newArr.push('Hello')
// Packed Double 
console.log(newArr)
//  ________ ONCE THE ARRAY CONVERTED FROM SMI TO DOUBLE PACKED IT DOESN'T GET BACK TO SMI AGAIN. THIS IS HOW OPTIMIZATION WORK
//________________ Holey Array Made (now it contain gap)
newArr[10]= 'Interesting'
console.log(newArr.length) // length + 1
console.log(newArr[2]) // 3 because index start from 0
console.log(newArr[9]) // undefined
// in HOLEY ARRAY
// 1- boundcheck
// 2- hasOwnProperty
// 3- Array.prototype.hasOwnProperty
// 4- Object.prototype.hasOwnProperty

// Holes are very expensive in js  because of all the above mentioned steps
// TRY TO AVOID HOLEY ARRAY IN JS. IT CAN CAUSE LONGER OPTIMIZATION OR OPTIMIZATION PROBLEMS

console.log(newArr[9])
console.log(newArr.hasOwnProperty(9))
console.log(Array.prototype.hasOwnProperty(newArr,9))
console.log(Object.prototype.hasOwnProperty(newArr,9)) //we check this because everything in JS is object
// _____________ ORDER OF OPTIMIZATION IN ARRAY IN JS
// PACKED __________ THEN HOLEY ARRAY
// PACKED SMI > PACKED DOUBLE > PACKED ELEMENTS( objects )
// HOLEY SMI > HOLEY DOUBLE > HOLEY ELEMENTS( objects )

const arrTwo=new Array(3)
// HOLEY ELEMENTS
arrTwo[0]= 'A'
arrTwo[1]= 'B'
arrTwo[2]= 'C'
console.log(arrTwo)

// PACKED ELEMENTS
const arrThree= []
arrThree.push(1)
arrThree.push(2)
arrThree.push(3)
console.log(arrThree)

// Packed Double ELEMENTS
const arrFour=[1,2,3,4,5]
arrFour.push(NaN)
arrFour.push(Infinity)
console.log(arrFour)
// ONCE THE TYPE OF ARRAY GOES TO DOWNWARD, THEN IT DOES GOES TO UPWARD EVEN IF WE DELETE THE ELEMENTS
// PACKED SMI has faster execution
