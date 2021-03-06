/*
Wilson primes satisfy the following condition. Let P represent a 
prime number.
Then,

((P-1)! + 1) / (P * P)

should give a whole number.

Your task is to create a function that returns true if the given 
number is a Wilson prime.
*/

//function

const amIWilson = p => [5, 13, 563].indexOf(p) > -1
//test cases
console.log(amIWilson(5)) //true
console.log(amIWilson(9)) //false
console.log(amIWilson(6)) //false