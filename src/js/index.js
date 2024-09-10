let digitado = [];
let teclas = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç", "apagar", "Z", "X", "C", "espaço", "V", "B", "N", "M"];

const containerTela = document.querySelector("#containerTela");
const containerTeclado = document.querySelector("#containerTeclado");

// Função para mudar as letras aleatoriamente
function mudarLetras() {
    let teclasDisponiveis = [...teclas];

    document.querySelectorAll('#containerTeclado input[type="button"]').forEach(teclaAtual => {
        let indiceAleatorio = Math.floor(Math.random() * teclasDisponiveis.length);
        teclaAtual.value = teclasDisponiveis[indiceAleatorio];
        teclasDisponiveis.splice(indiceAleatorio, 1);
    });

    // Restaure a lista de teclas
    teclas = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç", "apagar", "Z", "X", "C", "espaço", "V", "B", "N", "M"];
}

// A cada 1,3 segundos (1300 milissegundos), as letras são reorganizadas automaticamente
setInterval(mudarLetras, 1700);

// Evento de clique no teclado que também muda as letras aleatoriamente ao clicar
containerTeclado.addEventListener("click", (e) => {
    let valorTecla = null;
    valorTecla = e.target.value;

    if (valorTecla) {
        if (valorTecla !== "espaço" && valorTecla !== "apagar") {
            digitado.push(valorTecla);
        } else if (valorTecla === "espaço") {
            digitado.push(" ");
        } else if (valorTecla === "apagar") {
            digitado.pop();
        }

        // Atualiza o conteúdo da tela
        containerTela.textContent = digitado.join('');

        // Muda as letras após o clique
        mudarLetras();
    }
});
