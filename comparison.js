//Comparison check
console.log(9 > 2);
console.log(9 < 2);
console.log(9 >= 2);
console.log(9 <= 2);
console.log(9 == 2);
console.log(9 != 2);
//this will work easily and properly because datatypes are same
//code should  be clean and readable 
console.log(null >= 0);//true
console.log(null <= 0);//true
console.log(null == 0);//false
console.log(null != 0);//true
//the reason is comparison operator and equality check works differently. Comparison check convert null into a number that's why null >= 0 is true and null == 0 is false.
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined != 0);
//Datatypes should be same when doing comparison. some languages like typescript doesn't allow comparison of different datatypes

/***************** ===  ********************/
// === checks comparison strictly and also check the datatypes
console.log( "2" === 2); //false
console.log( "2" === "2"); //true
console.log( 2 === 1); //false
console.log( 3 === 3); //true