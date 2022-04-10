// Determinar el algoritmo que resuelve qué cantidad, de entre tres números dados, es mayor.

var num1 = parseInt(prompt("Ingrese el primer valor"));
var num2 = parseInt(prompt("Ingrese el segundo valor"));
var num3 = parseInt(prompt("Ingrese el tercer valor"));

if(num1==num2==num3){
    alert("Los tres numeros son iguales");
} else if(num1<num2&&num1<num3){
    alert("El primer valor es el menor de los tres");
} else if(num2<num1&&num2<num3){
    alert("El segundo valor es el menor de los tres");
} else{
    alert("El tercer valor es el menor de los tres");
}