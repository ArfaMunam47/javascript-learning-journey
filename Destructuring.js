// DESTRUCTURING OF OBJECTS
let course={
coursename: "Javascript in Hindi",
coursefee:"3000",
courseteacher: "Hitesh Choudhary"
}
console.log(course.coursename);
 // Destructuring of Object Method
 const {courseteacher}=course
 console.log(courseteacher);
 //we can also rename them
  const {courseteacher : Instructor}=course
 console.log(Instructor);
 // mostly used in react code
 // REACT CODE EXAMPLE
//  const navbar({company}) =>{

//  }
// navbar(company: "Arfa Munam") 

// _______________________ API _____________________
//Api: application program interface ( a way for different programs to talk)

// ________________________ JSON ____________________________
// Json: javascript object notation ( used to store and share data)

// two ways of json 
// {
//     "name" : "Arfa",
//     "semester": "5th",
//     "rollno" : 47
// }
 // ARRAY OF DIFFERENT OBJECTS (JSON)
[
    {},
    {},
    {}
]
//JSON FORMATTER FOR UNDERSTANDING API KEYS
//RANDOMUSER GENERATOR FOR GETTING SOME API KEYS