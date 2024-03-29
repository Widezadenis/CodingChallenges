/*
DESCRIPTION:

This function should test if the factor is a factor of a base.

Return true if it is a factor ir false if it is not

About Factors

Factors are numbers you  can multiply together to get another number

2 and 3 are factors of 6 because 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 
then the number is a factor.

You can use the mod operator (%) in most languages to check for a 
remainder

For example 2 is not a factor of 7 because 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

//Fucntion
function checkForFactor(base, factor) {
    if(base % factor === 0) {
        return true
    }
    else {
        return false
    }

}
//Test Cases
console.log(checkForFactor(10,2)) //true
console.log(checkForFactor(653,7)) //false
console.log(checkForFactor(2450,5)) //false
console.log(checkForFactor(24612, 3)) //false
console.log(checkForFactor(9,2)) //false
console.log(checkForFactor(653, 7)) //false
console.log(checkForFactor(2453,5)) //false
console.log(checkForFactor(24617, 3)) //false