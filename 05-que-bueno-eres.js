// Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.
// Recibe una lista con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!
// ¡Devuelve True si estás mejor, de lo contrario False!
// Nota: Sus puntos no están incluidos en la lista de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la lista dada!

// There was an exam in your class, and you passed it. Congrats! But you are a competitive person, so you want to know if your score is better than the class average.
// Get a list of your classmates scores, then get the average of them and compare it with your score.
// If your score is better than the average score of your classmates, return true; otherwise, return false. 


let myScore = 4.6;
let othersScore = [5, 4.5, 3.8, 4.2, 5, 4];

let sum = othersScore.reduce((accumulator, current) => current += accumulator);
let average = sum / othersScore.length;
// console.log(average);

if (myScore > average) {
  console.log(true);
}

else{
  console.log(false);
}


