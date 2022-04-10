/*
Realice un algoritmo para determinar cuánto se debe pagar por una cantidad de lápices considerando que si son 1000 o más el costo es de $1 c/u; de lo contrario, el precio es de $1,5 c/u 
*/

var unidades = parseInt(prompt("Ingrese la cantidad de lapices"));
var total = 0;
var precio = 0;
if(unidades>=1000){
    precio = 1;
    total = unidades*precio;
    alert("El precio a pagar es: $"+total)
} else{
    precio = 1.5
    total = unidades*precio;
    total = Math.round(total);
    alert("El precio a pagar es: $"+total)
}