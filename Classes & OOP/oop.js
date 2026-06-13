const user={
    name:'Arfa Munam',
    loginCount:9,
    signedIn:true,
    getUserData:function(){
        console.log('Got the necessary details')
        console.log(`Username: ${this.name}`)
        console.log(this)
    }
}
console.log(user.getUserData())
console.log(user.signedIn)
console.log(this)

// constructor function ____________________ new keyword
// const promiseOne=new Promise()
// const date= new Date()

function getData(username,isLoggedIn,age){
    this.username=username
    this.isLoggedIn=isLoggedIn
    this.age=age
    this.check= function(){
        console.log('just checking the concepts')
    }
    return this
}
// new keyword is basically used 
const data1= new getData('Arham Farooq',true,23)
console.log(data1.constructor) 
const data2=new getData('Anashra Noor',false,24)
console.log(data2)
// new ___________ 
// 1- new context create
//  _________ 2-constructor function call
//  ______________ 3- passed arguments into this
//  _____________ 4- give us values