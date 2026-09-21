/* donation.js — alterna entre "Doação mensal" e "Doação única" */
function iniciarDoacao() {
  var tabs = document.querySelectorAll("#donationTabs .tabs__btn");
  var paineis = document.querySelectorAll("[data-panel]");
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var alvo = tab.dataset.tab;

      tabs.forEach(function (t) {
        t.classList.toggle("is-active", t === tab);
      });
      paineis.forEach(function (p) {
        p.classList.toggle("is-hidden", p.dataset.panel !== alvo);
      });
    });
  });
}
