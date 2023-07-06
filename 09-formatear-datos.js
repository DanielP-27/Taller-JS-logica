// Formatea los datos de la lista Imprime la lista en la consola, el resultado final debe ser el siguiente:
// Format the data of the array and print the list on the console. The final result should be as follows: 

// Grupo 1:         Grupo 2:        Grupo 3:
//     Pablo        Diana           Roberto
//     Maria        Juan            Daniel
//     Pedro        Federico        Sandra


const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

for (let i = 0; i < mat.length; i++) {
    console.log('grupo ' + (i + 1));
   
    for (let j = 0; j < mat[i].length; j++) {
        console.log('   ' + mat[i] [j]); 
    }
}
