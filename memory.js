// There are two types of memory 1- stack memory 2- heap  memory
// stack memory (call  by value) for primitive datatypes
// heap memory (call  by reference) for non-primitive datatypes
// ********************************* Stack *********************//
let name = "Sania Safdar"
let other_name= name
 other_name = "Arfa Munam"
 console.log(name); //sania safdar
 console.log(other_name); //arfa munam
//  here the orignal value will not change because we share copy here

// ********************************* Heap *********************//
let userOne ={
    gmail:"sani0000@gmail.com",
    semester:"4th"
}
let userTwo= userOne
userTwo.gmail="arfa624@gmail.com"
userTwo.semester="7th"
// userTwo.gmail="arfabutt624@gmail.com"
// userTwo.semester="6th"
console.table([userOne,userTwo])
//here both values will be change becayse we share orignal value here 
// console.log(userOne.gmail)
// console.log(userTwo.gmail)
// console.log(userOne.semester)
// console.log(userTwo.semester)