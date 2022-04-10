// Elabora un algoritmo que permita conocer que tipo de triangulo es según sus lados.

var ladoA = parseInt(prompt("Ingrese el tamaño del primer lado de su triangulo"));
var ladoB = parseInt(prompt("Ingrese el tamaño del segundo lado de su triangulo"));
var ladoC = parseInt(prompt("Ingrese el tamaño del tercer lado de su triangulo"));

if(ladoA==ladoB&&ladoB==ladoC){
    alert("Es un triangulo equilatero");
} else if(ladoA==ladoB||ladoA==ladoC||ladoB==ladoC){
    alert("Es un triangulo isosceles");
}else{
    alert("Es un triangulo escaleno");
}