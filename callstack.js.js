function one(){
    console.log("this is file one")
    two()
}
function two(){
    console.log("this is file two")
    three()
}
function three(){
    console.log("this is file three")
}
one()
two()
three()