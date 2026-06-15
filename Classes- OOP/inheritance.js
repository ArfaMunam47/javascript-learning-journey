class User{
    constructor(username){
        this.username=username
    }
    log(){
        console.log(`Username is : ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password,semester){
        super(username)
        this.email=email
        this.password=password
        this.semester=semester
    }
    addCourses(){
        console.log(`Course was added by : ${this.username}`)
    }
}
const tch1=new Teacher('Iram Mughal','iram000@gmail.com','234','5th')
console.log(tch1)
tch1.log()
tch1.addCourses()
const user1=new User('Arfa Munam')
user1.log()
// user1.addCourses() //will give us error
console.log(User === Teacher) //false
console.log(user1 === tch1) //false
// ____________ instance of _________________ (check whether child or not)
console.log(user1 instanceof User) //true
console.log(tch1 instanceof Teacher) //true
console.log(tch1 instanceof User) //true
console.log(user1 instanceof Teacher) //false
