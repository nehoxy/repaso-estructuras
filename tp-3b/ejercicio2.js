/*
2. “El náufrago satisfecho” ofrece hamburguesas sencillas (S), dobles (D) y triples (T), las cuales tienen un costo de $20, $25 y $28 respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra. Suponiendo que los clientes adquieren N hamburguesas, las cuales pueden ser de diferente tipo,
realice un algoritmo para determinar cuánto deben pagar.
*/

alert("Hamburguesas \"El naufrago satisfecho\", hamburguesas sencillas(S), dobles(D) y triples (T)")
var total = 0;
var mensaje = "una";
var metodoPago;

do{
    pedido = confirm("Desea pedir "+mensaje+" hamburguesa?");
    if(pedido==true){
        hamburguesa = prompt("Que hamburguesa quiere?");
        hamburguesa = hamburguesa.toUpperCase();
        switch(hamburguesa){
            case "S":
                alert("Eligio una hamburguesa sencilla");
                total = total + 20;
            break;
            case "D":
                alert("Eligio una hamburguesa doble");
                total = total + 25;
            break;
            case "T":
                alert("Eligio una hamburguesa triple");
                total = total + 28;
            break;
            default:
                alert("Debe seleccionar una de las opciones posibles");
        }
        mensaje = "otra";
    }
}while(pedido);

alert("El total de pedido es "+total);

metodoPago = prompt("Ingrese (E) si desea abonar con efectivo, o (T) si prefiere hacerlo con tarjeta");
if(metodoPago.toUpperCase()=="T"){
    alert("Tendria un recargo del 5% con tarjeta");
    total = (total*0.05)+total;
    alert("Debe pagar: "+total);
}else{
    alert("Debe pagar: "+total);
}
