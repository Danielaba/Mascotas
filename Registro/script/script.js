  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });


  var nombre = document.getElementById("nombre")
var correo = document.getElementById("correo")
var telefono = document.getElementById("cel")
var error = document.getElementById("error")
var form = document.getElementById("formulario");

var persona = {};

form.addEventListener ("submit", function (e){
    e.preventDefault();
    
    var msnerr = [];
    if(nombre.value == null || nombre.value == ""){
        msnerr.push("Ingrese su nombre"); 
     }
     else{
        persona.nombre = nombre.value;
         nombre.value = "";
     }

     if(correo.value == null || correo.value == ""){
         msnerr.push("Ingrese su correo");
     }
     else{
         persona.correo = correo.value;
         correo.value = "";
     }

     if(telefono.value == null || telefono.value == "" || telefono.value.length != 10){
         msnerr.push("Ingrese su numero de celular");
     }
     else{
         persona.telefono = telefono.value;
         telefono.value = "";
     }

     error.innerHTML = msnerr.join(", ");
     console.log(persona)

})






