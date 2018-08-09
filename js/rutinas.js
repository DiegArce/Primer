function mensaje(){
    alert ("Hola Mundo");
}

function formulario(){
var nombre=document.getElementById("txtNom").value;
var edad=document.getElementById("txtEdad").value;
var sexo=document.getElementById("CboSexo").value;
var rut= document.getElementById("txtRut").value;
var largo=rut.length;
if (largo!=8) {
    alert("Error rut invalido");
    return;
}
var suma=0; var mult=3;
for (var index = 0; index < largo; index++) {
    var caracter=rut.substring(index,index+1);
    suma=suma+(parseInt(caracter)*mult)

    mult--;
    if (mult==1) {
        mult=7;
    }
    
}
var dv=11-(suma %11);
if (dv==10) {
    dv="K";
}
if (dv==11) {
    dv="0";
}
    alert("suma: "+(suma % 11));
    alert("Digito: "+dv);

alert("Su Nombre es: "+nombre+" Edad: "+edad+" sexo: "+sexo+" Rut: "+rut+"-"+dv)
}