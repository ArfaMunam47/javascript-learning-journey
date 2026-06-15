// SETTER AND GETTER FUNCTION 
class user{
constructor(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
//_________________ username
get username(){
    return this._username.toUpperCase()
}
set username(name){
    this._username=name
}
//________________________ password
get password(){
    // return this._password.toUpperCase()
    return `${this._password}@#`
}
set password(value){
    this._password=value
}
}
const user1= new user('Arfa','arfamunam01@gmail.com','abc')
console.log(user1.username)
console.log(user1.password)