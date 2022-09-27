/*
DESCRIPTION:

Create a function that checks if a number n is divisible by two 
numers x AND y. All inputs are positive, non-Zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 
1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 
2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible 
by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither 
divisible by 7 nor 5
*/

//Function
function isDvisible(n,x,y) {
    if(n % x && n % y) {
        return true
    }
}
//Test Cases
console.log(isDvisible(3,3,4)) //false
console.log(isDvisible(12,3,4)) //true
console.log(isDvisible(8,3,4))//false
console.log(isDvisible(48,3,4))//true
