// 15-06-2026 WORK
// GETTER AND SETTER CONCEPT
class user{
    constructor(username,password,email){
        this.username=username
        this.password=password
        this.email=email
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(name){
        this._username=name
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(name){
        this._password=name
    }
}
const user1= new user('Sundas','@abc','sundas00@gmail.com')
console.log(user1.username)
console.log(user1.password)