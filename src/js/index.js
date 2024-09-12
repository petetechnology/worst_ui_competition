let teclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç", "@", ".", "apagar", "Z", "X", "C", "espaço", "V", "B", "N", "M"];

const formCadastro = document.querySelector("#formCadastro");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const btnCadastrar = document.querySelector("#btnCadastrar");
const containerTeclado = document.querySelector("#containerTeclado");

let campoAtivo = null;

function mudarLetras() {
    let teclasDisponiveis = [...teclas];

    document.querySelectorAll('#containerTeclado input[type="button"]').forEach(teclaAtual => {
        let indiceAleatorio = Math.floor(Math.random() * teclasDisponiveis.length);
        teclaAtual.value = teclasDisponiveis[indiceAleatorio];
        teclasDisponiveis.splice(indiceAleatorio, 1);
    });

    teclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç", "@", ".", "apagar", "Z", "X", "C", "espaço", "V", "B", "N", "M"];
}

setInterval(mudarLetras, 1800);

inputNome.addEventListener('focus', () => campoAtivo = inputNome);
inputEmail.addEventListener('focus', () => campoAtivo = inputEmail);
inputSenha.addEventListener('focus', () => campoAtivo = inputSenha);

containerTeclado.addEventListener("click", (e) => {
    let valorTecla = e.target.value;

    if (!valorTecla || !campoAtivo) return;

    if (valorTecla === "espaço") {
        campoAtivo.value += " ";
    } else if (valorTecla === "apagar") {
        campoAtivo.value = campoAtivo.value.slice(0, -1);
    } else {
        campoAtivo.value += valorTecla;
    }

    mudarLetras();
});


btnCadastrar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();

    if (nome && email && senha) {
        alert(`Usuário ${nome} cadastrado com sucesso! :)`);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
