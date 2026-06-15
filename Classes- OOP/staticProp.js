class user{
    constructor(username){
        this.username=username
    }
    // STATIC KEYWORD MEANS _________ it belong to class but not the object. Means we can't access it in objects
    static log(){
        console.log(`Username : ${this.username}`)
    }
}
class course extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
    addCourse(){
        return `Courses added by ${this.username}`
    }
}
const course1= new course('Aleena','aleena002@gmail.com')
console.log(course1)
// course1.log()
console.log(course1.addCourse()) 