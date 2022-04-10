/*
Un banco dado el nivel de ingreso de una persona podrá prestarle el 25% del sueldo en caso de tener hijos y el 50% en caso de no tenerlos. Determinar el monto del préstamo.
*/

var ingresos = parseInt(prompt("Cuales son sus ingresos? (ingrese el valor neto"));
var prestamo = 0;
var hijos = confirm("Tiene hijos?")

if(hijos==true){
    prestamo = ingresos * 0.25;
    alert("Podemos prestarle el 25% de sus ingresos lo cual seria: $"+prestamo);
}else{
    prestamo = ingresos * 0.50;
    alert("Podemos prestarle el 50% de sus ingresos lo cual seria: $"+prestamo);
}