//
// $(document).ready(() => {
//     $('#imagen').click(function() {
//         $('#imagen').css({opacity: 0.5});
// });

// });
//

$('#btn-1').click(() => {

    
  $('#productos-carrito').append(`
    <article class="article-carrito">
        <img src="./img/raqueta-tenis.jpg" class="img-article-carrito" alt="pelota" />
        <div class="container-article-carrito">
        <span class="title-article-carrito">Raqueta de Tenis Wilson Federer 23 </span>
        <span class="price-article-carrito">$5.499</span>
        <button class="btn-article-carrito" type="button">Eliminar</button>
        </div>
    </article>   
    `);
});
