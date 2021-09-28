$(document).ready(() => {
  //   $.get({
  //     url: 'https://localhost:44366/api/Libros',
  //     success: (data) => {
  //       Aqui iria la logica siguiente}});

  for (let article of data) {
    if (article.category === 'futbol') {
      $('.section-articles').append(`
    <article class="article" id="${article._id}">
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


//Json alternativo a peticion a servidor
const data = [
  {
    _id: '6152971005ebdd5bbb394931',
    title: 'Camiseta de Basquet adidas Boca Juniors',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/244871-1500-1500/6GH6838-000-1.jpg?v=637495964803200000',
    price: 8.199,
    category: 'basket'
  },
  {
    _id: '615297109dded35a8cac1d6f',
    title: 'Camiseta de Basquet adidas River Plate',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/245504-1500-1500/6GN8343-000-1.jpg?v=637496722073600000',
    price: 8.199,
    category: 'basket'
  },
  {
    _id: '61529710357438d7c38ca9a8',
    title: 'Aro De Basquet De Hierro Macizo',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/181755-1500-1500/4707180.jpg?v=636728842811100000',
    price: '$17.799',
    category: 'basket'
  },
  {
    _id: '61529710e1514be52b2572aa',
    title: 'Pelota de Basquet Molten Gr7',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/187374-1500-1500/3300118-001.jpg?v=636971553284400000',
    price: 5.899,
    category: 'basket'
  },
  {
    _id: '61529710c1503922b5df8713',
    title: 'Guantes De Boxeo Everlast Pro Style Rojo',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/341276-1000-1000/1810103-000-1.jpg?v=637642947825800000',
    price: 6.799,
    category: 'boxeo'
  },
  {
    _id: '6152971012a393921726cc57',
    title: 'Guantes De Boxeo Everlast Powerlock',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/341222-1000-1000/1810110-000-1.jpg?v=63',
    price: 9.899,
    category: 'boxeo'
  },
  {
    _id: '615297106dcad3f2db6a853c',
    title: 'Protector Abdominal Everlast',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/339220-1000-1000/1817135-000-1.jpg?v=637638588886930000',
    price: 24.999,
    category: 'boxeo'
  },
  {
    _id: '615297109bfa06104acbca15',
    title: 'Pera De Boxeo Vintage Everlast',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/236148-1000-1000/181536u-000-1.jpg?v=637473688661730000',
    price: 5.499,
    category: 'boxeo'
  },
  {
    _id: '61529710a33b0cd78fd3e3bb',
    title: 'Medias De Fútbol adidas Adisocks 18',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/183670-1000-1000/1-cf35761-baae9009ca22ccad3e15312529131563-640-0.jpg?v=636822959715830000',
    price: 1.799,
    category: 'futbol'
  },
  {
    _id: '6152971065b74d789970c503',
    title: 'Botines De Futbol adidas Predator 20.4',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/345506-1000-1000/6FV3167-000-1.jpg?v=637648966664670000',
    price: 8.899,
    category: 'futbol'
  },
  {
    _id: '615297104b53efa73bad41eb',
    title: 'Pelota de Futbol Nike Barcelona N°5',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/319764-1000-1000/3300697-000-1.jpg?v=637619468733530000',
    price: 3.699,
    category: 'futbol'
  },
  {
    _id: '61529710c2084454791fcdd5',
    title: 'Canilleras de Futbol Nike J Guard',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/322687-1000-1000/4SP0040-419-1.jpg?v=637623367947130000',
    price: 1.799,
    category: 'futbol'
  },
  {
    _id: '61529710c2084454791fcdd5',
    title: 'Canilleras de Futbol Nike J Guard',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/322687-1000-1000/4SP0040-419-1.jpg?v=637623367947130000',
    price: 1.799,
    category: 'futbol'
  },
  {
    _id: '61529710e98599b7c985db42',
    title: 'Pelotas De Tenis Topper Tubo X3',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/348004-1000-1000/2144273-000-1.jpg?v=637650622211870000',
    price: 1.499,
    category: 'tenis'
  },
  {
    _id: '61529710e6140d7ae7a39703',
    title: 'Raqueta de Tenis Wilson Federer 23',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/275337-1000-1000/WR029310U-000-1.jpg?v=637556495982270000',
    price: 6.699,
    category: 'tenis'
  },
  {
    _id: '615297108388667e7ccd46ef',
    title: 'Chomba adidas Tenis Club',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/354079-1000-1000/6GL5421-000-1.jpg?v=637655874023000000',
    price: 7.199,
    category: 'tenis'
  },
  {
    _id: '615297103a168f9ef9770d5a',
    title: 'Zapatillas Topper Rod Tenis Unisex',
    image:
      'https://sporting.vteximg.com.br/arquivos/ids/246332-1000-1000/2267700-000-1.jpg?v=637497028216630000',
    price: 6.299,
    category: 'tenis'
  }
];
