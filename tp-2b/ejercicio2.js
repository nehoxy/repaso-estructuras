/*
Determinar el sueldo semanal de un trabajador con base en las horas trabajadas y el pago por hora, considerando que después de las 40 horas cada hora se considera como excedente y se paga el doble.
*/

var horas = parseInt(prompt("Ingrese las horas trabajadas"));
var pagoHora = parseInt(prompt("Ingrese cuanto cobra por hora"));
var sueldo = horas * pagoHora
var excedente = 0;

if(horas>40){
    excedente = horas - 40; 
    sueldo = (sueldo+(excedente*pagoHora*2)) - (excedente*pagoHora);
    alert("Su sueldo es: "+sueldo);
}else{
    alert("Su sueldo es: "+sueldo);
}