/* ui.js — detalhes de interface: modal Pix, voltar ao topo e newsletter */
function iniciarUI() {
  // ----- Modal Pix (janela de diálogo acessível) -----
  var modal = document.getElementById("pixModal");
  var fechar = document.getElementById("closePixModal");
  var gatilhos = document.querySelectorAll(".pix-trigger");
  var ultimoFoco = null;

  function abrirModal(e) {
    if (e) e.preventDefault();
    if (!modal) return;
    ultimoFoco = document.activeElement;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    if (fechar) fechar.focus();
    document.addEventListener("keydown", teclaModal);
  }
  function fecharModal() {
    if (!modal) return;
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.removeEventListener("keydown", teclaModal);
    if (ultimoFoco) ultimoFoco.focus();
  }
  function teclaModal(e) {
    if (e.key === "Escape") fecharModal();
  }

  gatilhos.forEach(function (g) {
    g.addEventListener("click", abrirModal);
  });
  if (fechar) fechar.addEventListener("click", fecharModal);
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) fecharModal(); // clicar no fundo fecha
    });
  }

  // ----- Botão "voltar ao topo" -----
  var topo = document.getElementById("backToTop");
  if (topo) {
    window.addEventListener("scroll", function () {
      topo.style.display = window.scrollY > 400 ? "block" : "none";
    });
  }

  // ----- Newsletter: confirmação sem recarregar a página -----
  var form = document.getElementById("newsletterForm");
  var status = document.getElementById("newsletterStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) status.textContent = "Inscrição confirmada! Obrigado por acompanhar o Sertão Vivo.";
      form.reset();
    });
  }
}
