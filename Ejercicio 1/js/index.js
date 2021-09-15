window.onload = () => {
  document.getElementById('btn-cancelar').onclick = () => {
    window.location.href = '/index.html';
  };

  document.getElementById('form-encuesta').onsubmit = (e) => {
    e.preventDefault();
    console.log("object")
  };
};
