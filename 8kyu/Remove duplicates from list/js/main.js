/*
DESCRIPTION

Define a function that removes duplicates from an array of 
numbers and returns it as a result.

THe order of the sequence has to stay the same
*/


//Function
function distinct(a) {
    let arr = []
    return a.forEach((c) => {
        if (!arr.includes(c)) {
            arr.push(c)
        }
    })
}

//Test cases 
console.log(distinct([1])) //[1]
console.log(distinct([1,2])) //[1,2]
console.log(distinct([1,1,2])) //[1,2]