/*
DESCRIPTION:

Jenny has written a function that returns a greeting for a user.
However, she's in love with Johnny, and would like to greet him 
slightly different. She added a special case to her function, but 
she made a mistake.

Can you help her?
*/

//function to debug
/*
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
*/

function greet(name){
   if(name === 'Johnny') {
       return 'Hello, my love!'
   }
   else{
       return `Hello, ${name}!`
   }
}
console.log(greet("Jim")) //"Hello, Jim!"
console.log(greet("Jane"))//"Hello, Jane!"
console.log(greet("Simon"))//"Hello, Simon!"
console.log(greet("Johny"))//"Hello, my love!"