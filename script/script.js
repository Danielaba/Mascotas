$(document).ready(function(){

    $('.sidenav').sidenav();

})

var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var correo = document.getElementById("correo")

function validarValores(){
    if (nombre.value.length <= 0 || apellido.value.length <= 0 || correo.value.length <= 0){
        swal("Ingrese los datos", "Digite nombre, apellido y correo", "error");
    }    
}



        