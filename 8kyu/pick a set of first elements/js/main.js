/*
DESCRIPTION:

Write a function to get the first element(s) of a sequence. 
Passing a parameter n (default=1) will return the first n 
element(s) of the sequence.

if n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first (arr) // => ['a'];
fist(arr, 2) //=> ['a', 'b']
fist(arr, 3) // => ['a', 'b', 'c'];
fist(arr, 0) // => [];
*/

//function
function first(arr, n =1 ) {
    if (n == 0){
    return [];
    }else if(n>0){
      return arr.slice(0, n);
      }
 }
//Test cases
console.log(first([... arr])) // ,        ['a']
console.log(first([...arr])) // 2 , ['a', 'b']