/* Que pida dos números y muestre todos los números que van desde el primero al segundo. Decir
cuántos son y mostrar la suma de los mismos
*/
var num1 = parseInt(prompt("Ingrese el primer valor"));
var num2 = parseInt(prompt("Ingrese el segundo valor"));
var cont = 0;
var acum = 0;

for(num1;num1<=num2;num1++){
    acum = acum + num1;
    cont++;
}
console.log(acum);
console.log(cont);