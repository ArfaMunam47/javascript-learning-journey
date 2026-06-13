// 13-06-2026 WORK
// fetch('').then().catch().finally
// PROMISE CONCEPT
// PROMISE __________ placeholders to keep values. values to be used in futurn are kept in promises
// THREE STATES OF PROMISE ___ pending ___ fulfilled __ rejected
// PROMISEONE
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

// PROMISETWO
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Billionaire Mentorship Guidance')
        resolve()
    },2000)
}).then(function(){
    console.log('Hey there!! Whats up')
})
// PROMISETHREE
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Billionaire Mentorship Guidance Program')
        resolve()
    },3000)
})
promiseThree.then(function(){
    console.log('Discipline your thoughts')
})
// PROMISEFOUR  _______________  parameters passed
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:'Julie Khan',gender: 'thirdGender'})
    },4000)
})
promiseFour.then(function(user){
    console.log(user)
})
// PROMISEFIVE _________ we can pass multiple then() in promises 
// catch() __________ used for holding errors
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error= true
        let error= false
        if(!error){
            resolve({name:'Arfa Munam', email:'arfamunam01@gmail.com'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFive.then(function(user){
    console.log(user)
    return user.email
}).then(function(email){
    console.log(email)
}).catch(function(error){
    console.log(error)
})

