
window.onload = function() {  
  //document.getElementById('enviar').addEventListener("click", pulsar, false);

  document.getElementById('cancelar').onclick = () => {
    var resultado = window.confirm('Desea volver a la pagina anterior?');
    if (resultado === true) {
      window.location.href = '/index.html';
  } else { 
      
  }
} 
   /*  document.getElementById('form-encuesta').onsubmit = (e) => {
      e.preventDefault();
      console.log("object")
    };
  document.getElementById('btn-enviar').onsubmit = (e) => {
      e.preventDefault();
       };  */

   



}
function captura(){
  var nombreest = document.getElementById("nomest").value;
  var apellidoest = document.getElementById("apellido").value;
  var sexoest = document.getElementById("sexo").value;
  var emailest = document.getElementById("email").value;
  var fechaest = document.getElementById("fechanac").value;
  var valorest = document.getElementById("valoracion").value;

 if(nombreest ==""){
  alert("El nombre es obligatorio");
  document.getElementById("nomest").focus;
  }
  
  else if(apellidoest ===""){
    alert("El apellido es obligatorio");
    document.getElementById("apellido").focus;

  }
  else if(sexoest ===""){
    alert("El sexo es obligatorio");
    document.getElementById("sexo").focus;

  }
  else if(emailest ===""){
    alert("El email es obligatorio");
    document.getElementById("email").focus;

  }
  else if(fechaest ===""){
    alert("Ingresar fecha es obligatorio");
    document.getElementById("fechanac").focus;

  }
  else if(valorest ===""){
    alert("La valoracion es obligatorio");
    document.getElementById("valoracion").focus;

  }
  else{
    alert(nombreest+" "+ apellidoest // el salto de linea no funciona aca \n para asi imprimir uno abajo del otro
    +" "+sexoest 
    +" "+emailest
    +" "+fechaest
    +" "+valorest);
  }



 

 }

  /* document.getElementById('cancelar').onclick = () => {
    window.location.href = '/index.html';
  };*/

