// DETAIL KNOWLEDGE ABOUT FETCH METHOD()
// fetch() _________ modern method
// before this ____________ XMLHTTPREQUEST() USED _________ that was slow 
// FETCH() ______ make synchronous calls in web applications

// ______________ SYNTAX

// async function name(){
// const data= await fetch()
// const response= await data.json()
// console.log(response)}

// 2ND METHOD OR SYNTAX

// fetch('')
// .then(function(user){
//  return user.json()})
// .then(function(json){
// console.log(json)})
// .catch(function(error){
// console.log(error)})

// in FETCH (), we can also take objects 
// fetch('',{
// method:'GET',
// header: [
// ]})

// in FETCH, it returned PROMISES
// in FETCH(), THERE ARE HIGH PRIORITY QUEUE OR MICRO TASK QUEUE 
// THE CODE OF FETCH() WILL BE EXECUTED BEFORE ANY CODE 

// _________________________________ DIAGRAM
// JS ENGINE --> WEB BROWSER/API --> TASK QUEUE --> RETURN TO call stack in js engine
// WEB BROWSER/ API --> FETCH() --> MICRO TASK QUEUE/HIGH PRIORITY QUEUE --> RETURNED TO CALL STACK IN JS ENJINE
// JS ENGINE CONSIST ( CALL STACK[GLOBAL EXECUTION QUEUE THEN FUNCTION LOAD ONE BY ONE ] AND HEAP MEMORY[MEMORY ALLOCATION ])
// WEB BROWSERS --> METHODS THEN REGISTER CALL BACK --> IT GO TO TASK QUEUE THEN
// FETCH() is a special method which make DEVELOPER LIFE EASIER