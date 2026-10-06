
const imagens = document.querySelectorAll('.carrossel-img');
const container = document.querySelector('.carrossel-container');
const setaEsquerda = document.querySelector('.carrossel-seta.esquerda');
const setaDireita = document.querySelector('.carrossel-seta.direita');

let imagemAtual = 0;

function atualizarCarrossel() {
    imagens.forEach((imagem, index) => {
        let posicao = index - imagemAtual;

        if (posicao > imagens.length / 2) {
            posicao -= imagens.length;
        }

        if (posicao < -imagens.length / 2) {
            posicao += imagens.length;
        }

        if (posicao === 0) {
            imagem.style.transform = 'translateX(0) scale(1)';
            imagem.style.opacity = '1';
            imagem.style.zIndex = '3';
        } 
        else if (posicao === -1) {
            imagem.style.transform = 'translateX(-75%) scale(0.75)';
            imagem.style.opacity = '0.3';
            imagem.style.zIndex = '2';
        } 
        else if (posicao === 1) {
            imagem.style.transform = 'translateX(75%) scale(0.75)';
            imagem.style.opacity = '0.3';
            imagem.style.zIndex = '2';
        } 
        else {
            imagem.style.transform = 'translateX(0) scale(0)';
            imagem.style.opacity = '0';
            imagem.style.zIndex = '1';
        }
    });
}

setaEsquerda.addEventListener('click', () => {
    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }

    atualizarCarrossel();
});

setaDireita.addEventListener('click', () => {
    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }

    atualizarCarrossel();
});

atualizarCarrossel();

