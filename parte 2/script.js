console.log("Script carregado com sucesso!");

const imagensDePerfil = [
    "https://i.ibb.co/sd3p7BC1/M-dia.jpg",
    "https://i.ibb.co/JWCRHDHB/imagem-dois.jpg" ,
    "https://i.ibb.co/xbVxy3M/image.png"
];
let indiceAtual = 0;

const img = document.getElementById("imagensCarrossel");
const botaoAnterior = document.getElementById("anterior");
const botaoPosterior = document.getElementById("posterior");

function trocarImagem() {
    img.src = imagensDePerfil[indiceAtual];
}

botaoAnterior.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagensDePerfil.length) % imagensDePerfil.length;
    trocarImagem();
});

botaoPosterior.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagensDePerfil.length;
    trocarImagem();
});

