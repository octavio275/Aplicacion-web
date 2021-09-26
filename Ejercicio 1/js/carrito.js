const removeArticle = (imagenId) => {
  //   console.log(imagenId);
  //   $(`#${imagenId}`).parent().css('background-color', 'white');
  //   $(`#${imagenId}`).css({
  //     opacity: '1'
  //   });
};

const addItemCarrito = () => {
  event.stopImmediatePropagation();
  console.log(event);
  //   let imgId = data.id;
  let imgId = event.target.id;
  let articleId = $(`#${imgId}`).parent().attr('id');

  $(`#${imgId}`).parent().css('background-color', '#a3edb7');

  $(`#${imgId}`).css({
    opacity: '0.6'
  });

  $('#productos-carrito').append(`
      <article class="article-carrito" id="article-carrito-${articleId}">
          <img src="./img/raqueta-tenis.jpg" class="img-article-carrito" alt="pelota" />
          <div class="container-article-carrito">
            <span class="title-article-carrito">Raqueta de Tenis Wilson Federer 23 </span>
            <span class="price-article-carrito">$5.499</span>     
          </div>
      </article>   
      `);
};
