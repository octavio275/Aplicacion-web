//document.getElementById('enviar').addEventListener("click", pulsar, false);

function iniciar() {
  document.informacion.addEventListener('invalid', validacion, true);
  document.getElementById('enviar').addEventListener('click', enviar, false);
  document.informacion.addEventListener('input', controlar, false);
}
function validacion(e) {
  let elemento = e.target;
  elemento.style.background = '#FFDDDD';
}

function enviar() {
  elemento = document.getElementById('nombre');
  let valido = document.informacion.checkValidity();
  if (valido) {
    document.informacion.submit();
  }
}
function controlar(e) {
  elemento = e.target;
  if (elemento.validity.valid) {
    elemento.style.background = '#FFFFFF';
  } else {
    elemento.style.background = '#FFDDDD';
  }
}

window.addEventListener('load', iniciar, false);

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
    sexo = sexo_checkbox[1].value;
  } else {
    sexo = sexo_checkbox[2].value;
  }
  let expRegNombre =
    /^([A-Za-z]{0}?[A-Za-z\']+[\s])?([A-Za-z]{0}?[A-Za-z\'])+[\s]?([A-Za-z]{0}?[A-Za-z\'])?$/;
  let expRegEmail = /^\S+@\S+\.\S+$/;
  if (
    nombre == '' ||
    apellido === '' ||
    email === '' ||
    fecha === '' ||
    valoracion === ''
  ) {
    alert('Faltan campos requeridos por completar.');
  } else if (
    !(
      expRegNombre.test(nombre) &&
      expRegNombre.test(apellido) &&
      expRegEmail.test(email)
    )
  ) {
    alert('Hay campos con formato incorrecto.');
  } else {
    alert(`${nombre} \n ${apellido} \n ${sexo} \n ${fecha} \n ${valoracion}`);
  }
}

document.getElementById('cancelar').onclick = () => {
  var resultado = window.confirm('Desea volver a la pagina anterior?');
  if (resultado) {
    window.location.href = '../index.html';
  } else {
  }
};
