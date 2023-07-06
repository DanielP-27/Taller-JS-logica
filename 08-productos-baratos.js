// Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:
// Nota: No olvide usar console.log() para mostrar los resultados retornados por la función productosBaratos:

// Write a function called "productosBaratos" that receives an array of objects (that represents products) and returns a new array with the numbers of the products with a value range between 5 and 10: 
// Note: do not forget to use console.log() to show the results returned for the "productosBaratos" function. 

let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];

function productosBaratos(prods){
  let baratos = prods.filter(item=> item.precio >= 5 && item.precio <= 10);
  let nombre = baratos.map(item=>item.nombre)
  return nombre
}

console.log(productosBaratos(prods));


