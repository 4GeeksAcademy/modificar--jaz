

const add = (x,y) => x+y;
const subtract =(x,y) => x-y;
const accumulate  = (current, value) => current + value ;
 
let result = add (5,10);
console.log (result);

result = accumulate(result,6);
result = subtract (result,12);

console.log(result);