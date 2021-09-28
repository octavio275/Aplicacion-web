$(document).ready(() => {
  document.getElementById('img-1').addEventListener('click', addItemCarrito);
  document.getElementById('img-2').addEventListener('click', addItemCarrito);
  document.getElementById('img-3').addEventListener('click', addItemCarrito);
  document.getElementById('img-4').addEventListener('click', addItemCarrito);
});

const removeArticle = (imagenId) => {
  $(`#${imagenId}`).parent().css('background-color', 'white');
  $(`#${imagenId}`).css({
    opacity: '1'
  });

  let articleId = $(`#${imagenId}`).parent().attr('id');
  console.log(articleId);

  $(`#carrito-${articleId}`).remove();
  document.getElementById(`${imagenId}`).addEventListener('click', addItemCarrito);

  calcularTotal();
};

const addItemCarrito = () => {
  event.stopImmediatePropagation();
  let imgId = event.target.id;

  let imgElement = $(`#${imgId}`)[0];

  let articleId = $(`#${imgId}`).parent().attr('id');

  let articleTitle = imgElement.dataset.title;

  let articlePrice = imgElement.dataset.price;

  let articleImg = imgElement.src;

  //Cambios visuales

  $(`#${articleId}`).css({'background-color': '#a3edb7'});

  $(`#${imgId}`).css({
    opacity: '0.6',
    'background-color': '#a3edb7'
  });

  //agregar articulo al carrito
  $('#productos-carrito').append(`
      <article class="article-carrito" id="carrito-${articleId}" data-price="${articlePrice}"x>
          <img src="${articleImg}" class="img-article-carrito" alt="articulo-img" />
          <div class="container-article-carrito">
            <span class="title-article-carrito">${articleTitle} </span>
            <span class="price-article-carrito">$${articlePrice}</span>     
          </div>
      </article>   
      `);

  document.getElementById(imgId).removeEventListener('click', addItemCarrito);
  document
    .getElementById(imgId)
    .addEventListener('click', () => removeArticle(imgId));

  calcularTotal();
};

const calcularTotal = () => {
  let precioActual = 0;
  for (const item of $('#productos-carrito').children()) {
    precioActual = precioActual + parseInt(item.dataset.price);
  }

  $('#total').html(precioActual);
};
