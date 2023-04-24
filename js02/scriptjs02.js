console.log("JS02 OuO");
 // Función declarada 
 // function declaration, function statement
 // Una característica es que las funciones declaradas tiene hoisting
 
 // console.log("El reultado de 5*10= " multiplica(5,10)); // invocando la función 
 
 
 /* Sintaxis
 function multiplica () {

 }
 */
/* { // este es un bloque de código (pero no es reutilizable)
    const operandoA = 5
    const operandoB = 10
    const resultado = operandoA*operandoB;
    console.log(resultado);

} */

multiplica (5,10);
multiplica (8,8);
multiplica (-4,2);


function multiplica (a,b) {
    const resultado = a*b;
    console.log(resultado);
}

function divide (a,b) {
    return a/b;
}

console.log(divide(5,2)); // 2.5
console.log(divide(5,"2")); // 2.5 --> cualquier datpo que mandamos se convierte a númerico 
console.log(divide("5","2")); // NaN
console.log(divide("5 0","2")); //NaN