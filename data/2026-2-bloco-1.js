// Dados públicos (Histórico Arquivado) — UESB ADS EaD 2026.2 (Bloco 1)
// IMPORTANTE: Este arquivo é publicado no GitHub Pages.
// Nunca incluir itens ocultos no Moodle, contagens de correção ou notas internas de tutoria.

window.UESB_DADOS_ALUNOS = window.UESB_DADOS_ALUNOS || {};
window.UESB_DADOS_ALUNOS["2026-2-bloco-1"] = {
  meta: {
    id: "2026-2-bloco-1",
    instituicao: "UESB — UAB / CEAD",
    curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas (EaD)",
    semestre: "2026.2",
    bloco: "Bloco 1",
    periodoLetivo: "18/08/2026 a 13/11/2026 (Encerrado)",
    encerrado: true,
    atualizadoEm: "2026-11-25T13:24:00-03:00",
    atualizadoLabel: "25/11/2026 (Registro arquivado)",
    moodleUrl: "https://moodle4.uesb.br/",
    recessos: []
  },
  disciplinas: [
    {
      id: "es",
      nome: "Engenharia de Software",
      sigla: "ES",
      professor: "Prof. William da Silva Melo",
      cargaHoraria: "60h",
      cor: "#2563eb",
      corSuave: "rgba(37, 99, 235, 0.14)",
      status: "Encerrada",
      resumo: "Três unidades (Fundamentos, Processos/Metodologias Ágeis e Engenharia de Requisitos), com Mapa Mental, Seminário em grupo, Mini Projeto de Software e Avaliação Presencial.",
      moodleUrl: "https://moodle4.uesb.br/course/view.php?id=1084",
      escalaNota: "0 a 10 por instrumento",
      avaliacoes: [
        { nome: "Mapa Mental – Engenharia de Software", peso: 20, label: "0–10" },
        { nome: "Seminário: Processos e Metodologias", peso: 25, label: "0–10" },
        { nome: "Mini Projeto de Software (peso 2,4)", peso: 25, label: "Peso 2,4" },
        { nome: "Avaliação Presencial", peso: 30, label: "0–10" }
      ]
    },
    {
      id: "poo1",
      nome: "Programação Orientada a Objetos I",
      sigla: "POO I",
      professor: "Prof. Murilo Silva Santana",
      cargaHoraria: "60h",
      cor: "#059669",
      corSuave: "rgba(5, 150, 105, 0.14)",
      status: "Encerrada",
      resumo: "Classes, construtores, herança, interfaces gráficas com Java Swing e arquitetura MVC. Atividades: Fórum POO no Cotidiano, Telas Swing e prática WindowsMediaPlayer MVC.",
      moodleUrl: "https://moodle4.uesb.br/course/view.php?id=1098",
      escalaNota: "Atividades práticas (0–10)",
      avaliacoes: [
        { nome: "Telas Swing (Java Swing)", peso: 50, label: "2,0 pts (0–10)" },
        { nome: "WindowsMediaPlayer MVC (CRUD)", peso: 50, label: "0–10" }
      ]
    },
    {
      id: "iec",
      nome: "Introdução à Estatística Computacional",
      sigla: "IEC",
      professor: "Prof. Robson Cipriano",
      cargaHoraria: "60h",
      cor: "#7c3aed",
      corSuave: "rgba(124, 58, 237, 0.14)",
      status: "Encerrada",
      resumo: "Três unidades com encontros síncronos, listas de exercícios, Fórum Avaliativo (estudo de caso NimbusAPI) e Questionário de Estatística e Probabilidade.",
      moodleUrl: "https://moodle4.uesb.br/course/view.php?id=1095",
      escalaNota: "Fórum + Questionário (0–10)",
      avaliacoes: [
        { nome: "Fórum Avaliativo – Estatística Aplicada (peso 2,0)", peso: 50, label: "10,0 (peso 2,0)" },
        { nome: "Avaliação de Estatística e Probabilidade (Quiz)", peso: 50, label: "0–10" }
      ]
    },
    {
      id: "aae1",
      nome: "Atividades Acadêmicas de Extensão I (Módulo I)",
      sigla: "AAE I",
      professor: "Prof.ª Élica Luiza Paiva",
      cargaHoraria: "60h",
      cor: "#e11d48",
      corSuave: "rgba(225, 29, 72, 0.14)",
      status: "Encerrada",
      resumo: "Projeto Digitaliza Tech e inclusão digital, com 5 encontros síncronos gravados, Fórum I Unidade, Relatório de Diagnóstico Comunitário, Plano de Ação Detalhado e Guia Colaborativo Digital.",
      moodleUrl: "https://moodle4.uesb.br/course/view.php?id=1113",
      escalaNota: "4 instrumentos (0–10 cada)",
      avaliacoes: [
        { nome: "Fórum I Unidade", peso: 25, label: "0–10" },
        { nome: "Relatório de Diagnóstico Comunitário", peso: 25, label: "0–10" },
        { nome: "Plano de Ação Detalhado", peso: 25, label: "0–10" },
        { nome: "Guia Colaborativo Digital", peso: 25, label: "0–10" }
      ]
    }
  ],
  eventos: [
    // --- AGOSTO 2026 ---
    {
      id: "es-enc1",
      disciplinaId: "es",
      titulo: "Encontro Síncrono 1 – Prof. Regente (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-08-27",
      horario: "20:00",
      peso: "—",
      avaliativa: false,
      descricao: "Primeiro encontro síncrono sobre Fundamentos e História da Produção de Software (gravação disponível no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=1084"
    },

    // --- SETEMBRO 2026 ---
    {
      id: "iec-aula01",
      disciplinaId: "iec",
      titulo: "Aula 01 – Encontro Síncrono (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-09-01",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Primeiro encontro síncrono de Introdução à Estatística Computacional.",
      url: "https://moodle4.uesb.br/course/view.php?id=1095"
    },
    {
      id: "es-enc2",
      disciplinaId: "es",
      titulo: "Encontro Síncrono 2 – Prof. Regente (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-09-03",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Segundo encontro síncrono da Unidade I (gravação disponível no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=1084"
    },
    {
      id: "es-mapa-mental",
      disciplinaId: "es",
      titulo: "Mapa Mental – Engenharia de Software",
      tipo: "Avaliativa",
      data: "2026-09-07",
      dataAbertura: "2026-08-18",
      horario: "Até 23:59",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Mapa mental colorido feito à mão com base em Pressman e Sommerville (Cap. 1), enviado por foto no Moodle.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=29744"
    },
    {
      id: "iec-aula02",
      disciplinaId: "iec",
      titulo: "Aula 02 – Encontro Síncrono (Unidade I)",
      tipo: "Encontro Síncrono",
      data: "2026-09-08",
      horario: "19:30",
      peso: "—",
      avaliativa: false,
      descricao: "Segundo encontro síncrono da Unidade I.",
      url: "https://moodle4.uesb.br/course/view.php?id=1095"
    },
    {
      id: "aae1-enc1",
      disciplinaId: "aae1",
      titulo: "1º Encontro Online – Extensão I (Gravação Eduplay)",
      tipo: "Encontro Síncrono",
      data: "2026-09-14",
      horario: "Encontro gravado",
      peso: "—",
      avaliativa: false,
      descricao: "Primeiro encontro síncrono da disciplina com a Prof.ª Élica Paiva.",
      url: "https://moodle4.uesb.br/course/view.php?id=1113&section=5"
    },
    {
      id: "es-grupos-sem",
      disciplinaId: "es",
      titulo: "Fórum – Definição dos Grupos do Seminário",
      tipo: "Fórum",
      data: "2026-09-15",
      horario: "Até 15/09",
      peso: "Organização",
      avaliativa: false,
      descricao: "Definição dos grupos e temas para o Seminário de Processos e Metodologias de Software.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=29766"
    },
    {
      id: "es-enc3",
      disciplinaId: "es",
      titulo: "Encontro Síncrono 3 – Processos e Metodologias Ágeis (Unidade II)",
      tipo: "Encontro Síncrono",
      data: "2026-09-17",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Encontro síncrono sobre modelos de processo e Manifesto Ágil.",
      url: "https://moodle4.uesb.br/course/view.php?id=1084"
    },
    {
      id: "aae1-enc2",
      disciplinaId: "aae1",
      titulo: "2º Encontro Online – Extensão I (Gravação Eduplay)",
      tipo: "Encontro Síncrono",
      data: "2026-09-21",
      horario: "Encontro gravado",
      peso: "—",
      avaliativa: false,
      descricao: "Segundo encontro síncrono de Atividades Acadêmicas de Extensão I.",
      url: "https://moodle4.uesb.br/course/view.php?id=1113&section=5"
    },
    {
      id: "es-enc4",
      disciplinaId: "es",
      titulo: "Encontro Síncrono 4 – Unidade II",
      tipo: "Encontro Síncrono",
      data: "2026-09-24",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Quarto encontro síncrono com o Prof. William.",
      url: "https://moodle4.uesb.br/course/view.php?id=1084"
    },
    {
      id: "poo1-swing",
      disciplinaId: "poo1",
      titulo: "Telas Swing – Prática Java Swing",
      tipo: "Avaliativa",
      data: "2026-09-26",
      dataAbertura: "2026-09-09",
      horario: "Até 23:59",
      peso: "2,0 pts (0–10)",
      avaliativa: true,
      descricao: "Desenvolvimento das 3 telas gráficas descritas na Apostila Java Swing.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=30635"
    },

    // --- OUTUBRO 2026 ---
    {
      id: "iec-aula04",
      disciplinaId: "iec",
      titulo: "Aula 04 – Encontro Síncrono (Unidade II)",
      tipo: "Encontro Síncrono",
      data: "2026-10-06",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Encontro síncrono da Unidade II de Introdução à Estatística Computacional.",
      url: "https://moodle4.uesb.br/course/view.php?id=1095"
    },
    {
      id: "es-seminario",
      disciplinaId: "es",
      titulo: "Seminário: Processos e Metodologias de Software",
      tipo: "Avaliativa",
      data: "2026-10-07",
      dataAbertura: "2026-08-18",
      horario: "Até 00:00 (apres. até 29/09)",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Seminário em grupo (15–20 min) sobre Cascata, Incremental, Espiral, Processo Unificado, Scrum ou XP com envio do link da gravação.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=29772"
    },
    {
      id: "es-grupos-mini",
      disciplinaId: "es",
      titulo: "Fórum – Definição dos Grupos do Mini Projeto de Software",
      tipo: "Fórum",
      data: "2026-10-07",
      horario: "Até 07/10",
      peso: "Organização",
      avaliativa: false,
      descricao: "Formação das equipes para desenvolvimento do Mini Projeto de Software da Unidade III.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=29830"
    },
    {
      id: "es-enc5",
      disciplinaId: "es",
      titulo: "Aula Síncrona 5 – Engenharia de Requisitos (Unidade III)",
      tipo: "Encontro Síncrono",
      data: "2026-10-08",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Encontro síncrono da Unidade III sobre Engenharia de Requisitos (slides publicados no Moodle).",
      url: "https://moodle4.uesb.br/course/view.php?id=1084"
    },
    {
      id: "aae1-enc3",
      disciplinaId: "aae1",
      titulo: "3º Encontro Online – Extensão I (Gravação Eduplay)",
      tipo: "Encontro Síncrono",
      data: "2026-10-12",
      horario: "Encontro gravado",
      peso: "—",
      avaliativa: false,
      descricao: "Terceiro encontro síncrono de Atividades Acadêmicas de Extensão I.",
      url: "https://moodle4.uesb.br/course/view.php?id=1113&section=5"
    },
    {
      id: "aae1-enc4",
      disciplinaId: "aae1",
      titulo: "4º Encontro Online – Extensão I (Gravação Eduplay)",
      tipo: "Encontro Síncrono",
      data: "2026-10-19",
      horario: "Encontro gravado",
      peso: "—",
      avaliativa: false,
      descricao: "Quarto encontro síncrono de Atividades Acadêmicas de Extensão I.",
      url: "https://moodle4.uesb.br/course/view.php?id=1113&section=5"
    },
    {
      id: "aae1-forum1",
      disciplinaId: "aae1",
      titulo: "Fórum I Unidade – Inclusão Digital e Projeto Digitaliza Tech",
      tipo: "Fórum",
      data: "2026-10-20",
      dataAbertura: "2026-09-17",
      horario: "17/09 a 20/10",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Reflexão sobre inclusão digital, Resolução CONSEPE/UESB nº 47/2024 e Projeto Digitaliza Tech + interação com colega.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=30564"
    },
    {
      id: "es-enc6",
      disciplinaId: "es",
      titulo: "Aula Síncrona 6 – Engenharia de Requisitos e Prototipação (Figma)",
      tipo: "Encontro Síncrono",
      data: "2026-10-22",
      horario: "19:00",
      peso: "—",
      avaliativa: false,
      descricao: "Encontro síncrono de acompanhamento da Unidade III e orientações sobre o Mini Projeto.",
      url: "https://moodle4.uesb.br/course/view.php?id=1084"
    },
    {
      id: "aae1-enc5",
      disciplinaId: "aae1",
      titulo: "5º Encontro Online – Extensão I (Gravação Eduplay)",
      tipo: "Encontro Síncrono",
      data: "2026-10-26",
      horario: "Encontro gravado",
      peso: "—",
      avaliativa: false,
      descricao: "Quinto encontro síncrono de Atividades Acadêmicas de Extensão I.",
      url: "https://moodle4.uesb.br/course/view.php?id=1113&section=5"
    },
    {
      id: "iec-forum-av",
      disciplinaId: "iec",
      titulo: "Fórum Avaliativo – Estatística Aplicada à Computação (Caso NimbusAPI)",
      tipo: "Fórum",
      data: "2026-10-27",
      dataAbertura: "2026-10-22",
      horario: "Até 23:59",
      peso: "10,0 (peso 2,0)",
      avaliativa: true,
      descricao: "Estudo de caso integrado com amostra de latência da NimbusAPI: amostragem, tabela de frequências, média/mediana/desvio padrão/z-score e distribuição normal.",
      url: "https://moodle4.uesb.br/mod/forum/view.php?id=31690"
    },
    {
      id: "poo1-aula-28out",
      disciplinaId: "poo1",
      titulo: "Aula Síncrona 28/10 – Arquitetura MVC (Gravação disponível)",
      tipo: "Encontro Síncrono",
      data: "2026-10-28",
      horario: "Aula gravada",
      peso: "—",
      avaliativa: false,
      descricao: "Encontro sobre padrão MVC em Java e lançamento da atividade prática WindowsMediaPlayer MVC.",
      url: "https://moodle4.uesb.br/mod/url/view.php?id=31753"
    },

    // --- NOVEMBRO / DEZEMBRO 2026 ---
    {
      id: "iec-quiz-est",
      disciplinaId: "iec",
      titulo: "Avaliação de Estatística e Probabilidade (Questionário)",
      tipo: "Quizz",
      data: "2026-11-08",
      dataAbertura: "2026-10-29",
      horario: "Até 23:59",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Questionário avaliativo online (1 tentativa) sobre Estatística e Probabilidade.",
      url: "https://moodle4.uesb.br/mod/quiz/view.php?id=31721"
    },
    {
      id: "es-miniprojeto",
      disciplinaId: "es",
      titulo: "Mini Projeto de Software – Relatório e Protótipo Inicial",
      tipo: "Avaliativa",
      data: "2026-11-13",
      dataAbertura: "2026-10-06",
      horario: "Até 23:59",
      peso: "Peso 2,4 (0–10)",
      avaliativa: true,
      descricao: "Entrega em grupo: problema, objetivos, requisitos funcionais e não funcionais, justificativa do modelo de processo, reflexão da equipe e protótipo inicial.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=29829"
    },
    {
      id: "poo1-mvc",
      disciplinaId: "poo1",
      titulo: "WindowsMediaPlayer MVC – Sistema CRUD em Java",
      tipo: "Avaliativa",
      data: "2026-12-27",
      dataAbertura: "2026-10-28",
      horario: "Até 23:59",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Implementação prática de sistema de cadastro/CRUD seguindo o padrão MVC em Java (pratica_avaliativa_mvc_java.docx).",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=31752"
    },
    {
      id: "aae1-entregas",
      disciplinaId: "aae1",
      titulo: "Entregas do Projeto de Extensão (Diagnóstico, Plano de Ação e Guia Digital)",
      tipo: "Avaliativa",
      data: null,
      horario: "Entrega por polo (ver Cronograma AAE I)",
      peso: "0–10 pts cada",
      avaliativa: true,
      descricao: "Relatório de Diagnóstico Comunitário, Plano de Ação Detalhado e Guia Colaborativo Digital (vinculados à continuidade do Módulo I no Bloco 2).",
      url: "https://moodle4.uesb.br/course/view.php?id=1113"
    },
    {
      id: "es-presencial",
      disciplinaId: "es",
      titulo: "Avaliação Presencial – Engenharia de Software",
      tipo: "Avaliativa",
      data: null,
      horario: "Aplicação presencial nos polos",
      peso: "0–10 pts",
      avaliativa: true,
      descricao: "Avaliação presencial da disciplina registrada na seção Prova Final do Moodle.",
      url: "https://moodle4.uesb.br/mod/assign/view.php?id=29972"
    }
  ]
};
