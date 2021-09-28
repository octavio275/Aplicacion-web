$(document).ready(() => {
  document.getElementById('article-1').addEventListener('click', addItemCarrito);
  document.getElementById('article-2').addEventListener('click', addItemCarrito);
  document.getElementById('article-3').addEventListener('click', addItemCarrito);
  document.getElementById('article-4').addEventListener('click', addItemCarrito);
});

const removeArticle = (imagenId) => {
  $(`#${imagenId}`).parent().css('background-color', 'white');
  $(`#${imagenId}`).css({
    opacity: '1'
  });

  let articleId = $(`#${imagenId}`).parent().attr('id');

  $(`#carrito-${articleId}`).remove();
  document.getElementById(articleId).addEventListener('click', addItemCarrito);

  let imgElement = $(`#${imagenId}`)[0];
  let articlePrice = imgElement.dataset.price;

  calcularTotal(-articlePrice);
};

const addItemCarrito = () => {
  let imgId = event.target.id;

  let imgElement = $(`#${imgId}`)[0];

  let articleId = $(`#${imgId}`).parent().attr('id');

  let articleTitle = imgElement.dataset.title;

  let articlePrice = imgElement.dataset.price;

  let articleImg = imgElement.src;

  //Cambios visuales
  $(`#${imgId}`).parent().css('background-color', '#a3edb7');

  $(`#${imgId}`).css({
    opacity: '0.6'
  });

  //agregar articulo al carrito
  $('#productos-carrito').append(`
      <article class="article-carrito" id="carrito-${articleId}">
          <img src="${articleImg}" class="img-article-carrito" alt="articulo-img" />
          <div class="container-article-carrito">
            <span class="title-article-carrito">${articleTitle} </span>
            <span class="price-article-carrito">$${articlePrice}</span>     
          </div>
      </article>   
      `);

  document.getElementById(articleId).removeEventListener('click', addItemCarrito);
  document
    .getElementById(articleId)
    .addEventListener('click', () => removeArticle(imgId));

  calcularTotal(articlePrice);
};

const calcularTotal = (precio) => {
  let actual = parseInt($('#total').text());

  console.log(actual, precio);

  actual = actual + parseInt(precio);
  console.log(actual);

  $('#total').html(actual);
};
