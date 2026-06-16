function user(username,password,email){
    this.email=email
    // function is both object and function
    Object.defineProperty(this,'username',{
        get:function(){
            return this._username.toUpperCase()
        },
        set:function(name){
            this._username=name
        },
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return `${this._password}abc`
        },
        set:function(value){
            this._password=value
        },
    })
       this.username=username
       this.password=password
}
const user1= new user('Farooq','@123','farooq009@gmail.com')
console.log(user1.username)
console.log(user1.password)
// GETTER AND SETTER THROUGH PROPERTIES