/* counter.js — anima os números de impacto quando aparecem na tela */
function iniciarContadores() {
  var numeros = document.querySelectorAll(".stat__number");
  if (!numeros.length) return;

  function animar(el) {
    var alvo = Number(el.dataset.target);
    var duracao = 1200;
    var inicio = performance.now();

    function passo(agora) {
      var progresso = Math.min((agora - inicio) / duracao, 1);
      el.textContent = Math.floor(progresso * alvo).toLocaleString("pt-BR");
      if (progresso < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  // Se o navegador não suportar IntersectionObserver, anima tudo direto
  if (!("IntersectionObserver" in window)) {
    numeros.forEach(animar);
    return;
  }

  var observador = new IntersectionObserver(function (entradas, obs) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        animar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.2 });

  numeros.forEach(function (n) {
    n.textContent = "0";      // começa do zero para animar
    observador.observe(n);
  });
}
