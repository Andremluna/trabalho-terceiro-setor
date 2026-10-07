/* donation.js — alterna entre "Doação mensal" e "Doação única" (padrão ARIA tabs) */
function iniciarDoacao() {
  var tabs = Array.prototype.slice.call(
    document.querySelectorAll("#donationTabs .tabs__btn")
  );
  var paineis = document.querySelectorAll("[data-panel]");
  if (!tabs.length) return;

  function selecionar(tab) {
    var alvo = tab.dataset.tab;

    tabs.forEach(function (t) {
      var ativo = t === tab;
      t.classList.toggle("is-active", ativo);
      t.setAttribute("aria-selected", ativo ? "true" : "false");
      t.setAttribute("tabindex", ativo ? "0" : "-1");
    });
    paineis.forEach(function (p) {
      p.classList.toggle("is-hidden", p.dataset.panel !== alvo);
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      selecionar(tab);
    });
    // Navegação pelas setas do teclado (padrão de abas)
    tab.addEventListener("keydown", function (e) {
      var novo = null;
      if (e.key === "ArrowRight") novo = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") novo = tabs[(i - 1 + tabs.length) % tabs.length];
      if (novo) {
        e.preventDefault();
        selecionar(novo);
        novo.focus();
      }
    });
  });
}
