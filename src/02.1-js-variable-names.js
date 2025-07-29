







const sumPositiveNumbers = numbers => numbers.filter(n => n > 0).reduce((a,b) => a+b,0);
const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(sumPositiveNumbers(numbers));
