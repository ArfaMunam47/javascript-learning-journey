// 21-05-2026 WORK
// FOR OF LOOP
// ["arfa","hitesh","abubakar","Laraib"]
// [{},{},{},{}]
// We used For Each LOOP to access Arrays , Strings & Objects
let myArr=[1,2,3,4,5,6,7]
for (const i of myArr) {
    // console.log(i); //will print each no. one by one
    console.log(`Value is ${i}`);
}
let name= "Arfa Munam Butt"
for (const element of name) {
    if  (element == " "){
        // break // will end printing if space occur
        continue //will eliminate space
    }
    console.log(`Character is ${element}`); // will print each character one by one
    
    
}