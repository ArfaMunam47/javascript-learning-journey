// 16-06-2026 REVISION
// SETTER AND GETTER FUNCTION
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(name){
        this._username=name
    }
    get password(){
        return `${this._password}#23`
    }
    set password(value){
        this._password=value
    }
}
const user1= new user('Arfa','arfamunam01@gmail.com','@123')
console.log(user1.username)
console.log(user1.password)