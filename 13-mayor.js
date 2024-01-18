// Crea una función llamada max (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

// Nota: No utilices el método Math.max de JavaScript.

function max(array) {
  let numeroMayor = array[0];
  for (let i = 0 ; i < array.length; i++){
    if (array[i] < numeroMayor) {
        numeroMayor = array[i];
    }
  }
  return numeroMayor;
}

console.log(max([5, 2, 3, 4]));
