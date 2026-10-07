# Instituto Sertão Vivo — Terceiro Setor
Landing page fictícia de uma ONG do sertão de Pernambuco, feita para a aula de
HTML, CSS e Identidade Visual. Projeto acadêmico.

Páginas:
- `index.html` — página principal (hero, impacto, doação, depoimentos, FAQ, newsletter)
- `impacto.html` — página de detalhes dos projetos

## Modularização (o que explicar ao professor)

**CSS** — em vez de um `styles.css` gigante, o código é dividido por
responsabilidade, e o `style.css` só orquestra tudo com `@import`:

    css/
    ├── style.css        → importa os módulos na ordem
    ├── variables.css    → design tokens (cores, fontes, espaços)
    ├── base.css         → reset, tipografia e base de acessibilidade
    ├── components.css   → botão, badge, card, carrossel (BEM: bloco__elemento--modificador)
    ├── icons.css        → ícones SVG
    ├── header.css       → cabeçalho e nav
    ├── hero.css         → seção de destaque
    ├── sections.css     → impacto, doação, depoimentos, FAQ
    └── footer.css       → rodapé

**JS** — mesma ideia: cada funcionalidade em seu arquivo e o `main.js` orquestra:

    js/
    ├── main.js          → ponto de entrada, liga os módulos
    ├── imagens.js       → carrossel de fotos
    └── modules/
        ├── menu.js      → menu mobile (abre/fecha + aria-expanded)
        ├── counter.js   → anima os números de impacto
        ├── donation.js  → abas "mensal / única"
        ├── message.js   → carrossel de depoimentos
        └── ui.js        → modal Pix, voltar ao topo e newsletter

### Por que modularizar
- Organização e manutenção: acho e altero um componente sem mexer no resto.
- Reutilização: `.btn` e `.card` servem em qualquer parte.
- Trabalho em equipe: cada um mexe num arquivo, sem conflito.

## Acessibilidade
Recursos aplicados seguindo as diretrizes WCAG:
- **VLibras** — tradução do conteúdo para Libras nas duas páginas.
- **HTML semântico** — `header`, `nav`, `main`, `section`, `article`, `footer`.
- **Link "pular para o conteúdo"** (skip link), visível ao navegar por Tab.
- **Navegação por teclado** com foco visível; abas de doação com setas ← →.
- **Textos alternativos (`alt`)** descritivos em todas as imagens do carrossel.
- **Contraste AA** entre texto e fundo (botões, abas, hero, links).
- **ARIA** nas abas (`tablist/tab/tabpanel`), no menu (`aria-expanded`), no
  modal Pix (`role="dialog"`, fecha com Esc) e nos depoimentos (`aria-live`).
- **Formulário identificado** — `label`, `autocomplete` e mensagem de status.
- **`prefers-reduced-motion`** — desliga animações para quem prefere menos movimento.

## Como rodar
Funciona abrindo o `index.html` (duplo clique). Para a melhor experiência
(auto-reload ao salvar), use o **Live Server** do VS Code (botão "Go Live")
ou um servidor local:

    python3 -m http.server

e abra http://localhost:8000

Observação: o VLibras depende de internet (carrega o app oficial do Governo),
então ele só aparece com a página servida/publicada, não abrindo o arquivo offline.
