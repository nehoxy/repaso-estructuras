/*
1. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años?
*/

var salario = 1500; 
var aumentoAn = 0.10;
var salarioAn = [];
var año = "2014"; // mas comodo

for(i=0;i<6;i++){
    salario = (salario*aumentoAn)+salario;
    salario = Math.round(salario);
    salarioAn[i] = salario;
}
document.write("Su salario al cabo de 6 años es de: "+salario+" pesos<br>");
for(i in salarioAn){
    document.write("Su salario en el año "+año+" fue: "+salarioAn[i]+" pesos.<br>");
    año++
}