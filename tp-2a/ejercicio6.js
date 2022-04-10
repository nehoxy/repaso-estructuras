// Dada la edad de dos hermanos decir cual edad es mayor y calcular la diferencia de edad entre los dos hermanos.

var edad1 = parseInt(prompt("Ingrese la edad del primer hermano"));
var edad2 = parseInt(prompt("Ingrese la edad del segundo hermano"));
var dif = 0;

if(edad1>edad2){
    alert("El primer hermano es mayor");
    dif = edad1 - edad2;
}else{
    alert("El segundo hermano es mayor");
    dif = edad2 - edad1;
}

alert("La diferencia de edad es: "+dif);