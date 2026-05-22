// 21-05-2026 WORK Revision
// ["","",""]
// [{},{},{}]
// FOR OF LOOP
let myArr=["Arfa","Malaika","Atiya"]
for (const element of myArr) {
    console.log(element);   
}
let name="Arfa Munam Butt"
for (const i of name) {
    if(i  == " "){
        continue
        // break
    }
    console.log(i);
    
}

// 22-05-2026 WORK
//  MAP CONCEPT
const map= new Map()
// MAP is an object which contain KEY & VALUE pairs and keys should  be unique here
// MAPS are iterable
map.set("a",1)
map.set("b",2)
map.set("c",3)
map.set("d",4)
console.log(map.size); // will give us size of map
console.log(map.get("a"));
console.log(map.get("b"));
console.log(map.get("c"));
map.delete("d")
console.log(map.size);
// Maps are iterable
// for (const key of map) {
//     console.log(key);
    
// }
// TO GET KEY AND VALUE SEPARATELY
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}
// OBJECTS ARE  NOT ITERABLE 
// WE'LL CHECK IT HERE
// let obj={
//     name:"Khawaja Hayan",
//     age: 18
// }
// for (const [key, value]  of obj) {
//     console.log(key, ':-', value);
    
// } // will give us error because 'OBJECTS ARE NOT ITERABLE'


