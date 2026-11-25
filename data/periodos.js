// Catálogo oficial de Semestres e Blocos — ADS EaD UESB
// Para adicionar um novo bloco (ex.: 2027.1 • Bloco 1):
// 1) Crie data/2027-1-bloco-1.js (apenas dados públicos dos alunos)
// 2) Adicione um novo objeto abaixo com atual: true (e marque o anterior como atual: false)

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
    arquivo: "data/2026-2-bloco-2.js",
    arquivoTutor: "data/2026-2-bloco-2.js"
  }
];

window.UESB_DADOS_ALUNOS = window.UESB_DADOS_ALUNOS || {};
window.UESB_DADOS_TUTOR = window.UESB_DADOS_TUTOR || {};
