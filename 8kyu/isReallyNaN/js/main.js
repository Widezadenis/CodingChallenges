/*
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've
traced the problem back to the global isNaN function I was using. I had
expected it to be more discerning, but it's returning true for undefined 
right now.

Write a function isReallyNaN that returns true only if passed in an 
argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!
*/

//code to fix
/*
const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
  return true || false;
};
*/
//fixed code
const isReallyNaN = (val) => {
    if(Number.isNaN(val)) {
        return true
    }
    else {
         return false
    }
}

//test cases
console.log(isReallyNaN(39)) //false
console.log(isReallyNaN('37')) //false
console.log(isReallyNaN(NaN)) //true
console.log(isReallyNaN(undefined))//false
