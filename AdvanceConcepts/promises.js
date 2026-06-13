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

// PROMISE FIVE ________________ We can pass multiple then in async code
const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        // const error= true
        const error= false
        if(!error){
            resolve({name:'JS',password:'@123'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFive.then(function(user){
    console.log(user)
    return user.name
}).then(function(name){
    console.log(name)
}).catch(function(error){
    console.log(error)
})
// TRY CATCH METHOD 
// TO GRACEFULLY HANDLE OUR ASYNC CODE
// PROMISE SIX ________________ We can pass multiple then in async code
const promiseSix= new Promise(function(resolve,reject){
    setTimeout(function(){
        const error= true
        // const error= false
        if(!error){
            resolve({name:'SWIFT',password:'@123'})
        }else{
            reject('ERROR: SWIFT went wrong')
        }
    },2000)
})
async function consumePromiseSix(){
    try {
        const response= await promiseSix
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseSix()

// FETCH METHOD()
async function getUserData(){
   const data= await fetch('https://jsonplaceholder.typicode.com/users')
 const json=   await data.json()
 console.log(json)
}
getUserData()

// ANOTHER APPROACH
fetch('https://api.github.com/users/arfamunam47')
.then(function(data){
    return data.json()
})
.then(function(api){
    console.log(api)
})
.catch(function(error){
    console.log(error)
})
// VIDEO NO. 40 DONE