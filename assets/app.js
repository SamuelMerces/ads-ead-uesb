(function () {
  const PERIODOS = window.UESB_PERIODOS || [];
  if (!PERIODOS.length) return;

  const isTutorMode = document.body.dataset.mode === "tutor";
  const publicBase = document.body.dataset.publicBase || "";

  let DATA = null;
  let TUTOR = null;
  let courseMap = {};

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const state = {
    periodoId: null,
    tab: isTutorMode ? "tutor" : "calendario",
    disciplina: "todas",
    tipo: "todos",
    status: "todos",
    busca: "",
    showHiddenInCal: isTutorMode,
    calYear: today.getFullYear(),
    calMonth: today.getMonth()
  };

  function loadScriptOnce(src) {
    return new Promise((resolve) => {
      if (document.querySelector(`script[data-dynamic-src="${src}"]`)) {
        resolve(true);
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.dataset.dynamicSrc = src;
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.body.appendChild(s);
    });
  }

  function parseISODate(iso) {
    if (!iso) return null;
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function formatDateBR(iso) {
    if (!iso) return "A definir";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }

  function weekdayBR(iso) {
    if (!iso) return "";
    const dt = parseISODate(iso);
    return dt.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
  }

  function diffDays(targetIso) {
    const dt = parseISODate(targetIso);
    if (!dt) return null;
    return Math.round((dt - today) / (1000 * 60 * 60 * 24));
  }

  function getEventStatus(ev) {
    if (!ev.data) return "a_definir";
    const endDate = parseISODate(ev.dataFim || ev.data);
    const startDate = parseISODate(ev.dataAbertura || ev.data);
    if (endDate < today) return "encerrada";
    if (startDate <= today && endDate >= today) return "aberta";
    return "proxima";
  }

  function getAllEvents() {
    if (!DATA) return [];
    const base = DATA.eventos.map((e) => ({ ...e, oculto: false }));
    if (isTutorMode && state.showHiddenInCal && TUTOR && TUTOR.eventosOcultos) {
      return base.concat(TUTOR.eventosOcultos.map((e) => ({ ...e, oculto: true })));
    }
    return base;
  }

  function getFilteredEvents() {
    const q = state.busca.trim().toLowerCase();
    return getAllEvents()
      .filter((ev) => {
        if (state.disciplina !== "todas" && ev.disciplinaId !== state.disciplina) return false;
        if (state.tipo !== "todos" && ev.tipo !== state.tipo) return false;
        if (state.status !== "todos") {
          const st = getEventStatus(ev);
          if (state.status === "abertas" && st !== "aberta") return false;
          if (state.status === "proximas" && st !== "proxima" && st !== "aberta" && st !== "a_definir") return false;
          if (state.status === "encerradas" && st !== "encerrada") return false;
        }
        if (q) {
          const disc = courseMap[ev.disciplinaId]?.nome || "";
          const hay = `${ev.titulo} ${ev.descricao} ${disc} ${ev.tipo}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (!a.data && !b.data) return 0;
        if (!a.data) return 1;
        if (!b.data) return -1;
        return a.data.localeCompare(b.data);
      });
  }

  function setCalendarMonthForPeriod(periodoMeta) {
    if (!periodoMeta || !periodoMeta.mesInicial) return;
    const [sy, sm] = periodoMeta.mesInicial.split("-").map(Number);
    const [ey, em] = (periodoMeta.mesFinal || periodoMeta.mesInicial).split("-").map(Number);
    const nowIdx = today.getFullYear() * 12 + today.getMonth();
    const startIdx = sy * 12 + (sm - 1);
    const endIdx = ey * 12 + (em - 1);
    if (nowIdx >= startIdx && nowIdx <= endIdx) {
      state.calYear = today.getFullYear();
      state.calMonth = today.getMonth();
    } else {
      state.calYear = sy;
      state.calMonth = sm - 1;
    }
  }

  async function selectPeriodo(periodoId, updateUrl) {
    const pMeta = PERIODOS.find((p) => p.id === periodoId) || PERIODOS.find((p) => p.atual) || PERIODOS[0];
    state.periodoId = pMeta.id;
    state.disciplina = "todas";

    const pubSrc = `${publicBase}${pMeta.arquivo}`;
    await loadScriptOnce(pubSrc);
    DATA = (window.UESB_DADOS_ALUNOS || {})[pMeta.id] || null;

    if (isTutorMode && pMeta.arquivoTutor) {
      await loadScriptOnce(pMeta.arquivoTutor);
      TUTOR = (window.UESB_DADOS_TUTOR || {})[pMeta.id] || null;
    } else {
      TUTOR = null;
    }

    if (!DATA) return;

    courseMap = {};
    DATA.disciplinas.forEach((d) => (courseMap[d.id] = d));
    courseMap.geral = {
      id: "geral",
      nome: "Calendário Geral",
      sigla: "GERAL",
      cor: "#64748b",
      corSuave: "rgba(100, 116, 139, 0.15)"
    };

    setCalendarMonthForPeriod(pMeta);

    const sel = document.getElementById("periodSelect");
    if (sel) sel.value = pMeta.id;

    const headerTitle = document.getElementById("headerTitle");
    if (headerTitle) {
      headerTitle.textContent = isTutorMode
        ? `Painel da Tutoria — UESB ${DATA.meta.semestre} (${DATA.meta.bloco})`
        : `Cronograma de Atividades — UESB ${DATA.meta.semestre} (${DATA.meta.bloco})`;
    }
    const headerSub = document.getElementById("headerSub");
    if (headerSub) {
      headerSub.textContent = isTutorMode
        ? `Tutor: ${TUTOR?.tutor || "Tutoria ADS"} • ${DATA.meta.periodoLetivo} • Visão completa com pendências e itens ocultos`
        : `${DATA.meta.curso} • ${DATA.meta.periodoLetivo}`;
    }
    const upd = document.getElementById("updatedLabel");
    if (upd) upd.textContent = `Atualizado em ${DATA.meta.atualizadoLabel}`;

    const footerNote = document.getElementById("footerNote");
    if (footerNote && !isTutorMode) {
      footerNote.textContent = `Painel de apoio aos estudantes de ADS EaD — UESB (${DATA.meta.semestre} • ${DATA.meta.bloco}). Consulte sempre o Moodle oficial em caso de retificações pelos professores regentes.`;
    }

    if (updateUrl && window.location.protocol.startsWith("http")) {
      const url = new URL(window.location.href);
      url.searchParams.set("periodo", pMeta.id);
      window.history.replaceState({}, "", url.toString());
    }

    renderKPIs();
    renderFilters();
    renderCalendar();
    renderList();
    renderCourses();
    renderTutorPanel();
  }

  // --- Theme ---
  function initTheme() {
    const saved = localStorage.getItem("uesb_dash_theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    const btn = document.getElementById("btnTheme");
    if (btn) {
      const syncLabel = () => {
        const dark = document.documentElement.getAttribute("data-theme") === "dark";
        btn.textContent = dark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
      };
      syncLabel();
      btn.addEventListener("click", () => {
        const dark = document.documentElement.getAttribute("data-theme") === "dark";
        const next = dark ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("uesb_dash_theme", next);
        syncLabel();
      });
    }
  }

  // --- KPIs ---
  function renderKPIs() {
    const el = document.getElementById("kpiGrid");
    if (!el || !DATA) return;

    const upcomingGraded = DATA.eventos
      .filter((e) => e.avaliativa && e.data && diffDays(e.data) >= 0)
      .sort((a, b) => a.data.localeCompare(b.data));

    const nextTask = upcomingGraded[0];
    const nextDays = nextTask ? diffDays(nextTask.data) : null;
    const nextCourse = nextTask ? courseMap[nextTask.disciplinaId] : null;

    const weekEvents = DATA.eventos.filter((e) => {
      if (!e.data || e.tipo === "Unidade" || e.tipo === "Recesso") return false;
      const d = diffDays(e.data);
      return d !== null && d >= 0 && d <= 7;
    });

    const totalGraded = DATA.eventos.filter((e) => e.avaliativa).length;
    const nextRecess = (DATA.meta.recessos || []).find((r) => diffDays(r.fim) >= 0);
    const recessDays = nextRecess ? diffDays(nextRecess.inicio) : null;

    let cardsHTML = `
      <div class="kpi-card kpi-highlight">
        <span class="kpi-label">Próxima Entrega Avaliativa</span>
        <span class="kpi-value">${nextTask ? formatDateBR(nextTask.data) : "Concluído"}</span>
        <span class="kpi-sub">${
          nextTask
            ? `${nextCourse.sigla}: ${nextTask.titulo.slice(0, 44)}${nextTask.titulo.length > 44 ? "…" : ""} (${nextDays === 0 ? "HOJE" : `em ${nextDays} dia${nextDays > 1 ? "s" : ""}`})`
            : "Nenhuma entrega avaliativa pendente neste bloco"
        }</span>
      </div>
      <div class="kpi-card kpi-success">
        <span class="kpi-label">Agenda dos Próximos 7 Dias</span>
        <span class="kpi-value">${weekEvents.length} ${weekEvents.length === 1 ? "evento" : "eventos"}</span>
        <span class="kpi-sub">Encontros síncronos, fóruns e entregas até +7 dias</span>
      </div>
    `;

    if (isTutorMode) {
      const pendentes = TUTOR?.correcoesPendentes || [];
      const totalPendentes = pendentes.reduce((acc, c) => acc + c.aguardandoCorrecao, 0);
      const totalAlertas = (TUTOR?.alertas || []).length;
      cardsHTML += `
        <div class="kpi-card kpi-danger">
          <span class="kpi-label">Envios Aguardando Correção</span>
          <span class="kpi-value">${totalPendentes}</span>
          <span class="kpi-sub">${pendentes.map((c) => `${c.atividade}: ${c.aguardandoCorrecao}/${c.participantes}`).join(" • ") || "Tudo corrigido"}</span>
        </div>
        <div class="kpi-card kpi-warn">
          <span class="kpi-label">Alertas & Divergências (Tutor)</span>
          <span class="kpi-value">${totalAlertas} pontos</span>
          <span class="kpi-sub">Itens ocultos e divergências de cronograma monitorados</span>
        </div>
      `;
    } else {
      cardsHTML += `
        <div class="kpi-card kpi-warn">
          <span class="kpi-label">Atividades Avaliativas Publicadas</span>
          <span class="kpi-value">${totalGraded}</span>
          <span class="kpi-sub">Distribuídas entre as disciplinas de ${DATA.meta.semestre} (${DATA.meta.bloco})</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-label">Próxima Pausa Letiva</span>
          <span class="kpi-value">${nextRecess ? formatDateBR(nextRecess.inicio) : "—"}</span>
          <span class="kpi-sub">${
            nextRecess
              ? `${nextRecess.titulo} (${recessDays > 0 ? `em ${recessDays} dias` : "em andamento"})`
              : "Sem recessos futuros neste bloco"
          }</span>
        </div>
      `;
    }

    el.innerHTML = cardsHTML;
  }

  // --- Filter Chips ---
  function renderFilters() {
    const chipContainer = document.getElementById("courseChips");
    if (!chipContainer || !DATA) return;

    const allChip = `<button class="chip ${state.disciplina === "todas" ? "active" : ""}" data-disc="todas">Todas as Disciplinas</button>`;
    const discChips = DATA.disciplinas
      .map(
        (d) => `
      <button class="chip ${state.disciplina === d.id ? "active" : ""}" data-disc="${d.id}">
        <span class="dot" style="background:${d.cor}"></span>${d.sigla}
      </button>`
      )
      .join("");

    chipContainer.innerHTML = allChip + discChips;
    chipContainer.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.disciplina = btn.dataset.disc;
        renderFilters();
        renderCalendar();
        renderList();
      });
    });
  }

  // --- Calendar ---
  function renderCalendar() {
    const titleEl = document.getElementById("calTitle");
    const gridEl = document.getElementById("calGrid");
    if (!titleEl || !gridEl || !DATA) return;

    const refDate = new Date(state.calYear, state.calMonth, 1);
    titleEl.textContent = refDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

    const firstDow = refDate.getDay();
    const daysInMonth = new Date(state.calYear, state.calMonth + 1, 0).getDate();
    const prevMonthDays = new Date(state.calYear, state.calMonth, 0).getDate();

    const filtered = getFilteredEvents();
    const dows = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    let html = dows.map((d) => `<div class="cal-dow">${d}</div>`).join("");

    const totalCells = Math.ceil((firstDow + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
      let y = state.calYear;
      let m = state.calMonth;
      let dayNum;
      let isOther = false;

      if (i < firstDow) {
        dayNum = prevMonthDays - firstDow + i + 1;
        m -= 1;
        if (m < 0) { m = 11; y -= 1; }
        isOther = true;
      } else if (i >= firstDow + daysInMonth) {
        dayNum = i - firstDow - daysInMonth + 1;
        m += 1;
        if (m > 11) { m = 0; y += 1; }
        isOther = true;
      } else {
        dayNum = i - firstDow + 1;
      }

      const iso = `${y}-${String(m + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
      const cellDate = new Date(y, m, dayNum);
      const isToday = cellDate.getTime() === today.getTime();
      const isRecess = (DATA.meta.recessos || []).some((r) => iso >= r.inicio && iso <= r.fim);

      const dayEvents = filtered.filter((ev) => {
        if (!ev.data) return false;
        if (ev.tipo === "Unidade" || ev.tipo === "Recesso") {
          return ev.data === iso || ev.dataFim === iso;
        }
        return ev.data === iso;
      });

      const pillsHtml = dayEvents
        .map((ev) => {
          const c = courseMap[ev.disciplinaId] || courseMap.geral;
          const prefix = ev.oculto ? "🔒 " : ev.avaliativa ? "★ " : "";
          const suffix = ev.tipo === "Unidade" && ev.dataFim === iso ? " (Fim)" : "";
          return `<button class="cal-pill ${ev.oculto ? "is-hidden-item" : ""}" data-ev="${ev.id}" style="background:${c.corSuave};border-left-color:${c.cor}" title="${ev.titulo}">${prefix}${c.sigla}: ${ev.titulo}${suffix}</button>`;
        })
        .join("");

      html += `
        <div class="cal-day ${isOther ? "other-month" : ""} ${isToday ? "is-today" : ""} ${isRecess ? "is-recess" : ""}">
          <div class="cal-day-num">
            <span>${dayNum}</span>
            ${isRecess && !isOther ? `<span style="font-size:0.65rem;color:var(--text-soft)">Recesso</span>` : ""}
          </div>
          ${pillsHtml}
        </div>
      `;
    }

    gridEl.innerHTML = html;
    gridEl.querySelectorAll(".cal-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const ev = getAllEvents().find((x) => x.id === pill.dataset.ev);
        if (ev) openModal(ev);
      });
    });
  }

  // --- List View ---
  function renderList() {
    const container = document.getElementById("eventListContainer");
    if (!container || !DATA) return;

    const events = getFilteredEvents();
    if (!events.length) {
      container.innerHTML = `<div class="empty-state">Nenhuma atividade encontrada com os filtros selecionados.</div>`;
      return;
    }

    const groups = new Map();
    events.forEach((ev) => {
      let key = "Datas a Definir";
      if (ev.data) {
        const dt = parseISODate(ev.data);
        key = dt.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
      }
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(ev);
    });

    let html = "";
    groups.forEach((list, monthLabel) => {
      const cards = list
        .map((ev) => {
          const c = courseMap[ev.disciplinaId] || courseMap.geral;
          const st = getEventStatus(ev);
          const statusBadge =
            st === "encerrada"
              ? `<span class="badge badge-closed">Encerrada</span>`
              : st === "aberta"
              ? `<span class="badge badge-open">Em andamento</span>`
              : st === "proxima"
              ? `<span class="badge badge-soon">Prevista</span>`
              : `<span class="badge badge-type">A definir</span>`;

          const hiddenBadge = ev.oculto ? `<span class="badge badge-hidden">🔒 Oculto p/ Alunos</span>` : "";
          const dateLabel = ev.dataFim
            ? `${formatDateBR(ev.data).slice(0, 5)} – ${formatDateBR(ev.dataFim)}`
            : formatDateBR(ev.data);

          return `
            <article class="event-card ${st === "encerrada" ? "is-past" : ""}" data-ev="${ev.id}" style="border-left-color:${c.cor}">
              <div class="event-date-box">
                <span class="event-date-main">${dateLabel}</span>
                <span class="event-date-sub">${ev.data ? weekdayBR(ev.data) + " • " : ""}${ev.horario || ""}</span>
              </div>
              <div class="event-body">
                <div class="badges">
                  <span class="badge" style="background:${c.corSuave};color:${c.cor}">${c.nome}</span>
                  <span class="badge badge-type">${ev.tipo}</span>
                  ${statusBadge}
                  ${hiddenBadge}
                </div>
                <h3>${ev.titulo}</h3>
                <p>${ev.descricao}</p>
              </div>
              <div class="event-side">
                ${ev.peso && ev.peso !== "—" ? `<span class="weight-tag">${ev.peso}</span>` : ""}
                <a class="btn" href="${ev.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Abrir no Moodle ↗</a>
              </div>
            </article>
          `;
        })
        .join("");

      html += `
        <section class="month-group">
          <h2 class="month-heading">${monthLabel}</h2>
          <div class="event-list">${cards}</div>
        </section>
      `;
    });

    container.innerHTML = html;
    container.querySelectorAll(".event-card").forEach((card) => {
      card.addEventListener("click", () => {
        const ev = getAllEvents().find((x) => x.id === card.dataset.ev);
        if (ev) openModal(ev);
      });
    });
  }

  // --- Courses & Weights ---
  function renderCourses() {
    const grid = document.getElementById("coursesGrid");
    if (!grid || !DATA) return;

    const palette = ["#2563eb", "#059669", "#7c3aed", "#d97706", "#e11d48", "#0891b2"];

    grid.innerHTML = DATA.disciplinas
      .map((d) => {
        const statusCls =
          d.status === "Ativa" ? "badge-open" : d.status === "Parcial" ? "badge-soon" : "badge-closed";

        const barHtml = d.avaliacoes.length
          ? `<div class="weight-bar">${d.avaliacoes
              .map(
                (a, idx) =>
                  `<div style="width:${a.peso}%;background:${palette[idx % palette.length]}" title="${a.nome}: ${a.label}"></div>`
              )
              .join("")}</div>`
          : "";

        const listHtml = d.avaliacoes.length
          ? `<ul class="weight-list">${d.avaliacoes
              .map((a) => `<li><span>${a.nome}</span><strong>${a.label}</strong></li>`)
              .join("")}</ul>`
          : `<p class="course-meta">Instrumentos avaliativos ainda não publicados no Moodle.</p>`;

        return `
          <article class="course-card" style="border-top-color:${d.cor}">
            <div class="course-head">
              <div>
                <h3>${d.nome}</h3>
                <p class="course-meta">${d.professor} • ${d.cargaHoraria}</p>
              </div>
              <span class="badge ${statusCls}">${d.status}</span>
            </div>
            <p class="course-desc">${d.resumo}</p>
            <div>
              <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-soft);margin-bottom:0.35rem">
                <strong>Composição da Nota</strong>
                <span>${d.escalaNota}</span>
              </div>
              ${barHtml}
            </div>
            ${listHtml}
            <div style="margin-top:auto;padding-top:0.5rem">
              <a class="btn btn-primary" href="${d.moodleUrl}" target="_blank" rel="noopener">Acessar sala no Moodle ↗</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // --- Tutor Exclusive Panel ---
  function renderTutorPanel() {
    if (!isTutorMode) return;
    const container = document.getElementById("tutorPanelContent");
    if (!container) return;

    if (!TUTOR) {
      container.innerHTML = `<div class="empty-state">Nenhum dado privado de tutoria cadastrado para este período.</div>`;
      return;
    }

    const alertsHtml = (TUTOR.alertas || [])
      .map(
        (a) => `
      <div class="alert-item sev-${a.severidade}">
        <div class="badges">
          <span class="badge ${a.severidade === "alta" ? "badge-hidden" : a.severidade === "media" ? "badge-soon" : "badge-type"}">${a.severidade.toUpperCase()}</span>
          <span class="badge badge-type">${a.disciplina}</span>
        </div>
        <h4>${a.titulo}</h4>
        <p>${a.detalhe}</p>
      </div>`
      )
      .join("");

    const gradingRows = (TUTOR.correcoesPendentes || [])
      .map(
        (g) => `
      <tr>
        <td><strong>${g.disciplina}</strong></td>
        <td>${g.atividade}</td>
        <td>${g.prazo}</td>
        <td><strong>${g.envios} / ${g.participantes}</strong></td>
        <td><span class="badge badge-hidden">${g.aguardandoCorrecao} pendente(s)</span></td>
        <td><a class="btn" href="${g.url}" target="_blank" rel="noopener">Corrigir ↗</a></td>
      </tr>`
      )
      .join("");

    const hiddenRows = (TUTOR.itensOcultos || [])
      .map(
        (h) => `
      <tr>
        <td><strong>${h.disciplina}</strong></td>
        <td>${h.item}</td>
        <td>${h.dataPrevista}</td>
        <td><span class="badge badge-hidden">${h.statusMoodle}</span></td>
        <td>${h.observacao}</td>
      </tr>`
      )
      .join("");

    const changelogRows = (TUTOR.historico || [])
      .map(
        (c) => `
      <tr>
        <td style="white-space:nowrap"><strong>${c.data}</strong></td>
        <td>${c.resumo}</td>
      </tr>`
      )
      .join("");

    container.innerHTML = `
      <div class="panel-card">
        <h2>⚠️ Alertas e Divergências para a Tutoria</h2>
        ${alertsHtml}
      </div>

      <div class="panel-card">
        <h2>📝 Pendências de Correção</h2>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>Disciplina</th><th>Atividade</th><th>Prazo</th><th>Envios</th><th>Aguardando</th><th>Ação</th></tr>
            </thead>
            <tbody>${gradingRows || `<tr><td colspan="6">Nenhuma correção pendente registrada.</td></tr>`}</tbody>
          </table>
        </div>
      </div>

      <div class="panel-card">
        <h2>🔒 Itens Ocultos no Moodle & Cronograma Interno Previsto</h2>
        <p style="font-size:0.84rem;color:var(--text-muted);margin-bottom:0.85rem">
          Itens visíveis apenas no seu perfil de tutor. Não são incluídos no dashboard público dos alunos.
        </p>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>Disciplina</th><th>Item / Atividade</th><th>Data Prevista</th><th>Status Moodle</th><th>Observação</th></tr>
            </thead>
            <tbody>${hiddenRows}</tbody>
          </table>
        </div>
      </div>

      <div class="panel-card">
        <h2>🕒 Histórico de Verificações Automáticas</h2>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>Data / Hora</th><th>Resumo das Alterações</th></tr>
            </thead>
            <tbody>${changelogRows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- Modal ---
  function openModal(ev) {
    const backdrop = document.getElementById("eventModal");
    const c = courseMap[ev.disciplinaId] || courseMap.geral;
    document.getElementById("modalCourse").textContent = c.nome;
    document.getElementById("modalCourse").style.background = c.corSuave;
    document.getElementById("modalCourse").style.color = c.cor;
    document.getElementById("modalType").textContent = ev.oculto ? `${ev.tipo} • 🔒 Oculto` : ev.tipo;
    document.getElementById("modalTitle").textContent = ev.titulo;
    document.getElementById("modalDesc").textContent = ev.descricao;
    document.getElementById("modalDate").textContent = ev.dataFim
      ? `${formatDateBR(ev.data)} até ${formatDateBR(ev.dataFim)}`
      : `${formatDateBR(ev.data)} (${ev.horario || "—"})`;
    document.getElementById("modalWeight").textContent = ev.peso || "—";
    document.getElementById("modalLink").href = ev.url || DATA.meta.moodleUrl;
    backdrop.classList.add("open");
  }

  function closeModal() {
    document.getElementById("eventModal").classList.remove("open");
  }

  // --- Export ICS ---
  function exportICS() {
    if (!DATA) return;
    const events = DATA.eventos.filter((e) => e.data && (state.disciplina === "todas" || e.disciplinaId === state.disciplina));
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      `PRODID:-//UESB ADS ${DATA.meta.semestre}//Cronograma ${DATA.meta.bloco}//PT`,
      "CALSCALE:GREGORIAN",
      `X-WR-CALNAME:UESB ADS ${DATA.meta.semestre} - ${DATA.meta.bloco}`,
      "X-WR-TIMEZONE:America/Sao_Paulo"
    ];

    events.forEach((ev) => {
      const c = courseMap[ev.disciplinaId] || courseMap.geral;
      const dtStart = ev.data.replace(/-/g, "");
      const endObj = parseISODate(ev.dataFim || ev.data);
      endObj.setDate(endObj.getDate() + 1);
      const dtEnd = `${endObj.getFullYear()}${String(endObj.getMonth() + 1).padStart(2, "0")}${String(endObj.getDate()).padStart(2, "0")}`;
      const desc = `${ev.descricao} | Peso: ${ev.peso || "—"} | Moodle: ${ev.url || ""}`.replace(/\n/g, " ");

      lines.push("BEGIN:VEVENT");
      lines.push(`UID:${state.periodoId}-${ev.id}@uesb-ads`);
      lines.push(`DTSTART;VALUE=DATE:${dtStart}`);
      lines.push(`DTEND;VALUE=DATE:${dtEnd}`);
      lines.push(`SUMMARY:[${c.sigla}] ${ev.titulo}`);
      lines.push(`DESCRIPTION:${desc}`);
      lines.push("END:VEVENT");
    });

    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `UESB_ADS_${state.periodoId}${state.disciplina !== "todas" ? "_" + state.disciplina : ""}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // --- Wire UI ---
  function initUI() {
    const sel = document.getElementById("periodSelect");
    if (sel) {
      sel.innerHTML = PERIODOS.map(
        (p) => `<option value="${p.id}">${p.label}${p.atual ? " (Atual)" : ""}</option>`
      ).join("");
      sel.addEventListener("change", () => selectPeriodo(sel.value, true));
    }

    const syncFilterVisibility = () => {
      const fb = document.getElementById("filterBar");
      if (fb) fb.style.display = state.tab === "calendario" || state.tab === "lista" ? "flex" : "none";
    };
    syncFilterVisibility();

    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.tab = btn.dataset.tab;
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b === btn));
        document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === `panel-${state.tab}`));
        syncFilterVisibility();
      });
    });

    document.getElementById("searchInput")?.addEventListener("input", (e) => {
      state.busca = e.target.value;
      renderCalendar();
      renderList();
    });

    document.getElementById("typeFilter")?.addEventListener("change", (e) => {
      state.tipo = e.target.value;
      renderCalendar();
      renderList();
    });

    document.getElementById("statusFilter")?.addEventListener("change", (e) => {
      state.status = e.target.value;
      renderCalendar();
      renderList();
    });

    document.getElementById("toggleHidden")?.addEventListener("change", (e) => {
      state.showHiddenInCal = e.target.checked;
      renderCalendar();
      renderList();
    });

    document.getElementById("calPrev")?.addEventListener("click", () => {
      state.calMonth -= 1;
      if (state.calMonth < 0) { state.calMonth = 11; state.calYear -= 1; }
      renderCalendar();
    });
    document.getElementById("calNext")?.addEventListener("click", () => {
      state.calMonth += 1;
      if (state.calMonth > 11) { state.calMonth = 0; state.calYear += 1; }
      renderCalendar();
    });
    document.getElementById("calToday")?.addEventListener("click", () => {
      state.calYear = today.getFullYear();
      state.calMonth = today.getMonth();
      renderCalendar();
    });

    document.getElementById("btnExportICS")?.addEventListener("click", exportICS);
    document.getElementById("modalClose")?.addEventListener("click", closeModal);
    document.getElementById("eventModal")?.addEventListener("click", (e) => {
      if (e.target.id === "eventModal") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  initTheme();
  initUI();

  const params = new URLSearchParams(window.location.search);
  const requested = params.get("periodo");
  const defaultPeriod = PERIODOS.find((p) => p.id === requested) || PERIODOS.find((p) => p.atual) || PERIODOS[0];
  selectPeriodo(defaultPeriod.id, false);
})();
