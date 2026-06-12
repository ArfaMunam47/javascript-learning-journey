// fetch('').then().catch().finally()
const promiseOne= new Promise(function(resolve,reject){
    //asyn code
    // db call network call cryptography
    setTimeout(function(){
console.log('Fuck you')
resolve()
    },2000)
})
promiseOne.then(function(){
    console.log('Promise consumed')
})