// Crea una funcion que recibirá como parámetro una letra, por ejemplo la letra o a partir de la cual dibujará el siguiente patrón. Una matriz de 10 x 10 donde dicha letra se imprimirá de forma intercalada.
// Create a function that receives the letter "o" as a parameter. With it, design a 10X10 matrix in which the letter "o" will be printed intercalate form. 

// Ejemplo mostrando los indices de la matriz
// Example showing the indexes in a matrix. 

//    12345678910
// 1  o o o o o 
// 2   o o o o o 
// 3  o o o o o 
// 4   o o o o o 
// 5  o o o o o 
// 6   o o o o o 
// 7  o o o o o 
// 8   o o o o o
// 9  o o o o o 
// 10  o o o o o


function Matriz(letra) {
  for (let i = 1; i <= 10; i++ ) {
      let espacio = '';
      if (i % 2 !== 0) {
        for (let j = 1; j <= 10; j++){
          if (j % 2 !== 0) {
          espacio = espacio + letra + ' '
          }
        }
      }
      
      else if (i % 2 === 0){
        espacio = ' ';
        for (let k = 2; k <= 10; k++){
          if(k % 2 === 0){
            espacio += letra + ' '
          }   
        }
       }   

    console.log(espacio);
  }
}

Matriz('o');
