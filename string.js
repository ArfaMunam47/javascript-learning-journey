// string Lecture
const name= "Arfa "
let age= 20
console.log(name + age + " years old"); //old method of storing data. Don't use this one
console.log(`My name is ${name} and my age is ${age}`)// modern method of storing string or data
 //another method of storing string
 const otherName= new String('Sania Safdar')
 console.log(otherName)
console.log(otherName.__proto__)
// we'll check some functions here one by one
console.log(otherName[0])// this will check index of
// we'll check some functions like proto ..indexOf ..charAt ..toUpperCase ..toLowerCase ..substring ..slice ..split 
// ..includes ..replace ..length ..trim()
console.log(otherName.toUpperCase())
console.log(otherName.toLowerCase())
console.log(otherName.indexOf('d'))
console.log(otherName.indexOf('i'))
console.log(otherName.charAt(4))
console.log(otherName.charAt(9))
console.log(otherName.length)
console.log(otherName.substring(0,6)) //We'll give starting and ending value here 
console.log(otherName.slice(6,-3)) //We'll give starting and ending value here 
console.log(otherName.slice(1,6)) //We'll give starting and ending value here 
console.log(otherName.slice(1,-5)) //We'll give starting and ending value here 
// the difference  between substring and slice is we cannot give negative value in substring. The starting value must be greater than ending value in slice
// slice is very important method or function in JS
const game = new String('arfa-munam-sania-safdar-ayesha-rafaqat')
console.log(game.split('-'))//this will convert string into object and split it down and will show it like an array
const url = "https://www.beyondthedarkweb.com"
console.log(url.replace('www','hhh'))
console.log(url.includes('www'))
console.log(url.includes('hhh'))
//this is all about strings in 11 video of JS that is about String
//trim method() it remove extra space
const newName = "          Ali                     "
console.log(newName)
console.log(newName.trim())
console.log(newName.trimStart())
console.log(newName.trimEnd())