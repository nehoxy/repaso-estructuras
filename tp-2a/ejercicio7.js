/*
Dada la producción en unidades, de lunes a sábado, de un operario decir y mostrar si recibirá un incentivo del 10% la condición es que supere las 100 unidades. Por cada unidad se pagara $15.
*/

var unidades = parseInt(prompt("Ingrese la cantidad de unidades producidas"));
var total = 0;
var faltante = 0;
const precioUnidad = 15;

if(unidades>100){
    total = (unidades * precioUnidad)*1.10;
    alert("Recibira un incetivo del 10%, por lo tanto el total es: "+Math.round(total));
} else{
    faltante = 101 - unidades;
    total = unidades * precioUnidad;
    alert("Le faltaron "+faltante+" para el incentivo, por lo tanto recibira: "+total);
}