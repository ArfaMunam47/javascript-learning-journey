// 15-06-2026 WORK
class User{
    constructor(username,email, password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const user1= new User('Arfa Munam','arfa01@gmail.com','123')
console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())

// BEHIND THE SCENES _____________ gonna use function
function user(username,email,password){
    this.username=username
    this.email=email
    this.password= password
}
user.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
user.prototype.changeUserName=function(){
    return `${this.username.toLowerCase()}`
}
const user2= new user('Tayba Irfan','tayba001@gmail.com','345')
console.log(user2)
console.log(user2.encryptPassword())
console.log(user2.changeUserName())
