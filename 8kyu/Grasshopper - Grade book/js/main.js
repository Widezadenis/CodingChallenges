/*
DESCRIPTION:

GRADEBOOK

Complete the function so that it finds the average of the three 
scores passed to it and returns the letter value associated with 
that grade.


Numerical Score	                Letter Grade
90 <= score <= 100	            'A'
80 <= score < 90	            'B'
70 <= score < 80	            'C'
60 <= score < 70	            'D'
0 <= score < 60                 'F'

Tested values are all between 0 and 100. Theres is no need to 
check for negative values or values greater than 100.
*/

//Fucntion
function getGrade(s1, s2, s3) {

}
//Test Cases
console.log(getGrade(95, 90, 93)) // 'A'
console.log(getGrade(100, 85, 96)) //'A'
console.log(getGrade(92,93,94)) //'A'

console.log(getGrade(70, 70, 70)) // 'B'
console.log(getGrade(82,85,87)) //'B'
console.log(getGrade(84,79,85)) // 'B'
console.log(getGrade(89,89,90)) // 'B'

console.log(getGrade(70,70,70)) // 'C'
console.log(getGrade(60,82,76)) // 'C'
console.log(getGrade(60, 82, 76)) // 'C'