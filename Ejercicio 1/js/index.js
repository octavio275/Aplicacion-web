  //document.getElementById('enviar').addEventListener("click", pulsar, false);


  function iniciar(){
    document.informacion.addEventListener("invalid",validacion, true);
    document.getElementById("enviar").addEventListener("click",enviar, false);
    document.informacion.addEventListener("input", controlar,false);
    }
    function validacion(e){
      let elemento=e.target;
      elemento.style.background='#FFDDDD';
      }

    function enviar(){
       elemento=document.getElementById("nombre");
      let valido=document.informacion.checkValidity();
      if(valido){
        document.informacion.submit();
        
        }
       
       }
      function controlar(e){
        elemento=e.target;
        if(elemento.validity.valid){
        elemento.style.background='#FFFFFF';
        }else{
        elemento.style.background='#FFDDDD';
        }
        
        }

      
        window.addEventListener("load", iniciar, false);


function captura() {
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let fecha = document.getElementById('fechanac').value;
  let valoracion = document.getElementById('valoracion').value;
  let sexo_checkbox = document.getElementsByName('sexo');

  //Verifico valor de sexo
  let sexo;
  if (sexo_checkbox[0].checked) {
    sexo = sexo_checkbox[0].value;
  } else if (sexo_checkbox[1].checked) {
  } else {
    sexo = sexo_checkbox[2].value;
  }

  if (nombre == '') {
    alert('El nombre es obligatorio');
    document.getElementById('nombre').focus;
  } else if (apellido === '') {
    alert('El apellido es obligatorio');
    document.getElementById('apellido').focus;
  } else if (sexo === '') {
    alert('El sexo es obligatorio');
    document.getElementById('sexo').focus;
  } else if (email === '') {
    alert('El email es obligatorio');
    document.getElementById('email').focus;
  } else if (fecha === '') {
    alert('Ingresar fecha es obligatorio');
    document.getElementById('fechanac').focus;
  } else if (valoracion === '') {
    alert('La valoracion es obligatorio');
    document.getElementById('valoracion').focus;
  } else {
    alert(
      nombre +
        ' ' +
        apellido + // el salto de linea no funciona aca \n para asi imprimir uno abajo del otro
        ' ' +
        sexo +
        ' ' +
        email +
        ' ' +
        fecha +
        ' ' +
        valoracion
    );
  }
}

document.getElementById('cancelar').onclick = () => {
  var resultado = window.confirm('Desea volver a la pagina anterior?');
  if (resultado) {
    window.location.href = '../index.html';
  } else {
  }
};


