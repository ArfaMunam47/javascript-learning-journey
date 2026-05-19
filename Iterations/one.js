// 19-05-2026 WORK
// FOR LOOP 
//  Loop (Iterations)
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}
// console.log(element); //will give us error because of scope which is not accessible outside the  braces
// CTRL D (for selecting and renaming name appearing in multiple locations)
for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j < 7; j++) {
       console.log(`Outer loop : ${i} and Inner loop : ${j}`);      
    }
  
}

// Checking multiplication here
for (let i = 0; i <= 5; i++) {
    // console.log(`Outer loop : ${i}`);
    for (let j = 0; j < 7; j++) {
    //    console.log(`Outer loop : ${i} and Inner loop : ${j}`);  
    console.log(i + '*' + j + '=' + i * j);
        
    }
  
}