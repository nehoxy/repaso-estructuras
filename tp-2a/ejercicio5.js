/*
Construir un algoritmo tal, que dado como dato la calificación de un alumno en un examen, escriba "Aprobado" en caso que esa calificación fuese mayor que 8 y desaprobado si fuera menor
*/

var calificacion = parseInt(prompt("Ingrese la calificacion del alumno"));

if(calificacion>8){
    document.write("Aprobado");
} else{
    document.write("Desaprobado");
}