// Determinar el algoritmo para saber si un número es positivo negativo

var numero = parseInt(prompt("Ingrese el valor"));

if(numero==0){
    alert("El numero es neutro");
} else if(numero>0){
    alert("El numero es positivo");
} else{
    alert("El numero es negativo");
}