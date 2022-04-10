// Que imprima la suma de todos los números pares que van del 1 al 100 y diga cuántos hay.
var acum = 0;
var cont = 0;
for(i=1;i<=100;i++){
    if(i%2==0){
        acum = acum + i;
        cont++
    }
}
console.log(acum);
console.log(cont)