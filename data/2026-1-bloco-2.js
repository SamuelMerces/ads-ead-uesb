// Dados públicos (Histórico Arquivado) — UESB ADS EaD 2026.1 (Bloco 2)
// IMPORTANTE: Este arquivo é publicado no GitHub Pages.
// Nunca incluir itens ocultos no Moodle, contagens de correção ou notas internas de tutoria.

window.UESB_DADOS_ALUNOS = window.UESB_DADOS_ALUNOS || {};
window.UESB_DADOS_ALUNOS["2026-1-bloco-2"] = {
  meta: {
    id: "2026-1-bloco-2",
    instituicao: "UESB — UAB / CEAD",
    curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas (EaD)",
    semestre: "2026.1",
    bloco: "Bloco 2",
    periodoLetivo: "25/05/2026 a 15/09/2026 (Encerrado)",
    encerrado: true,
    atualizadoEm: "2026-11-25T13:00:00-03:00",
    atualizadoLabel: "25/11/2026 (Registro arquivado)",
    moodleUrl: "https://moodle4.uesb.br/",
    recessos: []
  },
  disciplinas: [
    {
      id: "ap",
      nome: "Algoritmos e Programação",
      sigla: "AP",
      professor: "Prof. Murilo Silva Santana",
      cargaHoraria: "60h",
      cor: "#0891b2",
      corSuave: "rgba(8, 145, 178, 0.14)",
      status: "Encerrada",
      resumo: "Organização de memória em Java, referências e estruturas de dados, com 2 Fóruns de discussão, Lista Avaliativa, Prova Escrita e Prova Final.",
      moodleUrl: "https://moodle4.uesb.br/course/view.php?id=886",
      escalaNota: "Lista + Prova Escrita",
      avaliacoes: [
        { nome: "Fóruns I e II (Unidades I e II)", peso: 20, label: "Participação" },
        { nome: "Lista Avaliativa", peso: 30, label: "0–100 pts" },
        { nome: "Prova Escrita Presencial", peso: 50, label: "0–10 pts" }
      ]
    },
    {
      id: "adm",
      nome: "Fundamentos da Administração",
      sigla: "ADM",
      professor: "Prof. Marcus Vinicius Carvalho Fagundes",
      cargaHoraria: "60h",
      cor: "#d97706",
      corSuave: "rgba(217, 119, 6, 0.14)",
      status: "Encerrada",
      resumo: "Três unidades com 3 Fóruns avaliativos (0,5 pt cada), 2 Atividades Avaliativas em Equipe (AAE.a e AAE.b), Avaliação Presencial Individual e Prova Final.",
      moodleUrl: "https://moodle4.uesb.br/course/view.php?id=887",
      escalaNota: "10,0 pts",
      avaliacoes: [
        { nome: "Fóruns 1, 2 e 3 (3 × 0,5 pt)", peso: 15, label: "1,5 pt" },
        { nome: "AAE.a – Sala de Aula Invertida", peso: 10, label: "1,0 pt" },
        { nome: "AAE.b – Diagnóstico Organizacional", peso: 15, label: "1,5 pt" },
        { nome: "Avaliação Presencial Individual", peso: 60, label: "6,0 pts" }
      ]
    },
    {
      id: "fc",
      nome: "Fundamentos da Computação",
      sigla: "FC",
      professor: "Prof. Robson Cipriano",
      cargaHoraria: "60h",
      cor: "#7c3aed",
      corSuave: "rgba(124, 58, 237, 0.14)",
      status: "Encerrada",
      resumo: "Seis encontros síncronos em 3 unidades, gamificação de Sistemas de Numeração, 3 Avaliações online (Google Forms), Avaliação Presencial e Prova Final.",
      moodleUrl: "https://moodle4.uesb.br/course/view.php?id=885",
      escalaNota: "30 pts (online + presencial)",
      avaliacoes: [
        { nome: "Avaliação 01 – Unidade I (Forms)", peso: 17, label: "5,0 pts" },
        { nome: "Avaliação 02 – Unidade I (Forms)", peso: 17, label: "5,0 pts" },
        { nome: "Avaliação Unidade II – Sistemas de Numeração", peso: 33, label: "10,0 pts" },
        { nome: "Avaliação Presencial", peso: 33, label: "10,0 pts" }
      ]
    }
  ],
  eventos: [
    // --- MAIO 2026 ---
    {
      id: "fc-aula01",
      disciplinaId: "fc",
      titulo: "Aula 01 – Encontro Síncrono (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-05-28",
      horario: "20:00",
      peso: "—",
      avaliativa: false,
      descricao: "Primeiro encontro síncrono de Fundamentos da Computação (material, gravação e lista de exercícios da Aula 01 disponíveis no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=885"
    },

    // --- JUNHO 2026 ---
    {
      id: "adm-aula02",
      disciplinaId: "adm",
      titulo: "2ª Aula Síncrona – Unidade I (Gravação disponível)",
      tipo: "Encontro Síncrono",
      data: "2026-06-02",
      horario: "Encontro síncrono",
      peso: "—",
      avaliativa: false,
      descricao: "Segunda aula síncrona da Unidade I com o Prof. Marcus Vinicius.",
      url: "https://moodle4.uesb.br/course/view.php?id=887"
    },
    {
      id: "fc-aula02",
      disciplinaId: "fc",
      titulo: "Aula 02 – Encontro Síncrono (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-06-05",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Segundo encontro síncrono da Unidade I (material e gravação no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=885"
    },
    {
      id: "adm-forum1",
      disciplinaId: "adm",
      titulo: "Fórum 1 – Princípios da Administração",
      tipo: "Fórum",
      data: "2026-06-08",
      dataAbertura: "2026-05-26",
      horario: "26/05 a 08/06",
      peso: "0,5 pt",
      avaliativa: true,
      descricao: "Primeiro fórum avaliativo da Unidade I sobre Princípios da Administração.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=27461"
    },
    {
      id: "fc-aula03",
      disciplinaId: "fc",
      titulo: "Aula 03 – Encontro Síncrono (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-06-11",
      horario: "19:30",
      peso: "—",
      avaliativa: false,
      descricao: "Terceiro encontro síncrono da Unidade I (material e vídeo disponíveis no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=885"
    },
    {
      id: "fc-aula04",
      disciplinaId: "fc",
      titulo: "Aula 04 – Encontro Síncrono (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-06-18",
      horario: "19:30",
      peso: "—",
      avaliativa: false,
      descricao: "Quarto encontro síncrono da Unidade I (material e vídeo disponíveis no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=885"
    },
    {
      id: "adm-forum2",
      disciplinaId: "adm",
      titulo: "Fórum 2 – Cultura e Comportamento Organizacional",
      tipo: "Fórum",
      data: "2026-06-30",
      dataAbertura: "2026-06-09",
      horario: "Até 23:59",
      peso: "0,5 pt",
      avaliativa: true,
      descricao: "Fórum avaliativo sobre Cultura e Comportamento Organizacional.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=27858"
    },

    // --- JULHO 2026 ---
    {
      id: "adm-aaea",
      disciplinaId: "adm",
      titulo: "Atividade Avaliativa em Equipe (AAE.a) – Sala de Aula Invertida",
      tipo: "Avaliativa",
      data: "2026-07-01",
      dataAbertura: "2026-06-16",
      horario: "Até 23:59 (apres. 30/06)",
      peso: "1,0 pt",
      avaliativa: true,
      descricao: "Trabalho em equipe na metodologia Sala de Aula Invertida (Unidade II).",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=28076"
    },
    {
      id: "fc-aula05",
      disciplinaId: "fc",
      titulo: "Aula 05 – 5º Encontro Síncrono (Unidade II: Sistemas de Numeração)",
      tipo: "Encontro Síncrono",
      data: "2026-07-09",
      horario: "19:30",
      peso: "—",
      avaliativa: false,
      descricao: "Encontro síncrono da Unidade II acompanhado de atividade de gamificação sobre Sistemas de Numeração.",
      url: "https://moodle4.uesb.br/course/view.php?id=885"
    },
    {
      id: "fc-av1-u1",
      disciplinaId: "fc",
      titulo: "Avaliação 01 – Unidade I (Questionário Google Forms)",
      tipo: "Avaliativa",
      data: "2026-07-17",
      dataAbertura: "2026-06-27",
      horario: "Até 23:55",
      peso: "5,0 pts",
      avaliativa: true,
      descricao: "Avaliação online com 5 questões de múltipla escolha sobre os conteúdos da Unidade I.",
      url: "https://moodle4.uesb.br/mod/url/view.php?id=27248&forceview=1"
    },
    {
      id: "fc-av2-u1",
      disciplinaId: "fc",
      titulo: "Avaliação 02 – Unidade I (Questionário Google Forms)",
      tipo: "Avaliativa",
      data: "2026-07-20",
      dataAbertura: "2026-07-17",
      horario: "Até 23:55",
      peso: "5,0 pts",
      avaliativa: true,
      descricao: "Segunda avaliação online (5 questões de múltipla escolha) da Unidade I.",
      url: "https://moodle4.uesb.br/mod/url/view.php?id=28702&forceview=1"
    },
    {
      id: "ap-forum1",
      disciplinaId: "ap",
      titulo: "Fórum I – Organização de Memória em Java (Objetos e Arrays)",
      tipo: "Fórum",
      data: "2026-07-21",
      dataAbertura: "2026-06-30",
      horario: "30/06 a 21/07",
      peso: "Participação",
      avaliativa: false,
      descricao: "Discussão da Primeira Unidade sobre como a organização de memória em Java influencia o uso de objetos e arrays.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=28281"
    },
    {
      id: "adm-forum3",
      disciplinaId: "adm",
      titulo: "Fórum 3 – Administração Contemporânea, Inovação e Digitalização",
      tipo: "Fórum",
      data: "2026-07-22",
      dataAbertura: "2026-07-08",
      horario: "Até 23:59",
      peso: "0,5 pt",
      avaliativa: true,
      descricao: "Terceiro fórum avaliativo abordando sistemas, inovação, sustentabilidade e digitalização.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=28388"
    },
    {
      id: "ap-forum2",
      disciplinaId: "ap",
      titulo: "Fórum II – Referências, Navegação em Estruturas e Aritmética de Ponteiros em Java",
      tipo: "Fórum",
      data: "2026-07-25",
      dataAbertura: "2026-07-19",
      horario: "19/07 a 25/07",
      peso: "Participação",
      avaliativa: false,
      descricao: "Discussão da Segunda Unidade sobre referências e navegação em estruturas de dados em Java.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=28713"
    },
    {
      id: "fc-av-u2",
      disciplinaId: "fc",
      titulo: "Avaliação – Unidade II (Sistemas de Numeração)",
      tipo: "Avaliativa",
      data: "2026-07-28",
      dataAbertura: "2026-07-23",
      horario: "23/07 a 28/07",
      peso: "10,0 pts",
      avaliativa: true,
      descricao: "Avaliação online com 10 questões de múltipla escolha sobre Sistemas de Numeração.",
      url: "https://moodle4.uesb.br/mod/url/view.php?id=28815&forceview=1"
    },
    {
      id: "fc-aula06",
      disciplinaId: "fc",
      titulo: "Aula 06 – 6º Encontro Síncrono (Unidade III)",
      tipo: "Encontro Síncrono",
      data: "2026-07-31",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Sexto encontro síncrono de encerramento dos conteúdos (material e vídeo no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=885"
    },

    // --- AGOSTO / SETEMBRO 2026 ---
    {
      id: "adm-aaeb",
      disciplinaId: "adm",
      titulo: "Atividade Avaliativa em Equipe (AAE.b) – Projeto de Diagnóstico Organizacional",
      tipo: "Avaliativa",
      data: "2026-08-04",
      dataAbertura: "2026-07-14",
      horario: "Até 23:59",
      peso: "1,5 pt",
      avaliativa: true,
      descricao: "Entrega do relatório do Projeto de Diagnóstico Organizacional em equipes (Unidade III).",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=28634"
    },
    {
      id: "ap-lista-av",
      disciplinaId: "ap",
      titulo: "Lista Avaliativa – Algoritmos e Programação",
      tipo: "Avaliativa",
      data: "2026-08-05",
      dataAbertura: "2026-07-20",
      horario: "Até 23:59",
      peso: "0–100 pts",
      avaliativa: true,
      descricao: "Entrega da Lista Avaliativa oficial da disciplina no Moodle.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=28773"
    },
    {
      id: "adm-presencial",
      disciplinaId: "adm",
      titulo: "Atividade de Aprendizagem n. 3 – Avaliação Presencial Individual e Prova Final",
      tipo: "Avaliativa",
      data: "2026-08-28",
      horario: "Registro no Moodle",
      peso: "6,0 pts (Presencial) / 10 pts (Final)",
      avaliativa: true,
      descricao: "Avaliação presencial individual e Prova Final de Fundamentos da Administração.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=30224"
    },
    {
      id: "fc-prova-final",
      disciplinaId: "fc",
      titulo: "Avaliação Presencial e Prova Final – Fundamentos da Computação",
      tipo: "Avaliativa",
      data: "2026-09-15",
      horario: "Registro no Moodle",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Lançamento das notas da Avaliação Presencial e Prova Final no Moodle.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=31068"
    },
    {
      id: "ap-prova-escrita",
      disciplinaId: "ap",
      titulo: "Prova Escrita e Prova Final – Algoritmos e Programação",
      tipo: "Avaliativa",
      data: null,
      horario: "Aplicação presencial nos polos",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Avaliação escrita presencial e Prova Final da disciplina registradas no Moodle.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=30210"
    }
  ]
};
