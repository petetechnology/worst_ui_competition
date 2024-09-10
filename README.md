# Desafio - Teclado Virtual com Letras Aleatórias 🎹

Este projeto implementa um teclado virtual que reorganiza aleatoriamente as letras de suas teclas após um intervalo de tempo ou quando uma tecla é pressionada. O projeto utiliza HTML, CSS e JavaScript.

## Funcionalidades ✨

- As teclas do teclado virtual têm seus valores alterados aleatoriamente a cada 1,7 segundos.
- O teclado inclui as teclas de letras e teclas especiais como "espaço" e "apagar".
- Cada vez que uma tecla é pressionada, seu valor é registrado e exibido na tela.
- Se a tecla "apagar" for pressionada, o último caractere digitado será removido.
- Se a tecla "espaço" for pressionada, um espaço em branco será adicionado à sequência.
- O design da página é responsivo, adaptando-se a diferentes tamanhos de tela (desktop e mobile).

## Tecnologias Utilizadas 🛠️

HTML5: Para a estrutura da página.
CSS3: Para o estilo da interface, incluindo responsividade.
JavaScript: Para a lógica de manipulação do teclado e a troca aleatória das letras.

## Como Usar 🚀

Clone este repositório e execute o arquivo index.html ou acesse o link: .
Abra o arquivo index.html no seu navegador.
Pressione as teclas virtuais no teclado para digitar.
As teclas trocam aleatoriamente seus valores a cada 1,7 segundos ou quando clicadas.
A sequência de teclas pressionadas será exibida na área da tela.

## Estilização e Layout 🎨

O layout é adaptado para telas de diferentes tamanhos. Em dispositivos móveis, os botões do teclado são redimensionados para proporcionar uma experiência de uso confortável.
As teclas têm efeitos de hover, mudando de cor quando o cursor passa sobre elas.

## Personalização ⚙️

Se quiser alterar o intervalo de tempo entre as reorganizações das teclas, você pode modificar o valor no método setInterval no arquivo src/js/index.js:

setInterval(mudarLetras, 1700); // Altere 1700 para o valor desejado (em milissegundos)

## Contribuindo 🤝

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.