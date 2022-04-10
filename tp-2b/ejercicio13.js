/*
Realice un algoritmo que, con base en una calificación proporcionada (0-10), indique con letra la calificación que le
corresponde: 10 es “A”, 9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”.
*/

var calificacion = parseInt(prompt("Ingrese su calificacion numerica (1-10)"));

switch(calificacion){
    case 10:alert("Su calificacion es A");break;
    case 9:alert("Su calificacion es B");break;
    case 8:alert("Su calificacion es C");break;
    case 7:case 6:alert("Su calificacion es D");break;
    case 5:case 4:case 3:case 2:case 1:case 0:alert("Su calificacion es F");break;
    default:alert("Ingreso un numero que no se encuentra en el rango definido");
}