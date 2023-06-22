console.log("Hola mundo desde node");

/*Convertir la palabra a mayuscula */
let ciudad = "pitalito";
let ciudadUpper = ciudad.toUpperCase();
console.log("Todo Mayuscula: " + ciudadUpper);
/*convertir la palabra a minuscula */
let ciudadLow = ciudad.toLocaleLowerCase();
console.log("Todo minuscula: " + ciudadLow);
/*convertir primea palabra a mayuscula el ero entre corchetes es para que se ponga mayuscula la primera letra*/
let ciudadOracion = ciudad[0].toUpperCase() + ciudad.slice(1).toLowerCase();
console.log("Tipo Oracion: " + ciudadOracion);
/*Extraer partes de una cadena*/
let anyo = "2023-06-22";
let anyoStr = anyo.toString();
/*slie es para iniciar de un numero en este caso inicie de 2 por eso toma el 2 y finalice en 4 que tomaria en 3 del año 2023 */
let anyoCard = anyoStr.slice(2, 4);
console.log("Año: " + anyoCard);
/*Para contar la cantidad de letras que tiene incluido los espacios */
let nombres = "Darickson Stiven Mamian Chacon";
let cantNombre = nombres.length;
console.log("Longitud nombre: " + cantNombre);