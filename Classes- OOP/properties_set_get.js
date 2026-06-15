function user(username,password){
    // this.password=password
    //_______________ username
    Object.defineProperty(this,'username',{
        get:function(){
            return this._username.toUpperCase()
        },
        set:function(name){
this._username=username
        }
    })
    //____________________ password
    Object.defineProperty(this,'password',{
        get:function(){
            return `${this._password}abc`
        },
        set:function(value){
this._password=value
        }
    })
     this.username=username
     this.password=password
}
const user1=new user('Bisma','345')
console.log(user1.username)
console.log(user1.password)