

const add = (x,y) => x +y;
const subtract =(x,y) => x-y;
const accumulate = (current,value) => current + value ;

let result = add(5,10);
console.log(result);


result = subtract(6,12);
result = accumulate(result,6);


console.log(result);