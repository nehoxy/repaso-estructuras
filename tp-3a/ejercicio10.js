// Muestre las tabla del 1 al 12
var resultado = 0;

for(i=1;i<=12;i++){
document.write("Tabla del "+i+"<br>");
    for(j=1;j<=10;j++){
        resultado = i * j 
        document.write(i+" x "+j+" = "+resultado+"<br>")
    }
j = 1;
document.write("<br>");
}