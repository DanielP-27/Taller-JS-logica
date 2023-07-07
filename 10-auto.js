// Crea un objeto explicito en una variable llamada auto que tenga un atributo velocidad (con valor inicial 0) y dos métodos acelerar y frenar.
// Los métodos acelerar y frenar deben incrementar y decrementar la propiedad velocidad en 1.
// Create an explicit object with a variable called "auto" that has an attribute called "velocidad" (with an initial value of 0) and two methods "acelerar" and "frenar".
//The "acelerar" and "frenar" methods should increase and decrease the "velocidad" property by 1. 

let auto = {
  velocidad : 0,
  acelerar : function(){
      this.velocidad++
  },
  frenar : function(){
      if(this.velocidad > 0){
          this.velocidad--
      }
  }
}
// Código de prueba
console.log( auto.velocidad ); // 0
auto.acelerar()
console.log( auto.velocidad ); // 1
auto.frenar()
console.log( auto.velocidad ); // 0
auto.frenar()
console.log( auto.velocidad ); // 0
auto.acelerar()
console.log( auto.velocidad ); // 1
auto.acelerar()
console.log( auto.velocidad ); // 2