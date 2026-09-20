/**
 * NexuHR SaaS Application Logic & Reactive State Management
 */

// Initial Seed Data
const DEFAULT_EMPLOYEES = [
  { id: '1', name: 'Lucas Gomes', email: 'lucas.gomes@empresa.com', role: 'Engenheiro Fullstack Senior', dept: 'Tecnologia', admission: '10/01/2024', vacationBalance: 18, status: 'Ativo', avatarBg: 'bg-nexu-coral' },
  { id: '2', name: 'Mariana Santos', email: 'mariana.santos@empresa.com', role: 'Design Lead', dept: 'Design', admission: '15/03/2023', vacationBalance: 22, status: 'Ativo', avatarBg: 'bg-nexu-indigo' },
  { id: '3', name: 'Ana Ferreira', email: 'ana.ferreira@empresa.com', role: 'Product Manager', dept: 'Produto', admission: '01/06/2024', vacationBalance: 12, status: 'Ativo', avatarBg: 'bg-emerald-600' },
  { id: '4', name: 'Rafael Lima', email: 'rafael.lima@empresa.com', role: 'Backend Developer', dept: 'Tecnologia', admission: '12/08/2024', vacationBalance: 8, status: 'Ativo', avatarBg: 'bg-amber-600' },
  { id: '5', name: 'Beatriz Costa', email: 'beatriz.costa@empresa.com', role: 'Especialista em DP', dept: 'RH & DP', admission: '20/02/2023', vacationBalance: 15, status: 'Ativo', avatarBg: 'bg-purple-600' },
  { id: '6', name: 'Carlos Eduardo', email: 'carlos.eduardo@empresa.com', role: 'Executivo de Contas', dept: 'Vendas', admission: '05/05/2024', vacationBalance: 10, status: 'Ativo', avatarBg: 'bg-blue-600' },
  { id: '7', name: 'Juliana Paes', email: 'juliana.paes@empresa.com', role: 'UX Researcher', dept: 'Design', admission: '18/11/2024', vacationBalance: 5, status: 'Ativo', avatarBg: 'bg-rose-500' },
  { id: '8', name: 'Thiago Martins', email: 'thiago.martins@empresa.com', role: 'Frontend Engineer', dept: 'Tecnologia', admission: '01/02/2025', vacationBalance: 3, status: 'Ativo', avatarBg: 'bg-teal-600' }
];

const DEFAULT_VACATIONS = [
  { id: 'v1', empId: '2', empName: 'Mariana Santos', role: 'Design Lead', dept: 'Design', period: '15/Set a 25/Set (10 dias)', type: 'Férias Regulares', status: 'Pendente' },
  { id: 'v2', empId: '1', empName: 'Lucas Gomes', role: 'Engenheiro Fullstack', dept: 'Tecnologia', period: '01/Out a 05/Out (5 dias)', type: 'Folga / Day-off', status: 'Pendente' }
];

const DEFAULT_ACTIVITIES = [
  { name: 'Lucas Gomes', action: 'Registro de Ponto (Entrada)', time: '08:58', method: 'App Mobile (GPS)', status: 'Confirmado' },
  { name: 'Mariana Santos', action: 'Solicitação de Férias', time: '09:15', method: 'Portal Web', status: 'Pendente RH' },
  { name: 'Ana Ferreira', action: 'Registro de Ponto (Entrada)', time: '09:02', method: 'Reconhecimento Facial', status: 'Confirmado' },
  { name: 'Carlos Eduardo', action: 'Registro de Ponto (Entrada)', time: '09:12', method: 'App Mobile (GPS)', status: 'Confirmado' }
];

const DEFAULT_CANDIDATES = [
  { id: 'c1', name: 'Diego Ramos', role: 'Senior React Developer', stage: 'triagem', fitScore: 92, tags: ['React', 'TypeScript', 'Next.js'] },
  { id: 'c2', name: 'Fernanda Lima', role: 'Product Designer', stage: 'triagem', fitScore: 88, tags: ['Figma', 'Design System'] },
  { id: 'c3', name: 'Gabriel Torres', role: 'DevOps / Cloud Specialist', stage: 'entrevista', fitScore: 95, tags: ['AWS', 'Kubernetes', 'CI/CD'] },
  { id: 'c4', name: 'Larissa Alencar', role: 'Coordenadora de RH & DP', stage: 'proposta', fitScore: 98, tags: ['eSocial', 'Portaria 671'] },
  { id: 'c5', name: 'Victor Meirelles', role: 'Account Executive B2B', stage: 'contratado', fitScore: 96, tags: ['SaaS B2B', 'HubSpot'] }
];

// Load State from LocalStorage
function getStorage(key, defaultValue) {
  const saved = localStorage.getItem(`nexuhr_${key}`);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return defaultValue;
    }
  }
  return defaultValue;
}

function setStorage(key, value) {
  localStorage.setItem(`nexuhr_${key}`, JSON.stringify(value));
}

let employees = getStorage('employees', DEFAULT_EMPLOYEES);
let vacations = getStorage('vacations', DEFAULT_VACATIONS);
let activities = getStorage('activities', DEFAULT_ACTIVITIES);
let candidates = getStorage('candidates', DEFAULT_CANDIDATES);

// Navigation System
function navigate(routeId) {
  // Update sidebar buttons
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-route') === routeId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Switch View
  document.querySelectorAll('.app-view').forEach(view => {
    if (view.id === `view-${routeId}`) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  });

  if (window.lucide) {
    lucide.createIcons();
  }

  // Handle route-specific rendering
  if (routeId === 'dashboard') {
    renderDashboard();
  } else if (routeId === 'colaboradores') {
    renderEmployees();
  } else if (routeId === 'ferias') {
    renderVacations();
  } else if (routeId === 'recrutamento') {
    renderKanban();
  }
}

// Live Clocks
function updateClocks() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('pt-BR');
  
  const liveClock = document.getElementById('liveClock');
  if (liveClock) liveClock.textContent = timeStr;

  const punchClockBig = document.getElementById('punchClockBig');
  if (punchClockBig) punchClockBig.textContent = timeStr;
}
setInterval(updateClocks, 1000);
updateClocks();

// Render Dashboard
let attendanceChartInstance = null;

function renderDashboard() {
  // Update KPIs
  const kpiTotal = document.getElementById('kpiTotalEmployees');
  if (kpiTotal) kpiTotal.textContent = employees.length;

  const badgeColab = document.getElementById('badgeColaboradores');
  if (badgeColab) badgeColab.textContent = employees.length;

  const pendingCount = vacations.filter(v => v.status === 'Pendente').length;
  const kpiVac = document.getElementById('kpiPendingVacations');
  if (kpiVac) kpiVac.textContent = `${pendingCount} Pendente${pendingCount !== 1 ? 's' : ''}`;

  const badgeVac = document.getElementById('badgeFerias');
  if (badgeVac) badgeVac.textContent = pendingCount;

  // Render Activity Feed
  const feed = document.getElementById('activityFeed');
  if (feed) {
    feed.innerHTML = activities.slice(0, 5).map(act => `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 font-semibold text-slate-800">${act.name}</td>
        <td class="py-3 px-4 text-slate-600">${act.action}</td>
        <td class="py-3 px-4 text-slate-500">${act.time}</td>
        <td class="py-3 px-4 text-slate-500">${act.method}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${act.status === 'Confirmado' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
            ${act.status}
          </span>
        </td>
      </tr>
    `).join('');
  }

  // Render Chart
  const chartCanvas = document.getElementById('attendanceChart');
  if (chartCanvas && !attendanceChartInstance && window.Chart) {
    attendanceChartInstance = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Taxa de Presença (%)',
          data: [96, 98, 95, 92, 94, 40, 20],
          borderColor: '#FF385C',
          backgroundColor: 'rgba(255, 56, 92, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#FF385C',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { min: 0, max: 100, grid: { color: '#F1F5F9' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}

// Render Employees View
function renderEmployees(filterText = '', deptFilter = 'ALL') {
  const tableBody = document.getElementById('employeesTableBody');
  if (!tableBody) return;

  const filtered = employees.filter(emp => {
    const matchText = emp.name.toLowerCase().includes(filterText.toLowerCase()) || emp.email.toLowerCase().includes(filterText.toLowerCase());
    const matchDept = deptFilter === 'ALL' || emp.dept === deptFilter;
    return matchText && matchDept;
  });

  tableBody.innerHTML = filtered.map(emp => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="py-3.5 px-4 flex items-center gap-3">
        <div class="w-8 h-8 rounded-full ${emp.avatarBg || 'bg-slate-800'} text-white font-bold text-xs flex items-center justify-center">
          ${emp.name.split(' ').map(n => n[0]).slice(0,2).join('')}
        </div>
        <div>
          <div class="font-bold text-slate-800">${emp.name}</div>
          <div class="text-[11px] text-slate-400">${emp.email}</div>
        </div>
      </td>
      <td class="py-3.5 px-4 text-slate-700">${emp.role}</td>
      <td class="py-3.5 px-4">
        <span class="bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-md text-[11px] border border-slate-200">${emp.dept}</span>
      </td>
      <td class="py-3.5 px-4 text-slate-500">${emp.admission}</td>
      <td class="py-3.5 px-4 font-bold ${emp.vacationBalance > 15 ? 'text-amber-600' : 'text-slate-700'}">${emp.vacationBalance} dias</td>
      <td class="py-3.5 px-4">
        <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">${emp.status}</span>
      </td>
      <td class="py-3.5 px-4 text-right">
        <button onclick="showToast('Abrindo perfil completo de ${emp.name}...')" class="text-nexu-coral hover:underline font-bold mr-2">Ver Perfil</button>
        <button onclick="removeEmployee('${emp.id}')" class="text-slate-400 hover:text-red-500" title="Remover"><i data-lucide="trash-2" class="w-3.5 h-3.5 inline"></i></button>
      </td>
    </tr>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function filterEmployees() {
  const text = document.getElementById('employeeFilterInput')?.value || '';
  const dept = document.getElementById('departmentFilter')?.value || 'ALL';
  renderEmployees(text, dept);
}

function removeEmployee(id) {
  employees = employees.filter(e => e.id !== id);
  setStorage('employees', employees);
  renderEmployees();
  renderDashboard();
  showToast('Colaborador removido.');
}

// Open & Save Employee Modal
function openColaboradorModal() {
  document.getElementById('colaboradorModal')?.classList.remove('hidden');
}

function closeColaboradorModal() {
  document.getElementById('colaboradorModal')?.classList.add('hidden');
}

function handleSaveEmployee(event) {
  event.preventDefault();
  const name = document.getElementById('empName').value;
  const email = document.getElementById('empEmail').value;
  const role = document.getElementById('empRole').value;
  const dept = document.getElementById('empDept').value;
  const admission = document.getElementById('empDate').value;

  const newEmp = {
    id: Date.now().toString(),
    name,
    email,
    role,
    dept,
    admission: admission ? admission.split('-').reverse().join('/') : '23/08/2026',
    vacationBalance: 30,
    status: 'Ativo',
    avatarBg: 'bg-nexu-coral'
  };

  employees.unshift(newEmp);
  setStorage('employees', employees);

  // Add activity log
  activities.unshift({
    name,
    action: 'Novo Colaborador Admitido',
    time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    method: 'Painel RH',
    status: 'Confirmado'
  });
  setStorage('activities', activities);

  closeColaboradorModal();
  renderEmployees();
  renderDashboard();
  showToast(`🎉 ${name} adicionado(a) com sucesso! Acesso gerado.`);
}

// Clock Punch Registration
function quickPunch() {
  registerPunch('Ponto Rápido (GPS)');
}

function registerPunch(type) {
  const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  
  activities.unshift({
    name: 'Mariana Silva',
    action: `Registro: ${type}`,
    time: time,
    method: 'Web (Autenticado)',
    status: 'Confirmado'
  });
  setStorage('activities', activities);

  showToast(`⏱️ ${type} registrado com sucesso às ${time}!`);
  renderDashboard();
}

// Render Vacations View
function renderVacations() {
  const queue = document.getElementById('vacationQueue');
  if (!queue) return;

  const pending = vacations.filter(v => v.status === 'Pendente');

  if (pending.length === 0) {
    queue.innerHTML = `
      <div class="p-8 text-center text-slate-400 text-xs">
        <i data-lucide="check-circle" class="w-8 h-8 mx-auto text-emerald-500 mb-2"></i>
        Todas as solicitações de férias e ausências foram respondidas! Nenhuma pendência.
      </div>
    `;
  } else {
    queue.innerHTML = pending.map(v => `
      <div class="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
            ${v.empName.split(' ').map(n => n[0]).slice(0,2).join('')}
          </div>
          <div>
            <div class="font-bold text-sm text-slate-900">${v.empName} <span class="text-xs text-slate-500 font-normal">(${v.role})</span></div>
            <div class="text-xs text-slate-600 mt-0.5"><strong>Período:</strong> ${v.period} • <span class="text-amber-700 font-semibold">${v.type}</span></div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="approveVacation('${v.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-sm">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
            <span>Aprovar</span>
          </button>
          <button onclick="rejectVacation('${v.id}')" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl transition-colors">
            Recusar
          </button>
        </div>
      </div>
    `).join('');
  }

  // Populate Vacation Modal Select
  const select = document.getElementById('vacEmpSelect');
  if (select) {
    select.innerHTML = employees.map(e => `<option value="${e.id}">${e.name} (${e.role}) - Saldo: ${e.vacationBalance} dias</option>`).join('');
  }

  if (window.lucide) lucide.createIcons();
}

function approveVacation(id) {
  const vac = vacations.find(v => v.id === id);
  if (vac) {
    vac.status = 'Aprovado';
    setStorage('vacations', vacations);
    showToast(`✅ Férias de ${vac.empName} aprovadas com sucesso!`);
    renderVacations();
    renderDashboard();
  }
}

function rejectVacation(id) {
  const vac = vacations.find(v => v.id === id);
  if (vac) {
    vac.status = 'Recusado';
    setStorage('vacations', vacations);
    showToast(`Solicitação de ${vac.empName} recusada.`);
    renderVacations();
    renderDashboard();
  }
}

function openVacationModal() {
  document.getElementById('vacationModal')?.classList.remove('hidden');
}

function closeVacationModal() {
  document.getElementById('vacationModal')?.classList.add('hidden');
}

function handleSaveVacation(event) {
  event.preventDefault();
  const empId = document.getElementById('vacEmpSelect').value;
  const emp = employees.find(e => e.id === empId);
  const start = document.getElementById('vacStartDate').value;
  const end = document.getElementById('vacEndDate').value;
  const type = document.getElementById('vacType').value;

  const newVac = {
    id: Date.now().toString(),
    empId,
    empName: emp ? emp.name : 'Colaborador',
    role: emp ? emp.role : '',
    dept: emp ? emp.dept : '',
    period: `${start.split('-').reverse().slice(0,2).join('/')} a ${end.split('-').reverse().slice(0,2).join('/')}`,
    type,
    status: 'Pendente'
  };

  vacations.unshift(newVac);
  setStorage('vacations', vacations);

  closeVacationModal();
  renderVacations();
  renderDashboard();
  showToast('Solicitação de férias enviada com sucesso!');
}

// Render Recruitment ATS Kanban
function renderKanban() {
  const stages = ['triagem', 'entrevista', 'proposta', 'contratado'];

  stages.forEach(stage => {
    const col = document.getElementById(`col-${stage}`);
    const countEl = document.getElementById(`count${stage.charAt(0).toUpperCase() + stage.slice(1)}`);
    
    if (col) {
      const items = candidates.filter(c => c.stage === stage);
      if (countEl) countEl.textContent = items.length;

      col.innerHTML = items.map(cand => `
        <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm text-xs hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-800">${cand.name}</span>
            <span class="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded border border-emerald-200">
              ${cand.fitScore}% Fit
            </span>
          </div>
          <div class="text-slate-500 text-[11px] mt-1">${cand.role}</div>
          <div class="mt-2.5 flex flex-wrap gap-1">
            ${cand.tags.map(t => `<span class="bg-slate-100 text-slate-600 text-[9px] px-1.5 py-0.5 rounded">${t}</span>`).join('')}
          </div>
          
          <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
            ${stage !== 'contratado' ? `
              <button onclick="advanceCandidate('${cand.id}')" class="text-nexu-indigo hover:text-indigo-800 font-bold flex items-center gap-1">
                <span>Avançar Etapa</span>
                <i data-lucide="chevron-right" class="w-3 h-3"></i>
              </button>
            ` : `
              <button onclick="onboardCandidate('${cand.id}')" class="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1">
                <i data-lucide="user-check" class="w-3.5 h-3.5"></i>
                <span>Efetivar Admissão</span>
              </button>
            `}
          </div>
        </div>
      `).join('');
    }
  });

  if (window.lucide) lucide.createIcons();
}

function advanceCandidate(id) {
  const cand = candidates.find(c => c.id === id);
  if (!cand) return;

  if (cand.stage === 'triagem') cand.stage = 'entrevista';
  else if (cand.stage === 'entrevista') cand.stage = 'proposta';
  else if (cand.stage === 'proposta') cand.stage = 'contratado';

  setStorage('candidates', candidates);
  renderKanban();
  showToast(`🎯 Candidato ${cand.name} avançou para ${cand.stage.toUpperCase()}!`);
}

function onboardCandidate(id) {
  const cand = candidates.find(c => c.id === id);
  if (!cand) return;

  const newEmp = {
    id: Date.now().toString(),
    name: cand.name,
    email: `${cand.name.toLowerCase().replace(' ', '.')}@empresa.com`,
    role: cand.role,
    dept: 'Tecnologia',
    admission: new Date().toLocaleDateString('pt-BR'),
    vacationBalance: 30,
    status: 'Ativo',
    avatarBg: 'bg-emerald-600'
  };

  employees.unshift(newEmp);
  setStorage('employees', employees);

  candidates = candidates.filter(c => c.id !== id);
  setStorage('candidates', candidates);

  renderKanban();
  renderDashboard();
  showToast(`🎉 ${cand.name} foi admitido(a) e adicionado(a) ao time de colaboradores!`);
}

function openCandidateModal() {
  const name = prompt('Nome do Candidato:');
  if (!name) return;
  const role = prompt('Cargo / Vaga:');
  if (!role) return;

  candidates.unshift({
    id: Date.now().toString(),
    name,
    role,
    stage: 'triagem',
    fitScore: 90,
    tags: ['Novo', 'Triagem IA']
  });
  setStorage('candidates', candidates);
  renderKanban();
  showToast(`Candidato ${name} cadastrado com sucesso!`);
}

// Nexu AI Copilot Chat Interface
function handleAiChatSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('aiInputText');
  if (!input || !input.value.trim()) return;

  const userText = input.value.trim();
  input.value = '';
  appendUserMessage(userText);
  processAiResponse(userText);
}

function sendQuickPrompt(promptText) {
  appendUserMessage(promptText);
  processAiResponse(promptText);
}

function appendUserMessage(text) {
  const container = document.getElementById('aiChatMessages');
  if (!container) return;

  const userMsgHtml = `
    <div class="flex items-start justify-end gap-3">
      <div class="bg-nexu-coral text-white p-3.5 rounded-2xl rounded-tr-none max-w-xl leading-relaxed shadow-sm">
        ${text}
      </div>
      <div class="w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
        MS
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', userMsgHtml);
  container.scrollTop = container.scrollHeight;
}

function processAiResponse(promptText) {
  const container = document.getElementById('aiChatMessages');
  if (!container) return;

  // Show Typing Indicator
  const typingId = `typing-${Date.now()}`;
  container.insertAdjacentHTML('beforeend', `
    <div id="${typingId}" class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-xl bg-nexu-indigo text-white flex items-center justify-center shrink-0">
        <i data-lucide="bot" class="w-4 h-4"></i>
      </div>
      <div class="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-500 italic">
        Nexu AI está pensando e consultando base de dados...
      </div>
    </div>
  `);
  container.scrollTop = container.scrollHeight;
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    document.getElementById(typingId)?.remove();

    let responseContent = '';
    const lower = promptText.toLowerCase();

    if (lower.includes('férias') || lower.includes('ausência') || lower.includes('vencer')) {
      const pendingCount = vacations.filter(v => v.status === 'Pendente').length;
      responseContent = `
        <p><strong>📊 Análise do Módulo de Férias:</strong></p>
        <ul class="mt-2 space-y-1.5 list-disc list-inside text-slate-700">
          <li>Existem <strong>${pendingCount} solicitações pendentes</strong> aguardando aprovação imediata no painel.</li>
          <li><strong>Mariana Santos</strong> acumula <strong>22 dias de saldo</strong> e está com período concessivo a 60 dias do vencimento.</li>
          <li><strong>Lucas Gomes</strong> possui 18 dias disponíveis.</li>
        </ul>
        <p class="mt-2 text-slate-600"><em>Recomendação:</em> Acesse a aba <strong>Férias & Ausências</strong> para aprovar as solicitações sem gerar conflito de datas.</p>
      `;
    } else if (lower.includes('vaga') || lower.includes('desenvolvedor') || lower.includes('descrição')) {
      responseContent = `
        <p><strong>📝 Descrição de Cargo Gerada por IA:</strong></p>
        <div class="mt-2 p-3 bg-white rounded-xl border border-slate-200 text-slate-800">
          <strong>Título:</strong> Desenvolvedor Fullstack Senior (React & Node.js)<br>
          <strong>Modalidade:</strong> Híbrido / Remoto • CLT<br>
          <strong>Principais Responsabilidades:</strong>
          <ul class="list-disc list-inside mt-1 text-slate-600">
            <li>Desenvolver interfaces modernas e responsivas com React/Tailwind.</li>
            <li>Construir APIs robustas e escaláveis em Node.js / TypeScript.</li>
            <li>Garantir cobertura de testes automatizados e segurança de dados.</li>
          </ul>
        </div>
        <p class="mt-2 text-emerald-700 font-semibold">Deseja publicar esta vaga diretamente no portal de carreiras do NexuHR?</p>
      `;
    } else if (lower.includes('clt') || lower.includes('banco de horas') || lower.includes('horas extras') || lower.includes('portaria')) {
      responseContent = `
        <p><strong>⚖️ Resumo Jurídico & Legislação Trabalhista (CLT / Portaria 671):</strong></p>
        <ul class="mt-2 space-y-1.5 list-disc list-inside text-slate-700">
          <li><strong>Banco de Horas Individual:</strong> Pode ser acordado por acordo individual escrito com compensação no período máximo de <strong>6 meses</strong> (Art. 59, § 5º da CLT).</li>
          <li><strong>Limite Diário:</strong> Máximo de 2 horas extras diárias.</li>
          <li><strong>Portaria 671 MTE:</strong> Os registros eletrônicos (REP-P) devem emitir comprovante digital com assinatura eletrônica inviolável (recurso já ativo no NexuHR).</li>
        </ul>
      `;
    } else {
      responseContent = `
        <p>Entendido! Com base nos dados atuais da sua empresa:</p>
        <ul class="mt-2 space-y-1 list-disc list-inside text-slate-700">
          <li>Sua equipe possui <strong>${employees.length} colaboradores ativos</strong> em 5 departamentos.</li>
          <li>Taxa de assiduidade desta semana mantida em <strong>94.2%</strong>.</li>
          <li>Você tem <strong>3 processos seletivos em andamento</strong> com 5 candidatos no funil.</li>
        </ul>
        <p class="mt-2 text-slate-600">Se precisar que eu execute alguma automação, exporte um relatório fiscal ou redija um comunicado para o time, é só me avisar!</p>
      `;
    }

    const aiMsgHtml = `
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-nexu-indigo to-purple-600 text-white flex items-center justify-center shrink-0 shadow">
          <i data-lucide="bot" class="w-4 h-4"></i>
        </div>
        <div class="bg-slate-100 p-4 rounded-2xl rounded-tl-none max-w-xl text-slate-800 leading-relaxed border border-slate-200">
          ${responseContent}
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', aiMsgHtml);
    container.scrollTop = container.scrollHeight;
    if (window.lucide) lucide.createIcons();
  }, 700);
}

// Toast System
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3500);
  }
}

// Initial Kickoff
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderEmployees();
  renderVacations();
  renderKanban();
});
