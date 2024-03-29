/*
Write a function that checks if a given string 
(case insensitive) is a palindrome
*/

//Function
function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase()  === x.toLowerCase() ? true : false
}
//Test Cases
console.log(isPalindrome("a")) //true
console.log(isPalindrome("aba")) //true
console.log(isPalindrome("Abba")) //true
console.log(isPalindrome("hello")) //false
console.log(isPalindrome("Bob")) //true
console.log(isPalindrome("Madam")) //true
console.log(isPalindrome("AbBa")) //true
console.log(isPalindrome("")) //true