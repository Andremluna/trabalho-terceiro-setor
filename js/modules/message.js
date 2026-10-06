/* message.js — carrossel de depoimentos (setas anterior/próximo) */
function iniciarDepoimentos() {
    const depoimentos = [
        {
            fala: `"Antes do projeto, a gente andava horas debaixo do sol para buscar água turva. Hoje, com a cisterna no quintal e a horta, minhas filhas bebem água limpa e eu vendo nossa produção na feira."`,
            autor: "— Dona Severina, agricultora em Serra Branca (PE)"
        },
        {
            fala: `"Antes, a gente precisava caminhar muito para conseguir água. Hoje temos a cisterna perto de casa e nossa rotina ficou muito mais tranquila."`,
            autor: "— Dona Maria, agricultora do sertão pernambucano"
        },
        {
            fala: `"Ter água armazenada em casa mudou muito a nossa vida. Agora podemos cuidar melhor da família e também da nossa pequena produção."`,
            autor: "— Seu José, agricultor familiar"
        },
        {
            fala: `"A horta passou a fazer parte da nossa rotina. Além de produzir para nossa família, conseguimos vender o que sobra e complementar a renda."`,
            autor: "— Dona Francisca, agricultora familiar"
        }
    ];

    const fala = document.getElementById("fala");
    const autor = document.getElementById("autor");
    const btnAnterior = document.getElementById("btnAnterior");
    const btnProximo = document.getElementById("btnProximo");

    // Se a seção não existir na página, não faz nada (evita erro no console)
    if (!fala || !autor || !btnAnterior || !btnProximo) return;

    let indiceAtual = 0;

    function mostrarDepoimento() {
        fala.textContent = depoimentos[indiceAtual].fala;
        autor.textContent = depoimentos[indiceAtual].autor;
    }

    btnProximo.addEventListener("click", () => {
        indiceAtual = (indiceAtual + 1) % depoimentos.length;
        mostrarDepoimento();
    });

    btnAnterior.addEventListener("click", () => {
        indiceAtual = (indiceAtual - 1 + depoimentos.length) % depoimentos.length;
        mostrarDepoimento();
    });

    mostrarDepoimento();
}
