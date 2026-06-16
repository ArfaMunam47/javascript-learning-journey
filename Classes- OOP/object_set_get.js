const user={
    _username:'Arfa Munam',
    _email:'arfamunam01@gmail.com',
    get username(){
        return this._username.toUpperCase()
    },
    set username(name){
        this._username=name
    },
       get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const user1= Object.create(user)
console.log(user1.username)
console.log(user1.email)

// _____________________ this case is rarely used