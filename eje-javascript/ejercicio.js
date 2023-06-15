/* Activando el modo Scrict*/
"use strict"

/*Ejercicio N.1 */
/*el siguiente codigo se ejecuta una vez cargue el documento html */
alert("Bienvenidos al mundo de Javascript :)");

/*Ejercicio N.2 use strict no permite utilizar variables que no halla sido declarada */
let nombreAprendiz = "Monica Yulitssa";
alert(nombreAprendiz);

/*Ejercicio N.3 */
/*crea 2 variables de tipo string (nombre y apellido) y las mostramos en consola*/
let nombresAprendiz = "Yina Marcela";
let apellidoAprendiz = "Rójas Barrera";

console.log("ejercico N.3");
console.log(nombresAprendiz + " " + apellidoAprendiz);

/*Ejercicio N.4 */
let num1Int = 5;
let num2Int = 3;
let num3Str = "4";
let num4Str = "8";

console.log();
console.log("Ejercicio N.4");
console.log("Entero + Entero (5 + 3)");
console.log(num1Int + num2Int);

console.log("String + String (\"4\" + \"8\")");
console.log(num3Str + num4Str);

console.log("Entero + String (5 +\"4\")");
console.log(num1Int + num3Str);

/*Ejercicio N.5 */
/*De String a Entero */
console.log("Convercion explicita de variables");
console.log("convertir String a Entero");
let num3Int = parseInt(num3Str);
let resultadoInt = num1Int + num2Int;
console.log(resultadoInt);

/*De entero a String */
console.log("Convercion explicita de  Entero a String");
let num1Str = num1Int.toString();
let resultadoStr = num3Str + num1Str;
console.log(resultadoStr);

/*De Entero a  String a Desimal */
console.log("Convercion de Entero a Decimal");
let num1float = parseFloat(num1Int);
let num3float = parseFloat(num3Str);
let num5float = 5.3;
console.log("Valores: " + num1float + " + " + num3float + " + " + num5float);
/*Es importante colocar los parentecis al momento en el momento de queres hacer una operacion de suma,resta... */
console.log("Resultado: " + (num1float + num3float + num5float));

/*De Decimal a Entero */
let num6Int = Math.ceil(num5float);
console.log("Convercion de decimal a Entero con ajustes hacia el techo: " + num6Int);

// /*Limitaciones para declaracion de variables */
// /* 1. No iniciar variable con numeros*/
// let 1nombre = "Vicente";
// let nombre1 = "Vicente";

// /*los nombres de variables no llevan espacios */
// let nombre Aprendiz = "Margarita";

// /*la ceclaracion de variables no levan comillas ni caracteres especiales */
// let "apellidos" = "Sanches";
// let nombre-apellidos "Fernando";
// let primer/1nombre = "Saul";

// /*no podemos crear variables con nombres restringidos */
// let for = 5;
// let swich = "Deporte";
// let while = 12.5;
