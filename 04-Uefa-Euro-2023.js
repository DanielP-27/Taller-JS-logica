// Finalice la función uefaEuro2023() para que devuelva una cadena como en los ejemplos a continuación:
// Entrada:    uefaEuro2023(['Alemania', 'Ucrania'],[2, 0]) 
// Salida:     "¡En el partido Alemania - Ucrania, ganó Alemania!"
// Entrada:     uefaEuro2023(['Belgium', 'Italy'],[0, 2]) 
// Salida:     "¡En el partido Bélgica - Italia, ganó Italia!"
// Entrada:    uefaEuro2023(['Portugal', 'Iceland'],[1, 1]) 
// Saluda:     "En el partido Portugal - Islandia, los equipos empataron".

function uefaEuro2023(teams, scores) {
  if (scores [0] > scores [1]) {
      console.log('!En el partido ' + teams [0] + '- ' + teams[1] + ', ganó ' + teams[0] + '¡');
  }
  else if (scores [0] < scores [1]) {
      console.log('!En el partido ' + teams [0] + '- ' + teams[1] + ', ganó ' + teams[1] + '¡');
  }
  else {
      console.log('!En el partido ' + teams [0] + ' - ' + teams[1] + ', los equipos empataron' + '¡');
  }
  return [teams, scores];
}

let teams = ['Alemania', 'Ucrania'];
let scores = [0, 1];


const comparasion = uefaEuro2023(teams, scores);
console.log(comparasion);

