// Crea una función flecha y asígnala a una variable obtenerImpares. La función debe recibir un arreglo de números y retornar todos los impares.
// Nota: Utiliza el método filter y pásale una función flecha como argumento.

// Create an arrow function and asign it a variable called "obtenerImpares". This function should recieve an array of numbers and return all the odd numbers.
// Note: use the filter method and pass it the array function as argument. 


let obtenerImpares = (arr) => arr.filter(elem => elem % 2 !== 0);

console.log( obtenerImpares( [ 1, 2, 3, 4, 5, 7] ) );
console.log( obtenerImpares( [ 64, 35, 27, 22, 31 ] ) );
console.log( obtenerImpares( [] ));

