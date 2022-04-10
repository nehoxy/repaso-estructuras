/*
Elabore un algoritmo que según el monto de venta de un vendedor permita calcular que comisión recibirá según las cantidades que a continuación se detallan
*/

var ventas = parseInt(prompt("Ingrese la cantidad de sus ventas"));

if(ventas>=1&&ventas<=100){
    alert("Su comision sera del 10%");
}else if(ventas>=101&&ventas<=500){
    alert("Su comision sera del 12%");
}else if(ventas>=501&&ventas<=1000){
    alert("Su comision sera del 15%");
}else if(ventas>1000){
    alert("Su comision sera del 20%");
} else{
    alert("Ingreso un valor menor a 0");
}