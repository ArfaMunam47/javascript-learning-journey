// Interview PERSPECTIVE
console.log(Math.PI)
Math.PI= 45
console.log(Math.PI)
// We can't change it. This PI value is fixed
const pi= Object.getOwnPropertyDescriptor(Math,'PI')
console.log(pi)
const user={
    name:'Afaq',
    email:'afaqmirza00@gmail.com',
    password:'afaq123'
}
console.log(Object.getOwnPropertyDescriptor(user,'name'))
Object.defineProperty(user,'name',{
    writable: false, 
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user,'name'))
// LET'S CHECK THIS OUT
for (let [key,value] of Object.entries(user)) {
    console.log(`${key} : ${value}`)
}
// DIDN'T GET NAME BECAUSE WE CHANGE THAT NAME PROPERTY AND FIXED THAT SO WE CAN'T NOW ACCCESS THAT THROUGH LOOP