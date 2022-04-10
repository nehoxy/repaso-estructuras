// 6. Que imprima la suma de todos los números pares que van del 1 al 100.
var acum = 0;

for(i=1;i<=100;i++){
    if(i%2==0){
        acum = acum + i;
    }
}
console.log(acum);