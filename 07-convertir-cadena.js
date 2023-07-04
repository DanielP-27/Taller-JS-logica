// Escriba una función para dividir una cadena y convertirla en una lista de palabras.
// Resultados esperados:
// Write a function to divide a string and turn it into an array of words. 
// Expected results: 
// Entrada:    "Robin Singh" 
// Salida:     ["Robin", "Singh"]
// Entrada:    "Me encantan los arreglos, son mis favoritos"
// Salida:     ["Yo", "amo", "arreglos", "ellos", "son", "mi", "favorito"]
// stringToDivide, toArray

function convertToArray(stringToSplit, separator) {
  return stringToSplit.split(separator);
}

const stringToSplit = "Me encantan los arreglos, son mis favoritos";
const separator = ' ';

const result = convertToArray(stringToSplit, separator);
console.log(result);
