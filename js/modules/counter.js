/* counter.js — anima os números de impacto quando aparecem na tela */
function iniciarContadores() {
  var numeros = document.querySelectorAll(".stat__number");
  if (!numeros.length) return;

  // Se a pessoa prefere menos movimento, mostra o número final direto
  var semMovimento =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animar(el) {
    var alvo = Number(el.dataset.target);
    if (semMovimento) {
      el.textContent = alvo.toLocaleString("pt-BR");
      return;
    }
    var duracao = 1200;
    var inicio = performance.now();

    function passo(agora) {
      var progresso = Math.min((agora - inicio) / duracao, 1);
      el.textContent = Math.floor(progresso * alvo).toLocaleString("pt-BR");
      if (progresso < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

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
    if (!semMovimento) n.textContent = "0";
    observador.observe(n);
  });
}
