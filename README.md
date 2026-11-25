# Cronograma ADS EaD — UESB

Painel público de acompanhamento das atividades, encontros síncronos, composição de notas e calendário das disciplinas do curso **Tecnólogo em Análise e Desenvolvimento de Sistemas (EaD) — UESB**.

🔗 **Acesso (GitHub Pages):** https://samuelmerces.github.io/ads-ead-uesb/

## Estrutura Multi-Semestre / Multi-Bloco

```text
├── index.html               # Interface única com seletor de Semestre / Bloco
├── assets/
│   ├── styles.css
│   └── app.js
└── data/
    ├── periodos.js          # Catálogo de períodos (define o bloco atual padrão)
    ├── 2026-2-bloco-2.js    # Dados públicos de 2026.2 • Bloco 2
    └── YYYY-S-bloco-B.js    # Novos semestres e blocos futuros
```

### Como adicionar um novo semestre/bloco (ex.: `2027.1 • Bloco 1`)
1. Crie `data/2027-1-bloco-1.js` contendo exclusivamente os dados públicos das disciplinas e atividades do bloco.
2. Cadastre o novo bloco em `data/periodos.js` marcando `atual: true` (e altere o anterior para `atual: false`).
3. Faça `git push` para a branch `main`. O link principal abrirá automaticamente no novo bloco, mantendo os anteriores disponíveis no seletor (e via `?periodo=2026-2-bloco-2`).

> Este repositório contém exclusivamente dados públicos voltados aos estudantes.
