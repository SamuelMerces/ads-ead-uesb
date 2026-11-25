// Catálogo oficial de Semestres e Blocos — ADS EaD UESB
// Para adicionar um novo bloco (ex.: 2027.1 • Bloco 1):
// 1) Crie data/2027-1-bloco-1.js (apenas dados públicos dos alunos)
// 2) Adicione um novo objeto no TOPO abaixo com atual: true (e marque o anterior como atual: false)

window.UESB_PERIODOS = [
  {
    id: "2026-2-bloco-2",
    semestre: "2026.2",
    bloco: "Bloco 2",
    label: "2026.2 • Bloco 2",
    periodoLetivo: "16/11/2026 a 06/03/2027",
    mesInicial: "2026-11",
    mesFinal: "2027-03",
    atual: true,
    encerrado: false,
    arquivo: "data/2026-2-bloco-2.js",
    arquivoTutor: "data/2026-2-bloco-2.js"
  },
  {
    id: "2026-1-bloco-2",
    semestre: "2026.1",
    bloco: "Bloco 2",
    label: "2026.1 • Bloco 2",
    periodoLetivo: "25/05/2026 a 15/09/2026",
    mesInicial: "2026-05",
    mesFinal: "2026-09",
    atual: false,
    encerrado: true,
    arquivo: "data/2026-1-bloco-2.js",
    arquivoTutor: "data/2026-1-bloco-2.js"
  },
  {
    id: "2026-1-bloco-1",
    semestre: "2026.1",
    bloco: "Bloco 1",
    label: "2026.1 • Bloco 1",
    periodoLetivo: "02/03/2026 a 08/06/2026",
    mesInicial: "2026-03",
    mesFinal: "2026-08",
    atual: false,
    encerrado: true,
    arquivo: "data/2026-1-bloco-1.js",
    arquivoTutor: "data/2026-1-bloco-1.js"
  }
];

window.UESB_DADOS_ALUNOS = window.UESB_DADOS_ALUNOS || {};
window.UESB_DADOS_TUTOR = window.UESB_DADOS_TUTOR || {};
