// Escribe una función que tome una lista de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la lista no contiene ningún número, debe devolver 0.
// Resultados esperados

// Write a function that takes an array of numbers and return the adittion of them. The numbers might be negatives or integers. If the array does not have any number, it must return 0. 

const numbers = [1, 2, 9, 10, -2];
let sum = 0;

numbers.forEach (num => {
  sum += num;
})

console.log(sum);
