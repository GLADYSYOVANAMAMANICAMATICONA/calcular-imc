
//embiando esther ejercicio de IMC

function calcularimc (){
var peso = prompt ("Ingrese su peso") ;    
var altura = prompt ("Ingrese su talla");  
var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));    
return imc;
}
console.log (calcularimc());