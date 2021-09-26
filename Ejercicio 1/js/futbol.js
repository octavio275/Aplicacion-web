$(document).ready(() => {
  $.get({
    url: 'https://localhost:44366/api/Libros',
    success: (data) => {
      console.log(data);

      for (let article of data) {
        //reemplazar datos de articulos por data
        $('.section-articles').append(`
            <article class="article" id="${article.objectId}">
                <img
                src="${article.image}"
                class="img-article"
                alt="pelota"
                />
                <span class="desc-article"
                >${article.title}
                </span>
                <span class="price-article">$${article.price}</span>
            </article>
 `);
      }
    }
  });

  //   $('.section-articles').append(`

  // <article class="article">
  // <img src="../img/medias-futbol.jpg" class="img-article" alt="pelota" />

  // <span class="desc-article">Medias De Fútbol adidas Adisocks 18 </span>
  // <span class="price-article">$1.799</span>
  // </article>

  // <article class="article">
  // <img
  //   src="../img/botines-futbol.jpg"
  //   class="img-article"
  //   alt="pelota"
  // />
  // <span class="desc-article"
  //   >Botines De Futbol adidas Predator 20.4
  // </span>
  // <span class="price-article">$8.899</span>
  // </article>
  // <article class="article">
  // <img src="../img/pelota.jpg" class="img-article" alt="pelota" />
  // <span class="desc-article">Pelota de Futbol Nike Barcelona N°5 </span>
  // <span class="price-article"> $3.699</span>
  // </article>
  // <article class="article">
  // <img
  //   src="../img/futbol-canilleras.jpg"
  //   class="img-article"
  //   alt="pelota"
  // />
  // <span class="desc-article">Canilleras de Futbol Nike J Guard</span>
  // <span class="price-article">$1.799</span>
  // </article>
  // `);
});
