// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.
// Responda a la pregunta y devuelva true si es así, de lo contrario false. 

// A hero is heading to a castle to accomplish his mission. However, somebody told him that the castle is surrounded by two powerful dragons. Our hero needs two bullets to defeat both dragons, but our hero does not know how many bullets he needs. 
// Answer that question and return true for the number of bullets needed; otherwise return false. 

let bullets = Number (prompt('¿Cuantas balas tienes en este momento heroe?'));

if (bullets == 4) {
  console.log(true); 
}
else {
  console.log(false);
}