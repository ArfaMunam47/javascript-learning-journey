// 13-06-2026 WORK
// fetch('').then().catch().finally
// PROMISE CONCEPT
// PROMISE __________ placeholders to keep values. values to be used in futurn are kept in promises
// THREE STATES OF PROMISE ___ pending ___ fulfilled __ rejected
// PROMISE ONE
const promiseOne= new Promise(function(resolve,reject){
    // JS ASYNC CODE
    // cyrptography -- network call -- DB call
    setTimeout(function(){
        console.log('Arfa, the billionaire mentor')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Hey there')
})
// then used for RESOLVE

// PROMISE TWO
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Billionaire Mentorship Guidance')
        resolve()
    },2000)
}).then(function(){
    console.log('Hey there!! Whats up')
})
// PROMISE THREE
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Billionaire Mentorship Guidance Program')
        resolve()
    },3000)
})
promiseThree.then(function(){
    console.log('Discipline your thoughts')
})
// PROMISE FOUR  _______________  parameters passed
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:'Julie Khan',gender: 'thirdGender'})
    },4000)
})
promiseFour.then(function(user){
    console.log(user)
})

// PROMISE FIVE
const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        const error= false
        // const error= true
        if(!error){
            resolve({name:'Julie Khan', gender:'thirdGender'})
        }else{
            reject('ERROR : Something went wrong')
        }
    },5000)
})
promiseFive.then(function(user){
console.log(user)
return user.gender
})
.then(function(gender){   // make code more readable and prettier
    console.log(gender)
})
.catch(function(error){
    console.log(error)
})
// we can use multiple then in our code / promises

// ANOTHER  METHOD (_______________ try catch()________________ )
// this is used for gracefully handling of things
// PROMISE SIX
const promiseSix= new Promise(function(resolve,reject){
    setTimeout(function(){
        const error= false
        // const error= true
        if(!error){
            resolve({name:'JS', password : '@123'})
        }else{
            reject('ERROR : JS went wrong')
        }
    },6000)
})
async function consumePromiseSix(){
   try {
    const response=  await promiseSix
   console.log(response)
   } catch (error) {
    console.log(error)
   }
}
consumePromiseSix()
