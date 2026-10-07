/* menu.js — abre/fecha o menu no celular */
function iniciarMenu() {
  var botao = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  if (!botao || !nav) return;

  function definirEstado(aberto) {
    nav.classList.toggle("is-open", aberto);
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  }

  botao.addEventListener("click", function () {
    definirEstado(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      definirEstado(false);
    });
  });
}
