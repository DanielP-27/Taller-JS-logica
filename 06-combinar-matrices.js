// Valor: 1.0 - Combinar dos matrices ordenadas en una
// Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función combinarListas( lista1, lista2 ), donde lista1 y lista2 son las listas ordenadas originales.
// No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.
// Nota: lista1 y lista2 pueden clasificarse en diferentes órdenes. También lista1 y lista2 pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

arr1 = [1, 3, 5, 7, 9, 11, 12];
arr2 = [1, 2, 3, 4, 5, 10, 12]; 

function combinarListas(arr3) {  
 arr3 = arr2.concat(arr1);
 arr3.sort(function(a, b) {return a - b});
 return [...new Set(arr3)]
}

let listasCombinadas = combinarListas();

console.log(listasCombinadas);



