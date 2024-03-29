/*
DESCRIPTION:

Write a function that calculates the original product price, 
without VAT.

Example:

If a product price is 200.00 and VAT is 15%, then the final 
product price (with VAT) is: 200.00 + 15% = 230.00)

Thus, if your function receives 230.00 as input, it should 
return 200.00

Notes:

VAT is always 15% for the purposes of this kata.
Roud the result to 2 decimal places.
if null value given then return -1
*/

//function

/* returh price without vat*/
function excludingVatPrice(price) {
    // your code
    if(price === null) {
        return -1
    }
    else {
        return Number((price/ 1.15).toFixed(2))
    }
}
//Test Cases
console.log(excludingVatPrice(230)) //200.00
console.log(excludingVatPrice(123)) //106.96