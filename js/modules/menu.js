/* menu.js — abre/fecha o menu no celular */
function iniciarMenu() {
  var botao = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  if (!botao || !nav) return;

  botao.addEventListener("click", function () {
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
    });
  });
}
