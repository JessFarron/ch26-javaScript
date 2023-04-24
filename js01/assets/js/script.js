console.log("Script JS 1");
// Son 7 datos primitivos:
// String: "Hola"
console.log("Tipo de dato String:","Hola");

// Number: 12, -45, 367.12, +Infinity, -Infinity, Nan
// los numericos usan 64 bitspara almacenar, preo solo se usan 53 bits 
// para representar el número
console.log(12, -45, 367.12, 45/0, -56/0, 56*"hola");


console.log("Valor máximo: ", Number.MAX_VALUE); 
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);  
// ojo muy iomportante aqupi coo Number esta en mayuscula es una clase como la que vimos en Date y su propiedad serís Max_Value 



// BigInt 
// Sirven para representa valor numericos enteros, fe los que el tipo numner no puede representa o no es seguro
console.log("MAX_SAFE_INTEGER +1:", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2:", Number.MAX_SAFE_INTEGER + 2);
let myBigInt = 9007199254740991n; // se agrega la letra n al final
console.log("Valor de dato BigInt:"+ myBigInt);
console.log("MAX_SAFE_VALUE + 1n", myBigInt + 1n);

// Boolean
// tenemos dos estados : true o false
console.log("Tipo de dato booleano: ", true);
console.log("Tipo de dato booleano: ", false);

// Undefined
// Un dato que es declarado, pero no definido en el tipo
let myVar; // solo se declara
console.log("Tipo de dato undefined: ", myVar);

// null 
//Intensionalmente se borra el tipo de dato

let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // undefined
myVarNull="Saludos"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // object  por el error que comentamos de Javascript 
// donde cuando se metio null se borran las casillas de detccionn  (bits) de tipo y las rellena con cero. 
// Resulta que object tiene en los tres cifras de detccion tres 0 0 0 por ello es detectadi como object 

// symbol
// crea propiedades privadas en los objetos.

// Tipo de datos Object
// Object:

const misDatos = {
    // clave:valor
    nombre:"Jessica",
    apellido:"Sánchez",
    edad: 27,
    isBelicoso:false,
    musicaPreferidaPorGenero: {
        pop:"Saoko",
        metal: "Fuel"
    }, 
    nombreCompleto: function fullName(){
      // esto no sirve porque name es un atributo aunque este en este objeto  
      // no esta definido
      // return nombre + apellido; 
         //return misDatos.nombre + " " + misDatos.apellido + " esa soy yo." 
       
       // this permite que a pesar de que se cambie el nombre del objeto siga sirviendo el atributo 
       // la funcion de this es hacer referencia al objeto en el que ese esta invocando 
       return this.nombre + " " + this.apellido + " esa soy yo." 

    }
}


const misDatosInstagram = {
    // clave:valor
    nombre:"Jechini",
    apellido:"Carrisosa",
    edad: 72,
    isBelicoso:false,
    musicaPreferidaPorGenero: {
        pop:"Bizcochito",
        metal: "Welcome to hell"
    }, 
    nombreCompleto: function fullName(){
      // esto no sirve porque name es un atributo aunque este en este objeto  
      // no esta definido
      // return nombre + apellido; 
       return this.nombre + " " + this.apellido + " esa soy yo." 


       // this permite que a pesar de que se cambie el nombre del objeto siga sirviendo el atributo 
       // la funcion de this es hacer referencia al objeto en el que ese esta invocando 

    }
}



console.log ("Datos completos", misDatos);
console.log ("Nombre", misDatos.nombre);
console.log ("Musica favorita", misDatos.musicaPreferidaPorGenero.pop); // ojo musicaPorGenero no es una variable es un atributo de la variable 
// misDatos por ello no la podemos llamar durectamente como si fuera una variable.
// los objetos tienen propiedades y metodos 



console.log("Nombre completo: ", misDatos.nombreCompleto());

console.log("Nombre completo: ", misDatosInstagram.nombreCompleto());


// Array 
// Almacena diferentes tipos de datos , su primer elemento es el indice 0
const cancionesRosalia = [ 
    "Vampiros", 
    "Delirio de Grandeza", 
    "Malamente", 
    "Catalina",
    {
        2022: "Motomami",
        2018: "El Mal Querer",
        2017: "Ángeles",
        total:3
    }
];
console.log("Canción de Rosi ", cancionesRosalia[1]);
console.log("Album del año 2018", cancionesRosalia[4].total);

// diferentes fromas de hllamar a un atributo con una clave string (es muy importante considerar si es una variable numerica y string ver el ejemplo)
console.log("Albumnes hasta hoy", cancionesRosalia[4].total);
console.log("Albumnes hasta hoy", cancionesRosalia[4]["total"]);


console.log("Album del año 2018", cancionesRosalia[4][2018]);
console.log("Album del año 2018", cancionesRosalia[4]["2017"]);

console.log("Num total de elementos: ", cancionesRosalia.length);
console.log("Num total de elementos: ", cancionesRosalia.indexOf("Malamente"));// metodo que entrega el index del dato que le metemos
console.log("Num total de elementos: ", cancionesRosalia.indexOf("Motomami")>-1);// entrega si esta o no porque si no esta en el objeto, en este caso, lo detecta como index -1 



// --------------------------------------------------
// Conversión de datos 
const myNumber = 420; // minutos en la sesión JS01
console.log("Num. minutos en la sesión: " + myNumber); 
// to string
const myNumberTxt = String(myNumber);
console.log("Num. minutos en la sesión: " + myNumberTxt); 

// to number
const myString = "420";
const sumatoria = 80 + myString;

console.log("Valor de sumatoria: " + sumatoria );  // da resultado "80420" y no 500, porque lo detecta como concatenacion de strings
// por eso hay qu etransformar 
const sumatoriaCorrecta = 80 + Number(myString); // 500 
console.log(sumatoriaCorrecta);

// toParseInt  
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log(sumatoriaEntera);

// toParseFloat
const sumatoriaFloat = 80 + parseFloat(myStringInteger);
console.log(sumatoriaFloat);

// otro ejemplo con separación 
const ejemplito = "420 576" // se toma los valores antes del espacio
const sumatoriaEjemplito = 80 + parseInt(ejemplito);
console.log(sumatoriaEjemplito);

// to Boolean 
const isMotomami = "false";
const vacio = ""; 
console.log(typeof isMotomami);
console.log(Boolean(isMotomami));
console.log(Boolean(vacio));
// boolean compara contenido entonces aunque sea falso la marcvara como verdadera por eso solo podemos 
// meter el iff con comparaci´+on
// que nos da false con Boolean : "" , 0 , null , undefined

if (isMotomami== false) 
    console.log("Denle su coquita");
    else 
    console.log("Abra paso a la barredora");

//Boolean 
// Number
// [] =0, [30] = 30, [3,1] = NaN, false = 0 , true = 1
// String
// []="", [1,2] = "1,2" , function (){} = function (){}, {} = [object,Object]  en este ultimo ejemplo un objeto nos da un array tipo object Objet 
