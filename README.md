# Desenvolvimento de Website Responsivo para Plataformas Móveis

![Screenshot_2](https://github.com/user-attachments/assets/e7f35ac1-91d3-4bf5-9061-a5fb8fc78163)
Este projeto visa a criação de um website responsivo, projetado especificamente para atender às necessidades da disciplina de Desenvolvimento para Plataformas Móveis. O objetivo é desenvolver uma solução web que se adapte perfeitamente a uma variedade de dispositivos móveis e tamanhos de tela, oferecendo uma experiência de usuário fluida e intuitiva.

O site apresenta uma linha do tempo dos cantores da Tropicália. Ao clicar em cada card, você será redirecionado para o perfil do artista no Spotify. Além disso, é possível acessar informações adicionais sobre cada cantor ao abrir o card pelo nome.

## Tecnologias Utilizadas

- ![HTML5 Logo](https://img.icons8.com/color/22/000000/html-5.png)  **HTML5** : Estruturação semântica e conteúdo do website.
-  ![CSS3 Logo](https://img.icons8.com/color/22/000000/css3.png)  **CSS3**: Design responsivo e estilização visual.
- ![JavaScript Logo](https://img.icons8.com/color/22/000000/javascript.png)  **JavaScript**: Funcionalidades interativas e dinâmicas.
- **Progressive Web App (PWA)**: Experiência de aplicativo nativa em navegadores.



## Função `CarregaBiografia`

A função `CarregaBiografia` é responsável por criar e exibir cartões de biografia para músicos na página web.

**Dados dos Músicos**:
   - Utiliza um objeto `biografias` que contém:
     - Nome
     - Imagem
     - Descrição
     - Link para o perfil no Spotify

**Seleciona o Local de Exibição**:
   - Seleciona o elemento HTML com o ID `content`, onde os cartões serão inseridos.

**Criação dos Cartões**:
   - Para cada músico, a função cria um cartão com as seguintes partes:
     - **Imagem**: Exibe a foto do músico.
     - **Link**: Faz a imagem linkar para o perfil do músico no Spotify.
     - **Detalhes**: Adiciona um título com o nome do músico. Inclui uma descrição do músico que pode ser expandida ou recolhida.

**Adiciona os Cartões ao HTML**:
   - Insere cada cartão no elemento `content` na página.

##

Para acessar o site ➡️ https://linhatropicalia.netlify.app/
