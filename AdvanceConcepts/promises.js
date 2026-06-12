// promise concept
const promiseOne= new Promise(function(resolve,reject){
    // asyn code JS
    // --- db call --- network call --- cryptography
    setTimeout(function(){
console.log('Hey there')
resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Promise consumed')
})
//2nd method
new Promise(function(resolve,reject){
    // asyn code JS
    // --- db call --- network call --- cryptography
    setTimeout(function(){
console.log('Hey there!! Nice to meet you')
resolve()
    },2000)
}).then(function(){
    console.log('Promise 2nd time consumed')
})
// 3rd time
const promiseTwo= new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({name:'Arfa Munam',email:'arfamunam01@gmail.com',age:20})
    },3000)
})
promiseTwo.then(function(user){
    console.log(user)
})
//4th method

