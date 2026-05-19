const menus = [
  { d: 'Lunes', short: 'LUN', b: 'Avena con frutas', l: 'Pollo a la plancha con vegetales', s: 'Yogurt natural con granola', k: '560 kcal', p: '22 g', f: '8 g', score: '85%', icons: ['🥣', '🍎', '🍗', '🥗', '🥛', '🍓'] },
  { d: 'Martes', short: 'MAR', b: 'Huevos con tortilla', l: 'Arroz, frijoles y ensalada', s: 'Manzana con nueces', k: '610 kcal', p: '24 g', f: '9 g', score: '82%', icons: ['🍳', '🍌', '🍚', '🥗', '🍎', '🥜'] },
  { d: 'Miércoles', short: 'MIÉ', b: 'Pan integral con queso', l: 'Carne magra con vegetales', s: 'Fruta de temporada', k: '590 kcal', p: '27 g', f: '7 g', score: '88%', icons: ['🥪', '🧀', '🥩', '🥦', '🍊', '🍇'] },
  { d: 'Jueves', short: 'JUE', b: 'Frijolitos y plátano', l: 'Pasta integral con pollo', s: 'Zanahoria en palitos', k: '575 kcal', p: '21 g', f: '10 g', score: '84%', icons: ['🫘', '🍌', '🍝', '🍗', '🥕', '🥒'] },
  { d: 'Viernes', short: 'VIE', b: 'Licuado de banano', l: 'Tazón saludable con vegetales', s: 'Galletas integrales', k: '540 kcal', p: '20 g', f: '8 g', score: '90%', icons: ['🥤', '🍌', '🥗', '🍚', '🍪', '🍏'] }
];

const alerts = [
  'Bajo consumo de frutas en Escuela Los Pinos',
  'Exceso de azúcares en 3 instituciones',
  'Excelente balance nutricional en Escuela Valle Verde',
  'Reforzar hidratación en jornada vespertina'
];

const recs = [
  ['🍎', 'Aumentar fruta fresca', 'Incluir una porción diaria en desayuno o snack.'],
  ['💧', 'Mejorar hidratación', 'Enviar alertas para consumo de agua durante la jornada.'],
  ['🥦', 'Más vegetales', 'Agregar vegetales de colores para aumentar aceptación.'],
  ['📊', 'Monitoreo semanal', 'Comparar consumo y ajustar menús por institución.']
];

const students = [
  ['👧', 'María José', '8 años · Escuela Los Pinos', '90%', 'Sin alergias'],
  ['👦', 'Juan Pérez', '8 años · Programa Escuintla Sana', '85%', 'Lactosa'],
  ['👧', 'Ana Sofía', '7 años · Fundación Valle Verde', '78%', 'Maní'],
  ['👦', 'Diego Morales', '10 años · Escuela Demo', '92%', 'Sin alergias'],
  ['👧', 'Camila Ruiz', '9 años · Escuela Valle Verde', '80%', 'Gluten'],
  ['👦', 'Luis Fernando', '11 años · Escuela Los Pinos', '88%', 'Sin alergias']
];

const institutions = [
  ['🏫', 'Escuela Los Pinos', '768 estudiantes · Escuintla', '87%'],
  ['🤝', 'Fundación Valle Verde', '420 estudiantes · Programa ONG', '91%'],
  ['🏛️', 'Programa Escuintla Sana', '1,270 estudiantes · Gobierno local', '82%']
];

let selected = 0, mobile = 'menu';

const $ = id => document.getElementById(id);

function show(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === id));
  $('sidebar').classList.remove('open');
  if (id === 'reports') setTimeout(drawCharts, 80);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-view]').forEach(b => b.onclick = () => show(b.dataset.view));
document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => show(b.dataset.go));
$('hamb').onclick = () => $('sidebar').classList.toggle('open');

function toast(t) {
  const el = $('toast');
  el.textContent = t;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

function menuHTML(m) {
  return `<div class="meal"><div><b>Desayuno</b><br><small>${m.b}</small></div><div class="plate">${m.icons[0]}</div><div class="plate">${m.icons[1]}</div></div><div class="meal"><div><b>Almuerzo</b><br><small>${m.l}</small></div><div class="plate">${m.icons[2]}</div><div class="plate">${m.icons[3]}</div></div><div class="meal"><div><b>Snack</b><br><small>${m.s}</small></div><div class="plate">${m.icons[4]}</div><div class="plate">${m.icons[5]}</div></div><div class="nutri-row"><div>Calorías<br>${m.k}</div><div>Proteínas<br>${m.p}</div><div>Fibra<br>${m.f}</div></div><p style="text-align:center;margin-top:14px;color:var(--g700);font-weight:950">✓ Excelente balance nutricional</p>`;
}

function renderTabs(container, target) {
  $(container).innerHTML = menus.map((m, i) => `<button class="day ${i === selected ? 'on' : ''}" onclick="selected=${i};renderMenus()">${m.short}</button>`).join('');
  $(target).innerHTML = menuHTML(menus[selected]);
}

function renderMenus() {
  renderTabs('dashboardTabs', 'dashboardMenu');
  renderTabs('menuTabs', 'menuDetail');
}

function renderAll() {
  renderMenus();
  $('dashAlerts').innerHTML = alerts.slice(0, 3).map((a, i) => `<div class="alert-item ${i === 2 ? 'status-good' : i === 1 ? 'status-danger' : ''}"><div><span class="alert-icon">${i === 2 ? '✅' : '🔔'}</span><strong>${a}</strong></div><small>${i === 0 ? 'Hoy' : i === 1 ? 'Ayer' : '2 días'}</small></div>`).join('');
  $('menuCards').innerHTML = menus.map(m => `<div class="card"><h3>${m.d} <span class="tag">${m.score}</span></h3><div class="food-row"><div class="food">${m.icons[0]}</div><div><b>Desayuno</b><p>${m.b}</p></div><span class="tag">${m.k}</span></div><div class="food-row"><div class="food">${m.icons[2]}</div><div><b>Almuerzo</b><p>${m.l}</p></div><span class="tag">Proteína</span></div><div class="food-row"><div class="food">${m.icons[4]}</div><div><b>Snack</b><p>${m.s}</p></div><span class="tag">Ligero</span></div></div>`).join('');
  $('printBody').innerHTML = menus.map(m => `<tr><td><b>${m.d}</b></td><td>${m.b}</td><td>${m.l}</td><td>${m.s}</td><td>${m.score}</td></tr>`).join('');
  $('studentsGrid').innerHTML = students.map(s => `<div class="card"><div class="student-card"><div class="student-pic">${s[0]}</div><div><h3>${s[1]}</h3><p>${s[2]}</p><span class="tag">Alergia: ${s[4]}</span></div></div><div class="progress"><span style="width:${s[3]}"></span></div><p style="margin-top:10px"><b>${s[3]}</b> índice nutricional</p></div>`).join('');
  $('alertsGrid').innerHTML = alerts.map((a, i) => `<div class="card"><span class="tag">${i < 2 ? 'Requiere atención' : 'Seguimiento'}</span><h3 style="margin-top:10px">${i === 2 ? '✅' : '🔔'} ${a}</h3><p style="color:var(--muted);margin-top:8px">Recomendación automática generada por el panel nutricional.</p><button class="btn secondary" onclick="toast('Alerta marcada como revisada')" style="margin-top:14px">Marcar revisada</button></div>`).join('');
  $('recsGrid').innerHTML = recs.map(r => `<div class="card"><h2>${r[0]}</h2><h3>${r[1]}</h3><p style="color:var(--muted);margin-top:8px">${r[2]}</p></div>`).join('');
  $('instGrid').innerHTML = institutions.map(s => `<div class="card"><h2>${s[0]}</h2><h3>${s[1]}</h3><p style="color:var(--muted);margin:8px 0">${s[2]}</p><span class="tag">Cumplimiento ${s[3]}</span><div class="progress"><span style="width:${s[3]}"></span></div></div>`).join('');
  renderMobile();
}

function renderMobile() {
  let content = '';
  if (mobile === 'menu') {
    content = `<div class="mobile-header"><h3>Menú semanal</h3><span>🔍</span></div><div class="days" style="margin-bottom:12px">${menus.map((m, i) => `<button class="day ${i === selected ? 'on' : ''}" onclick="selected=${i};renderMenus();renderMobile()">${m.short}</button>`).join('')}</div>${menuHTML(menus[selected])}`;
  }
  if (mobile === 'profile') {
    content = `<div class="student-profile"><strong>Perfil nutricional</strong><div class="profile-face">👦</div><h3>Juan Pérez</h3><small>8 años</small><p style="margin-top:14px">Índice nutricional</p><div class="ring"><b>85%</b></div><div class="mobile-card" style="text-align:left"><b>Recomendación</b><br>Incluir más frutas y aumentar consumo de agua. 💧🥕</div></div>`;
  }
  if (mobile === 'alerts') {
    content = `<h3>Alertas</h3>${alerts.map(a => `<div class="mobile-card"><b>🔔 ${a}</b><p style="color:var(--muted);font-size:13px">Revisión sugerida.</p></div>`).join('')}`;
  }
  if (mobile === 'tips') {
    content = `<h3>Tips saludables</h3>${recs.map(r => `<div class="mobile-card"><b>${r[0]} ${r[1]}</b><p style="color:var(--muted);font-size:13px">${r[2]}</p></div>`).join('')}`;
  }
  $('mobileContent').innerHTML = content;
  document.querySelectorAll('[data-mobile]').forEach(b => b.classList.toggle('active', b.dataset.mobile === mobile));
}

document.addEventListener('click', e => {
  if (e.target.dataset.mobile) {
    mobile = e.target.dataset.mobile;
    renderMobile();
  }
});

function drawPie(c) {
  if (!c) return;
  const ctx = c.getContext('2d'), v = [55, 20, 15, 10], col = ['#48b19b', '#f48b23', '#f5b833', '#6a4c93'];
  let s = -Math.PI / 2;
  ctx.clearRect(0, 0, c.width, c.height);
  v.forEach((x, i) => {
    let a = x / 100 * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(145, 140);
    ctx.arc(145, 140, 88, s, s + a);
    ctx.closePath();
    ctx.fillStyle = col[i];
    ctx.fill();
    s += a;
  });
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(145, 140, 45, 0, Math.PI * 2);
  ctx.fill();
  ['Carbohidratos 55%', 'Proteínas 20%', 'Grasas saludables 15%', 'Otros 10%'].forEach((l, i) => {
    ctx.fillStyle = col[i];
    ctx.fillRect(285, 82 + i * 34, 14, 14);
    ctx.fillStyle = '#153629';
    ctx.font = '15px Inter';
    ctx.fillText(l, 310, 94 + i * 34);
  });
}

function drawLine(c) {
  if (!c) return;
  const ctx = c.getContext('2d'), d = [54, 72, 80, 58, 89, 84], lab = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.strokeStyle = '#dce8d4';
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(40, 40 + i * 42);
    ctx.lineTo(c.width - 30, 40 + i * 42);
    ctx.stroke();
  }
  ctx.strokeStyle = '#277b3f';
  ctx.lineWidth = 5;
  ctx.beginPath();
  d.forEach((v, i) => {
    let x = 50 + i * ((c.width - 90) / (d.length - 1)), y = c.height - 42 - (v / 100) * (c.height - 85);
    i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  });
  ctx.stroke();
  d.forEach((v, i) => {
    let x = 50 + i * ((c.width - 90) / (d.length - 1)), y = c.height - 42 - (v / 100) * (c.height - 85);
    ctx.fillStyle = '#4b9a39';
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#153629';
    ctx.font = '14px Inter';
    ctx.fillText(lab[i], x - 12, c.height - 13);
  });
}

function drawCharts() {
  drawPie($('pieChart'));
  drawLine($('lineChart'));
}

function openModal(title, body) {
  $('modalTitle').textContent = title;
  $('modalBody').innerHTML = body;
  $('modal').classList.add('show');
}

$('closeModal').onclick = () => $('modal').classList.remove('show');
$('modal').onclick = e => {
  if (e.target.id === 'modal') $('modal').classList.remove('show');
};

$('demo').onclick = () => openModal('Solicitar demostración', `<div class="form"><label>Institución</label><input placeholder="Nombre de escuela, ONG o institución"><label>Correo</label><input type="email" placeholder="correo@institucion.com"><label>Mensaje</label><textarea rows="4" placeholder="Cantidad de estudiantes y objetivo del programa"></textarea><button class="btn primary" onclick="document.getElementById('modal').classList.remove('show');toast('Solicitud enviada')">Enviar solicitud</button></div>`);

$('newMenu').onclick = () => openModal('Crear menú', `<div class="form"><label>Día</label><select><option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option></select><label>Desayuno</label><input placeholder="Avena con frutas"><label>Almuerzo</label><input placeholder="Pollo con vegetales"><label>Snack</label><input placeholder="Yogurt natural"><button class="btn primary" onclick="document.getElementById('modal').classList.remove('show');toast('Menú creado')">Guardar</button></div>`);

$('newStudent').onclick = () => openModal('Agregar estudiante', `<div class="form"><label>Nombre</label><input placeholder="Nombre del estudiante"><label>Edad</label><input type="number" placeholder="8"><label>Alergias</label><input placeholder="Sin alergias"><button class="btn primary" onclick="document.getElementById('modal').classList.remove('show');toast('Estudiante agregado')">Guardar</button></div>`);

$('search').oninput = e => {
  const q = e.target.value.toLowerCase().trim();
  if ($('students').classList.contains('active')) {
    $('studentsGrid').innerHTML = students.filter(s => s.join(' ').toLowerCase().includes(q)).map(s => `<div class="card"><div class="student-card"><div class="student-pic">${s[0]}</div><div><h3>${s[1]}</h3><p>${s[2]}</p><span class="tag">Alergia: ${s[4]}</span></div></div><div class="progress"><span style="width:${s[3]}"></span></div><p style="margin-top:10px"><b>${s[3]}</b> índice nutricional</p></div>`).join('');
  }
};

renderAll();
setTimeout(drawCharts, 80);
