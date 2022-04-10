/*
3. Se requiere un algoritmo para determinar, de N cantidades, cuántas son cero, cuántas son menores a cero, y cuántas son mayores a cero.
*/
var numero;
var positivos = [];
var negativos = [];
var neutros = [];
var cont1 = 0;
var cont2 = 0;
var cont3 = 0;
var mensaje = "un"

do{
    ingreso = confirm("Desea ingresar "+mensaje+" numero?")
    if(ingreso==true){
        numero = parseInt(prompt("Ingrese el numero deseado"));

        if(numero==0){
            neutros[cont3] = numero;
            cont3++;
        } else if(numero>0) {
                positivos[cont1] = numero;
                cont1++;
            }else{
                negativos[cont2] = numero;
                cont2++;
            }
    
    }
    
mensaje = "otro";
}while(ingreso);

document.write("La cantidad de positivos es: "+positivos.length+"<br>");
document.write("La cantidad de negativos es: "+negativos.length+"<br>");
document.write("La cantidad de neutros es: "+neutros.length+"<br>")

document.write("<br>")
document.write("Los positivos son: ")
for(i in positivos){
    document.write(positivos[i]+", ");
}

document.write("<br>")
document.write("Los negativos son: ")
for(i in negativos){
    document.write(negativos[i]+", ");
}

document.write("<br>")
document.write("Los neutros son: ")
for(i in neutros){
    document.write(neutros[i]+", ");
}