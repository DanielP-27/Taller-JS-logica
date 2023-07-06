// Cree una función con dos argumentos que devolverá una lista de los primeros n múltiplos de x.
// Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.
// Devuelve los resultados como una lista. 
// Entrada:    countBy( 1, 10 );
// Salida:     [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// Entrada:    countBy( 2, 5 );
// Salida:     [ 2, 4, 6, 8, 10 ]

// Write a function with two arguments that will return a array of the firts n multiples of x.
// suppose that the given number and the number of times that the function should count are positives numbers greater than 0.
// Return the result in an array.
// input:   countBy( 1, 10 );
// output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// input:   countBy( 2, 5 );
// ouput: [ 2, 4, 6, 8, 10 ]

function multipleOf (number, limit) {
  let multiples = []; 

  let i = 1;
  do {
      if (i % number == 0) {
          multiples.push(i); 
          // console.log(i);
      }
      i ++;  
  } while (multiples.length < limit ) 
  return multiples;
}

console.log(multipleOf (2, 5));
