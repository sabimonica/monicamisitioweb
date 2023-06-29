console.log("Validacion de fechas");
console.log("---Obtener fecha y hora del navegador---");
/*hora media de Grenwich */
let timeGMT = new Date();
console.log(timeGMT);

console.log("---Fecha hora en STRING---");
let timeGMTStr = timeGMT.toString();
console.log(timeGMTStr);

console.log("---Dia de la semana GETDAY---");
let timeGMTDAY = timeGMT.getDay();
console.log(timeGMTDAY);
let diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", 
                 "Jueves", "Viernes", "Sabado", "Domingo",];
console.log("Hoy es: " + diaSemana[timeGMTDAY]);

console.log("---Mes GETMONTH---");
let timeGMTmes = timeGMT.getMonth();
console.log(timeGMTmes);
let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
           "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
           console.log("El mes es: " + mes[timeGMTmes]);

console.log("---Fecha y hora fragmentada---");
let currentTime = new Date();
console.log("Dia de la semana: " + currentTime.getDay());
console.log("Mes del Año: " + currentTime.getMonth());
console.log("Dia del mes: " + currentTime.getDate());
console.log("Año: " + currentTime.getFullYear());
console.log("Hora: " + currentTime.getHours());
console.log("Minutos: " + currentTime.getMinutes());
console.log("Segundos: " + currentTime.getSeconds());
console.log("Milisegundos: " + currentTime.getMilliseconds());

console.log("---Milisegundos  transcurridos desde el 01/01/1970---");
console.log(currentTime.getTime());

console.log("---Estableciendo diferencia en fechas---");
/*Fecha americano: mes, dia,año */
let newYear2024 = new Date("January 1, 2024");
let fechaActual = new Date();
let newYear2024ms = newYear2024.getTime();
let fechaActualms = fechaActual.getTime();

let milisecDiff = newYear2024ms - fechaActualms;
let diasDiff = milisecDiff / (1000 * 60 * 60 * 24);
console.log("Dias faltantes para año nuevo: " + diasDiff);
console.log("Redondear los dias faltantes....");
console.log(Math.floor(diasDiff));

// console.log("---Ingresar fecha y hora---");
// let fechaHora = new Date("July 2, 2023 08:00:00");
// let fechaHorams = fechaHora.getTime();
// let fechaVotaciones = fechaHorams - fechaActualms;
// console.log("Segundos faltantes: " + fechaVotaciones / 1000);
// console.log("Minutos faltantes: " + fechaVotaciones / (1000 * 60));
// console.log("Horas faltantes: " + fechaVotaciones / (1000 * 60 * 60));
// console.log("Dias faltantes: " + fechaVotaciones / (1000 * 60 * 60 *24));
calcularTimeVotaciones();

function calcularTimeVotaciones() {
console.log("---Ingresar fecha y hora---");
let fechaHora = new Date("July 2, 2023 08:00:00");
let fechaHorams = fechaHora.getTime();
let fechaVotaciones = fechaHorams - fechaActualms;
let diasRestantes = Math.floor(fechaVotaciones / (1000 * 60 * 60 *24));
let horasRestantes = Math.floor (fechaVotaciones / (1000 * 60 * 60));
let horasRestanteSinDecima = Math.floor(horasRestantes % 24);
let minutosRestantes = fechaVotaciones / (1000 * 60);
let munutosRestantesSinDecim = Math.floor(minutosRestantes % 60);
console.log("El tiempo restante para las votacines es: " + diasRestantes + " Dias, " + horasRestanteSinDecima + " Horas y " + munutosRestantesSinDecim);

}









