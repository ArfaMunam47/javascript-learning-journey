// 7-06-2026 WORK
// Javascript Asyn Code
// By defaults, JS is 
// 1-synchronous(one code execute at a time)
//  2-single threaded(one tast performed first then the other task will be performed)
// Execution CONTEXT (one tast is completed first then other task will be performed) 
// //--- call stack //--- heap memory
// Blocking CODE (block the flow of program e.g., READ FILE SYNCHRONOUS )vs NON Blocking Code (doesn't block the flow of program e.g., READ FILE ASYNCHRONOUS)
// Both synchronous and asynchronous have use cases we can't say one is best and other is not
// Diagram
// JS ENGINE (call stack & heap memory)-----> WEB API (browser[DOM] / node.js environment[API]) ---->TASK QUEUE (ADD CALL BACK ONE BY ONE) --->ADD TO CALL STACK
// JS ENGINE --CALL STACK --global execution context --function will be load one by one and after execution function will be unload one by one
// JS ENGINE --HEAP MEMORY --- memory allocation
// WEB API --settimeout --setinterval --- fetch()new api  in JS ( promises ----> promises QUEUE)
// WEB API --settimeout --Register Call Back --TAST QUEUE -- ADD TO CALL STACK
// TASK QUEUE .. make the JS functional, fast and asynchronous
// FETCH() -- promises --promises queue (HIGH PRIORITY QUEUE) which tell us function is completed or not then the same cycle continues like add call back one by one and then add to call stack
// ASYNCHRONOUS CODE means code will be executed and doesn't block the flow of program
// if console.log(1) then 0 time ( console.log(2)),then 3 then first 1 will  be printed then 3 because this is asynchronous then 2 will be printed 
// THEORETICAL CONCEPT
