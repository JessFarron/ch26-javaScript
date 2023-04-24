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


// ------------------------Funciones expresadas -----------------------------
// Funciones expressions
// Son funciones declaradas dentro de la asignación de una variable
// Pueden ser anonimas, es decir no tienen nombre
// Las funciones expresada sno tienen hoisting porque no se cargan
// en memoria hast aque se utilicen 




/* Sintaxis
const nombreVariable = function nombreFuncion(parametros) {
    instrucciones;
}
*/

// OJO requieren ; al final porque en si se forman con la estructura de declaracion de  las variables

const sum = function sumatoria(a,b) {
    return a + b;
};

const resta = function (a,b) { // aquí es anonima y no pasa nada si no tiene nombre 
    return a - b;
};

const potencia = function (a,b) {
    return a**b;
};
console.log(sum(9,9)); // Ojo tienen que llamarse después de expresarla o definida, si la invocamos antes dará error
console.log(resta(90,9)); 


// ---------------Funciones autoinvocadas --------------
// self-invoking functions
// se autoinvocan, se pueden definir con funciones anonimas

(function () {
    console.log ("Me autoinvoco en la función ");
}) ();

// --------------Funciones flechas-----------------
// Arrow functions
// Son funciones similares a las funciones declaradas , pero 
// No requiere la palabra function 
// Si tiene una sola instrección no requiere las {}
// Si la instruccion es el mismo retorno, no requiere la palabra return }



/* Se parecen a las funciones expresadas como esta 
const areaRectangulo = function (a,b)
{
      return b*a;
}
console.log("Área de rectangulo de 5x3: "+ areaRectangulo(5,3)) */

const areaRectangulo = (a,b) =>  a*b;  // después de la flecha se abren llaves solo si son más de una operación
console.log("Área de rectangulo de 5x3: "+ areaRectangulo(5,3))

// ----------------------Parametro default ------------
/**
 * Este comentario es la documentacion dela funcion 
 * @param {number} base esto es la descripcion de base
 * @param {number} altura esto es la descripcion de base
 * @returns area del rectangulo
 */
const areaTriangulo = (base,altura) => base * altura / 2
console.log("área de triangulo de b:5 y a:10 es = " +  areaTriangulo(5,10))
console.log("área de triangulo de b:8 = " +  areaTriangulo(8)) // da NaN porque entra con base = 8 y altura con "undefined" que da NaN, luego / 2 = NaN
// para prevenir lo anterior podemos darle valores a las variables dentro de la funcion, ejemplo
const areaTrianguloPrevenida = (base=5,altura=2) => base * altura / 2
console.log("área de triangulo de b:8 = " +  areaTrianguloPrevenida(8))