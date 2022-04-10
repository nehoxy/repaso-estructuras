// Determinar si una persona puede votar con base en su edad en las próximas elecciones.

var edad = parseInt(prompt("Ingrese su edad"));
var padron;
var falta = 0;

if(edad>=16){
    padron = confirm("Se encuentra usted registrado en el padron electoral?");
}

if(edad>=16&&padron==true){
    alert("Usted puede votar en las proximas elecciones");
}else if(edad<16){
    falta = 16-edad;
    alert("Te faltan "+falta+" años para poder votar");
} else if(padron==false){
    alert("Debe anotarse en el padron electoral");
}