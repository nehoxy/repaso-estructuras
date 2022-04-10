/*
14. Realice un algoritmo que, con base en un número proporcionado (1-7), indique el día de la semana que le corresponde (L-D)
*/
var diaDeLaSemana = parseInt(prompt("Ingrese un numero del 1 al 7"));

switch(diaDeLaSemana){
    case 1:alert("Lunes");break;
    case 2:alert("Martes");break;
    case 3:alert("Miercoles");break;
    case 4:alert("Jueves");break;
    case 5:alert("Viernes");break;
    case 6:alert("Sabado");break;
    case 7:alert("Domingo");break;
    default:alert("No esta dentro del rango proporcionado");
}