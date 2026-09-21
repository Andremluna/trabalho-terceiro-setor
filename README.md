# Instituto Sertão Vivo — Terceiro Setor
Landing page fictícia (ONG) para a aula de CSS e Identidade Visual.
Tema do exit ticket: **Modularização**.

## Como modularizamos (o que explicar ao professor)

**CSS** — em vez de um `styles.css` gigante, o código foi dividido por responsabilidade,
e o `style.css` só orquestra tudo com `@import`:

    css/
    ├── style.css        → importa os módulos na ordem
    ├── variables.css    → design tokens (cores, fontes, espaços)
    ├── base.css         → reset + tipografia
    ├── components.css    → botão, badge, card (BEM: bloco__elemento--modificador)
    ├── header.css       → cabeçalho e nav
    ├── hero.css         → seção de destaque
    ├── sections.css     → impacto, doação, depoimento, faq
    └── footer.css       → rodapé

**JS** — mesma ideia, cada função em seu arquivo; `main.js` orquestra:

    js/
    ├── main.js          → ponto de entrada, liga os módulos
    └── modules/
        ├── menu.js      → menu mobile
        ├── counter.js   → anima os números de impacto
        └── donation.js  → alterna abas mensal/único

## Por que modularizar
- Organização e manutenção: acho e altero um componente sem mexer no resto.
- Reutilização: `.btn` e `.card` servem em qualquer parte.
- Trabalho em equipe: cada um mexe num arquivo, sem conflito.

## Como rodar
Funciona só abrindo o `index.html` (duplo clique). Para a melhor experiência
(auto-reload ao salvar), use o **Live Server** do VS Code (botão "Go Live")
ou rode um servidor local:

    python3 -m http.server

e abra http://localhost:8000

Os ícones são SVG inline (sem biblioteca externa), e os números de impacto
já aparecem corretos mesmo se o JS não rodar o JS só adiciona a animação.
