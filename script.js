function CarregaBiografia() {
  
  var biografias = {
    bio01: {
      nome: "Gilberto Gil",     
      imagem: "imagens/gilberto.jpg",     
      descricao: "Gil nasceu em 1942 na Bahia e desde sempre mostrou que tinha dentro dele o bichinho da música. Ao lado de Caetano, o baiano se empenhou para levar a frente a sua Tropicália e acabou entrando na história da música popular brasileira.",
      link: "https://open.spotify.com/intl-pt/artist/7oEkUINVIj1Nr3Wnj8tzqr?si=EzMbmvEUSamoj-QqSN9OXA"  
    },
    bio02: {
      nome: "Caetano Veloso",
      imagem: "imagens/caetano.jpg",
      descricao: "Caetano Veloso nasceu em 7 de agosto de 1942 em Santo Amaro, na Bahia, como o quinto dos sete filhos de José Teles Velloso. É impossível falar de Tropicália sem mencionar Caetano Veloso. Ele e Gilberto Gil foram os principais nomes da questionadora geração de 60 que lutava corajosamente pela liberdade e contra a ditadura.",
      link: "https://open.spotify.com/intl-pt/artist/7HGNYPmbDrMkylWqeFCOIQ?si=zpinE2ftQc-kbHgJJWRctA"  
    },     
    bio03: {      
      nome: "Rita Lee",
      imagem: "imagens/rita.jpg",
      descricao: "Nascida em 1947, em uma família de classe média paulistana, Rita é a filha mais nova do dentista Charles Fenley Jones. Em 1967, o grupo estava ao lado de Gilberto Gil no III Festival da Música Popular Brasileira durante a apresentação da canção Domingo no Parque. Vanguardistas, os integrantes da banda também participaram do disco icônico Tropicália ou Panis et Circensis. Rita Lee acabou saindo dos Mutantes e seguiu uma memorável carreira solo investindo mais no ritmo pop.",
      link: "https://open.spotify.com/intl-pt/artist/7dnT2FUXhjirperXaH22IJ?si=6C3kJrw0QayoSmXvB_yqFw"  
    },
    bio04: {
      nome: "Tom Zé",
      imagem: "imagens/tom.jpg",
      descricao: "Controverso, questionador, polêmico, esse é Tom Zé, um baiano nascido em Irara, no recôncavo baiano, em 1936. Filho de um sujeito que ganhou a loteria federal, a família de Zé nunca teve dificuldades financeiras e aceitou rapidamente quando o adolescente resolveu cursar música na Universidade da Bahia. Foram seis anos estudando e conhecendo gente jovem igualmente interessada pelo universo artístico. Foi durante esse período que conheceu outros integrantes da Tropicália e juntos fizeram o espetáculo Nós, Por Exemplo. Essa parceria foi tão forte que culminou na gravação do CD Tropicália ou Panis et Circensis.",
      link: "https://open.spotify.com/intl-pt/artist/1gIa65d5ICT2xVWiUJ3u27?si=UHOlWsQsSP-q5F4gXc_otQ" 
    },
    bio05: {
      nome: "Nara Leão",
      imagem: "imagens/nara.jpg",
      descricao: "Nara nasceu em Vitória em 1942. A musa da bossa nova também participou ativamente da Tropicália. No final da década de 60, Nara se aproximou dos compositores baianos e participou da gravação do disco Tropicalia ou Panis et Circenses. Sua voz ficou eternizada pela canção Lindoneia.",
      link: "https://open.spotify.com/intl-pt/artist/64KVQ4YupSZYrGNLduVtj3?si=IAfKPQsNR5CM8yaQdy6-MA"  
    },
    bio06: {
      nome: "Gal Costa",
      imagem: "imagens/gal.jpg",
      descricao: "Gal Costa, nasceu em Salvador, Bahia, no dia 26 de setembro de 1945. Sua carreira musical está intimamente ligada à Tropicália, o movimento que ajudou a criar. Em 1965, Gal foi para o Rio de Janeiro, onde lançou seu primeiro disco, ao lado de Caetano Veloso. No ano a seguir, se apresentou no I Festival Internacional da Canção com Gilberto Gil e Torquato Neto. Na ocasião, os três cantaram Minha Senhora.",
      link: "https://open.spotify.com/intl-pt/artist/1b8kpp4DUwt1hWaxTiWQhD?si=JG1Oc-qRS2Wmf2c-hJPKDQ"  
    },
    bio07: {
      nome: "Torquato",
      imagem: "imagens/torquato.png",
      descricao: "Torquato nasceu no Piauí, em 1944, filho de um promotor público, e foi durante a adolescência estudar em Salvador. Foi lá que conheceu a turma animada que estava querendo revolucionar a música e juntos começaram a ensaiar os primeiros passos da Tropicália. Jornalista, letrista, compositor, ele forneceu uma série de músicas para grandes nomes da MPB.",
      link: "#"  
    },
    bio08: {
      nome: "Mutantes",
      imagem: "imagens/mutantes.jpg",
      descricao: "Os Mutantes é uma banda brasileira de rock psicodélico formada durante o Movimento Tropicalista no ano de 1966, em São Paulo, por Arnaldo Baptista, Rita Lee e Sérgio Dias. Também participaram do grupo Liminha e Dinho Leme.",
      link: "https://open.spotify.com/intl-pt/artist/5C0gCCG8N5Dh5dZytIgzLX?si=-v2DShyJSFyYjXMwzZKdXw" 
    },
    bio09: {
      nome: "Jorge Ben Jor",
      imagem: "imagens/jorge.jpg",
      descricao: "Jorge Ben Jor, nasceu no bairro da Madureira, no Rio de Janeiro, no dia 29 de dezembro de 1945. Tropicalia, bebeu de Jorge Ben muita da sua irreverência musical.",
      link: "https://open.spotify.com/intl-pt/artist/5JYtpnUKxAzXfHEYpOeeit?si=2iuDP2mEQqCKQ6CVT8pu-g"  
    }
  };

  var content = document.getElementById("content");

  
  for (var bio in biografias) {
    var biografia = biografias[bio];

    var card = document.createElement('article');
    card.className = 'card';

    var link = document.createElement('a');
    link.href = biografia.link;  // Define o link
    link.target = '_blank';      // Abre o link em uma nova aba

    var img = document.createElement('img');
    img.src = biografia.imagem;
    img.alt = 'Imagem de ' + biografia.nome; 
    link.appendChild(img); 

    card.appendChild(link); 

    var details = document.createElement('details');

    var summary = document.createElement('summary');
    summary.textContent = biografia.nome;  
    details.appendChild(summary);

    var description = document.createElement('p');
    description.textContent = biografia.descricao;  
    details.appendChild(description);

    card.appendChild(details);

    content.appendChild(card);
  }
}

CarregaBiografia();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}
