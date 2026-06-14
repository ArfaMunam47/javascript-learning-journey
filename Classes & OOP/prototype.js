let name='Arfa             '
console.log(name)
console.log(name.length)
console.log(name.trim().length)
// trueLength() function making ____________ TASK
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}
name.trueLength()
"ali                   ".trueLength()
"ali                   ".length
// ________________ TASK COMPLETED _____________________________ 
let myArr=[1,2,3,4]
let obj={
    1:'Arfa',
    2:'Sania',
    3:'Sehal',
    4:'Masooma',
    getName:function(){
        console.log(`Name is ${this.getName}`)
    }
}
Object.prototype.print=function(){
    console.log('Just checking things')
}
Object.prototype.getData=function(){
    console.log('Just Exploring JS')
}
myArr.print()
obj.getData()
// When we make functions in OBJECT then we can access that through anywhere 
Array.prototype.check=function(){
    console.log('Kinda confusing')
}
myArr.check()
// obj.check() //not gonna happen
// ___________________________ INHERITANCE
// ________ old method of attaching properties _________
const student={
    name1:'Arfa',
    name2:'Atiya',
    name3:'Masooma',
    name4:'Rida',
    name5:'Namra'
    
}
const courses={
    course1:'DSA',
    course2:'Writing',
    course3:'Assembly',
    course4:'DB',
    __proto__:student
}
const semester={
    isSemester1:true,
    isSemester2:false,
    isSemester3:false,
    isSemester4:true
}
student.__proto__=semester //old method ______________ nobody use it now

// new method
// Object.setPrototypeOf('courses','student')
// Object.setPrototypeOf('semester','student')