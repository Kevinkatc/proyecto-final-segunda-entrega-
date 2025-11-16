import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../style/Juegos.css"
function Juegos() {

    useEffect(() => {
        const container = document.getElementById('game-container');
const toastRoot = document.getElementById('toast-root');
const scoreListEl = document.getElementById('scoreList');

// ---------- estado global ----------
const STORAGE_KEY = 'hw_highscores_v1';
let highs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const activeTimers = [];
let currentGame = null;

// ---------- historial unificado ----------
function renderScoreBoard() {
  if (!scoreListEl) return;

  if (!Object.keys(highs).length) {
    scoreListEl.innerHTML = "<li>No hay registros todavía</li>";
    return;
  }

  scoreListEl.innerHTML = Object.keys(highs)
    .map(game => `<li><strong>${game}</strong>: ${highs[game]} pts</li>`)
    .join('');
}

function saveHigh(game, score) {
  if (!highs[game] || score > highs[game]) {
    highs[game] = score;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(highs));
    showToast(`🎉 Nuevo récord en ${game}: ${score} pts`);
  }

  renderScoreBoard();
}

// ---------- notificaciones ----------
function showToast(text) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = text;
  toastRoot.appendChild(t);

  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { 
    t.classList.remove('show');
    setTimeout(() => t.remove(), 300);
  }, 3200);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- limpiar antes de cargar juego ----------
function clearActive() {
  while (activeTimers.length) {
    const t = activeTimers.pop();
    clearInterval(t);
    clearTimeout(t);
  }
  container.innerHTML = '';
}

// ---------- seleccionar juego ----------
document.addEventListener('click', (ev) => {
  const btn = ev.target.closest('.game-btn');
  if (!btn) return;

  const g = btn.dataset.game;
  if (g) loadGame(g);
});

function loadGame(name) {
  clearActive();

  const placeholder = container.querySelector('.placeholder');
  if (placeholder) placeholder.remove();

  switch (name) {
    case 'quiz': startQuiz(); break;
    case 'memotest': startMemo(); break;
    case 'match': startMatch(); break;
    case 'hangman': startHangman(); break;
    default: break;
  }
}

renderScoreBoard();


// =====================  QUIZ  =====================
function startQuiz() {
  currentGame = 'Quiz';
  const questions = [
    { q: "¿Qué componente es considerado el 'cerebro' de la computadora?", opts: ["Fuente de poder","Procesador (CPU)","Placa madre","Memoria RAM"], a: 1 },
    { q: "¿Cuál es la función principal de la placa madre?", opts: ["Guardar programas","Conectar y comunicar todos los componentes","Enfriar el sistema","Mostrar imágenes"], a: 1 },
    { q: "¿Qué tipo de memoria se usa para almacenar datos temporalmente?", opts: ["RAM","SSD","HDD","ROM"], a: 0 },
    { q: "¿Qué dispositivo almacena datos de forma permanente?", opts: ["RAM","Fuente de poder","Disco duro (HDD)","Ventilador"], a: 2 },
    { q: "¿Qué componente convierte energía CA a CC?", opts: ["Procesador","Placa madre","Fuente de alimentación (PSU)","Disipador"], a: 2 },
    { q: "¿Qué componente procesa gráficos?", opts: ["CPU","GPU","RAM","SSD"], a: 1 },
    { q: "¿Para qué sirve el disipador?", opts: ["Guardar calor","Disipar el calor","Regular voltaje","Aumentar velocidad"], a: 1 },
    { q: "¿Qué hace el cooler?", opts: ["Enfría moviendo aire","Almacena info","Conecta USB","Genera energía"], a: 0 },
    { q: "¿Qué almacenamiento es más rápido?", opts: ["HDD","SSD","DVD","Pendrive"], a: 1 },
    { q: "¿Qué periférico es el monitor?", opts: ["Entrada","Salida","Mixto","Almacenamiento"], a: 1 },
  ];

  shuffle(questions);
  let idx = 0, score = 0, timerId = null;
  let perQuestionTime = 30;

  const wrap = document.createElement('div');
  wrap.className = 'quiz-wrap';
  wrap.innerHTML = `
    <h3>Quiz avanzado</h3>
    <div id="qmeta">
      <span id="qcount"></span> — 
      <span class="quiz-timer" id="qtimer"></span>
    </div>
    <div id="qtext" style="margin-top:8px;font-weight:700"></div>
    <div id="qopts" class="quiz-options"></div>
    <div id="qfeedback" style="margin-top:10px;color:#9fbdd6"></div>`;
  container.appendChild(wrap);

  const qtext = wrap.querySelector('#qtext'),
        qopts = wrap.querySelector('#qopts'),
        qcount = wrap.querySelector('#qcount'),
        qtimer = wrap.querySelector('#qtimer'),
        qfeedback = wrap.querySelector('#qfeedback');

  function startTimer() {
    let t = perQuestionTime;
    qtimer.textContent = `Tiempo: ${t}s`;
    timerId = setInterval(() => {
      t--;
      qtimer.textContent = `Tiempo: ${t}s`;
      if (t <= 0) {
        clearInterval(timerId);
        handleAnswer(-1);
      }
    }, 1000);
    addTimer(timerId, 'interval');
  }

  function renderQuestion() {
    qfeedback.textContent = '';
    qcount.textContent = `Pregunta ${idx + 1} / ${questions.length}`;
    const it = questions[idx];
    qtext.textContent = it.q;
    qopts.innerHTML = '';
    const optsMap = it.opts.map((o, i) => ({ o, i }));
    shuffle(optsMap);
    optsMap.forEach(({ o, i }) => {
      const btn = document.createElement('button');
      btn.textContent = o;
      btn.onclick = () => {
        clearInterval(timerId);
        handleAnswer(i, btn);
      };
      qopts.appendChild(btn);
    });
    startTimer();
  }

  function handleAnswer(selectedIndex, btnEl) {
    const it = questions[idx];
    const correctIndex = it.a;
    const buttons = Array.from(qopts.querySelectorAll('button'));

    // marcar correcta 
    buttons.forEach(b => {
      if (b.textContent === it.opts[correctIndex]) b.classList.add('correct');
    });

    if (selectedIndex === correctIndex) {
      score += 25;
      if (btnEl) btnEl.classList.add('correct');
      qfeedback.textContent = "✔ ¡Correcto!";
    } else {
      if (selectedIndex !== -1 && btnEl) btnEl.classList.add('incorrect');
      // Mostrar cuál era la correcta
      qfeedback.innerHTML = `❌ Incorrecto<br>👉 Respuesta correcta: <strong>${it.opts[correctIndex]}</strong>`;
      score = Math.max(0, score - 7);
    }

    idx++;
    // esperar 700ms para pasar a la siguiente
    setTimeout(() => {
      buttons.forEach(b => b.disabled = true);
      if (idx < questions.length) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    }, 700);
  }

  function finishQuiz() {
    clearInterval(timerId);
    // animación final 
    const overlay = document.createElement('div');
    overlay.className = 'quiz-finish-overlay';
    overlay.innerHTML = `
      <div class="quiz-finish-card">
        <h2>🎉 ¡Quiz completado! 🎉</h2>
        <p style="font-size:20px;">Puntaje final: <strong>${score}</strong> pts</p>
      </div>`;

    overlay.style.position = 'absolute';
    overlay.style.inset = '0';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'rgba(4,8,15,0.65)';
    overlay.style.zIndex = 9999;
    overlay.querySelector('.quiz-finish-card').style.background = 'linear-gradient(180deg,#071023,#0b2330)';
    overlay.querySelector('.quiz-finish-card').style.padding = '20px 30px';
    overlay.querySelector('.quiz-finish-card').style.borderRadius = '12px';
    overlay.querySelector('.quiz-finish-card').style.textAlign = 'center';
    container.appendChild(overlay);

    saveHigh('Quiz', score);

    const t = setTimeout(() => {
      overlay.remove();
    }, 5000);
    addTimer(t, 'timeout');
  }

  renderQuestion();
}


// ===================== MEMOTEST  =====================
function startMemo() {
  currentGame = 'Memotest';
  const pairs = [
    { id: 'cpu', img: 'https://plus.unsplash.com/premium_photo-1681426698212-53e47fec9a2c?fm=jpg&q=60&w=3000' },
    { id: 'gpu', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFXW4zQCTydMbXp_W04yqPEwk_Me9y6tGxQ&s' },
    { id: 'ram', img: 'https://spacegamer.com.ar/img/Public/1058-producto-1-2094.jpg' },
    { id: 'ssd', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3e_7xPYTDfAoP6YQr1c2sKAGHv4oIYBrXQ&s' },
    { id: 'hdd', img: 'https://www.seguridadprofesionalhoy.com/imagenes/2013/11/wd-Black.jpg' },
    { id: 'psu', img: 'https://m.media-amazon.com/images/I/71Cjjv6YLSL.jpg' }
  ];

  let cards = pairs.concat(pairs).map((c, i) => ({ ...c, uid: i }));
  shuffle(cards);

  let first = null, matched = 0, attempts = 20;

  const wrap = document.createElement('div');
  wrap.innerHTML = `<h3>Memotest</h3><p>Intentos: <span id="memo-attempts">${attempts}</span></p>`;
  const grid = document.createElement('div'); grid.className = 'memo-grid';
  wrap.appendChild(grid);
  container.appendChild(wrap);

  cards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'flip-card';
    el.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">?</div>
        <div class="flip-back"><img src="${card.img}" alt="${card.id}"></div>
      </div>`;
    grid.appendChild(el);

    el.addEventListener('click', () => {
      const inner = el.querySelector('.flip-inner');
      if (!inner || inner.classList.contains('flipped') || el.classList.contains('matched') || attempts <= 0) return;
      inner.classList.add('flipped');

      if (!first) {
        first = { el, id: card.id };
      } else {
        if (first.id === card.id) {
          el.classList.add('matched');
          first.el.classList.add('matched');
          matched++;
          first = null;
          if (matched === pairs.length) {
            const score = Math.max(10, matched * 10 - (20 - attempts));
            // animación de victoria 
            const banner = document.createElement('div');
            banner.className = 'memo-win-banner';
            banner.innerHTML = `<div style="padding:18px;border-radius:12px;background:rgba(5,20,30,0.9);text-align:center;">
                                  <h2>🎉 ¡Victoria!</h2>
                                  <p>Puntaje: <strong>${score}</strong> pts</p>
                                </div>`;
            banner.style.position = 'absolute';
            banner.style.inset = '0';
            banner.style.display = 'flex';
            banner.style.alignItems = 'center';
            banner.style.justifyContent = 'center';
            banner.style.zIndex = 9999;
            container.appendChild(banner);

            saveHigh('Memotest', score);

            const t = setTimeout(() => banner.remove(), 5000);
            addTimer(t, 'timeout');
          }
        } else {
          attempts--;
          const attEl = wrap.querySelector('#memo-attempts');
          if (attEl) attEl.textContent = attempts;

          const to = setTimeout(() => {
            inner.classList.remove('flipped');
            if (first && first.el) first.el.querySelector('.flip-inner')?.classList.remove('flipped');
            first = null;
          }, 700);
          addTimer(to, 'timeout');
        }
      }
    });
  });
}



// ===================== MATCHING =====================
function startMatch() {
  currentGame = 'Matching';
  const pairs = [
    { k: 'CPU', v: 'Procesador central' },
    { k: 'GPU', v: 'Tarjeta gráfica' },
    { k: 'RAM', v: 'Memoria temporal' },
    { k: 'SSD', v: 'Almacenamiento rápido' },
    { k: 'PSU', v: 'Fuente de alimentación' },
    { k: 'MOTHER', v: 'Placa madre' }
  ];

  const svgNS = "http://www.w3.org/2000/svg";
  const overlay = document.createElementNS(svgNS, 'svg');
  overlay.classList.add('match-overlay');
  overlay.setAttribute('width', '100%');
  overlay.setAttribute('height', '100%');
  overlay.style.position = 'absolute';
  overlay.style.left = 0; overlay.style.top = 0; overlay.style.pointerEvents = 'none';

  const wrap = document.createElement('div');
  wrap.innerHTML = `<h3>Matching</h3><p>Une el componente con su descripción.</p>`;
  const cols = document.createElement('div'); cols.className = 'match-columns';
  const leftCol = document.createElement('div'); leftCol.className = 'match-column';
  const rightCol = document.createElement('div'); rightCol.className = 'match-column';
  cols.appendChild(leftCol); cols.appendChild(rightCol);
  wrap.appendChild(cols);
  container.appendChild(wrap);
  container.appendChild(overlay);

  const leftItems = pairs.map(p => p.k);
  const rightItems = shuffle(pairs.map(p => p.v).slice());

  leftItems.forEach(k => {
    const el = document.createElement('div');
    el.className = 'match-card';
    el.textContent = k;
    leftCol.appendChild(el);
  });
  rightItems.forEach(v => {
    const el = document.createElement('div');
    el.className = 'match-card';
    el.textContent = v;
    rightCol.appendChild(el);
  });

  let first = null, matched = 0, attempts = 0;

  leftCol.querySelectorAll('.match-card').forEach(el => {
    el.addEventListener('click', () => {
      if (first && first.side === 'left') { first.el.style.background = ''; first = null; return; }
      if (!first) { el.style.background = '#0a2f44'; first = { side: 'left', el }; }
      else if (first.side === 'right') {
        const leftKey = el.textContent;
        const rightVal = first.el.textContent;
        checkMatch(first.el, el, rightVal, leftKey);
        first.el.style.background = '';
        first = null;
      }
    });
  });

  rightCol.querySelectorAll('.match-card').forEach(el => {
    el.addEventListener('click', () => {
      if (first && first.side === 'right') { first.el.style.background = ''; first = null; return; }
      if (!first) { el.style.background = '#0a2f44'; first = { side: 'right', el }; }
      else if (first.side === 'left') {
        const leftKey = first.el.textContent;
        const rightVal = el.textContent;
        checkMatch(first.el, el, rightVal, leftKey);
        first.el.style.background = '';
        first = null;
      }
    });
  });

  function getPairValue(key) {
    const p = pairs.find(x => x.k === key);
    return p ? p.v : null;
  }

  function drawTemporaryLine(aEl, bEl, color = '#ff6767', duration = 1400) {
    const parentRect = container.getBoundingClientRect();
    const aRect = aEl.getBoundingClientRect();
    const bRect = bEl.getBoundingClientRect();
    const ax = aRect.left + aRect.width/2 - parentRect.left;
    const ay = aRect.top + aRect.height/2 - parentRect.top;
    const bx = bRect.left + bRect.width/2 - parentRect.left;
    const by = bRect.top + bRect.height/2 - parentRect.top;

    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', ax); line.setAttribute('y1', ay);
    line.setAttribute('x2', bx); line.setAttribute('y2', by);
    line.setAttribute('stroke', color); line.setAttribute('stroke-width', '3');
    line.setAttribute('stroke-linecap', 'round');
    overlay.appendChild(line);

    const tid = setTimeout(() => { line.remove(); }, duration);
    addTimer(tid, 'timeout');
  }

  function checkMatch(elA, elB, rightVal, leftKey) {
    attempts++;
    const correct = getPairValue(leftKey) === rightVal;
    if (correct) {
      elA.style.pointerEvents = 'none';
      elB.style.pointerEvents = 'none';
      elA.style.background = '#9fffbf';
      elB.style.background = '#9fffbf';
      matched++;
      drawTemporaryLine(elA, elB, '#16ffc1', 1200);
      if (matched === pairs.length) {
        const score = Math.max(20, 80 - attempts * 3);
        const res = document.createElement('div'); res.style.marginTop = '10px';
        res.innerHTML = `<strong>Matching completado</strong> — Puntaje: ${score} pts`;
        wrap.appendChild(res);
        saveHigh('Matching', score);
      }
    } else {
      const correctVal = getPairValue(leftKey);
      const correctEl = Array.from(rightCol.children).find(e => e.textContent === correctVal);
      if (correctEl) {
        drawTemporaryLine(elA, correctEl, '#ff6767', 1500);
      }
      elA.classList.add('bounce'); elB.classList.add('bounce');
      const to = setTimeout(() => { elA.classList.remove('bounce'); elB.classList.remove('bounce'); }, 700);
      addTimer(to, 'timeout');
      showToast('No coinciden');
    }
    if (first && first.el) first.el.style.background = '';
    first = null;
  }
}



// ===================== AHORCADO  =====================
function startHangman() {
  currentGame = 'Ahorcado';

  const words = [
    'MICROPROCESADOR', 'ALMACENAMIENTO', 'TARJETAMADRE',
    'REFRIGERACION', 'PCIE', 'SISTEMADEDATOS'
  ];

  const word = words[Math.floor(Math.random() * words.length)];
  let revealed = Array(word.length).fill('_');
  let wrong = 0;
  const maxWrong = 7;

  const wrap = document.createElement('div');
  wrap.style.textAlign = 'center';
  wrap.innerHTML = `<h3>Ahorcado</h3><p>Adiviná la palabra relacionada con hardware.</p>`;

  const wordEl = document.createElement('p');
  wordEl.style.letterSpacing = "6px";
  wordEl.style.fontWeight = "800";
  wordEl.textContent = revealed.join(' ');
  wrap.appendChild(wordEl);

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, 'svg');

  svg.setAttribute('viewBox', '0 0 160 220');
  svg.style.width = "230px";
  svg.style.height = "320px";
  svg.style.display = "block";
  svg.style.margin = "0 auto";

  // Soportes
  const base = document.createElementNS(svgNS, 'line');
  base.setAttribute('x1', 10); base.setAttribute('y1', 200);
  base.setAttribute('x2', 150); base.setAttribute('y2', 200);
  base.setAttribute('stroke', '#7cf5ff'); base.setAttribute('stroke-width', '4');
  svg.appendChild(base);

  const pole = document.createElementNS(svgNS, 'line');
  pole.setAttribute('x1', 40); pole.setAttribute('y1', 200);
  pole.setAttribute('x2', 40); pole.setAttribute('y2', 20);
  pole.setAttribute('stroke', '#7cf5ff'); pole.setAttribute('stroke-width', '4');
  svg.appendChild(pole);

  const arm = document.createElementNS(svgNS, 'line');
  arm.setAttribute('x1', 40); arm.setAttribute('y1', 20);
  arm.setAttribute('x2', 110); arm.setAttribute('y2', 20);
  arm.setAttribute('stroke', '#7cf5ff'); arm.setAttribute('stroke-width', '4');
  svg.appendChild(arm);

  const rope = document.createElementNS(svgNS, 'line');
  rope.setAttribute('x1', 110); rope.setAttribute('y1', 20);
  rope.setAttribute('x2', 110); rope.setAttribute('y2', 45);
  rope.setAttribute('stroke', '#7cf5ff'); rope.setAttribute('stroke-width', '4');
  svg.appendChild(rope);

  const parts = [];

  const head = document.createElementNS(svgNS, 'circle');
  head.setAttribute('cx', 110); head.setAttribute('cy', 65); head.setAttribute('r', 15);
  head.style.display = 'none'; svg.appendChild(head); parts.push(head);

  const body = document.createElementNS(svgNS, 'line');
  body.setAttribute('x1', 110); body.setAttribute('y1', 80); body.setAttribute('x2', 110); body.setAttribute('y2', 130);
  body.style.display = 'none'; svg.appendChild(body); parts.push(body);

  const armL = document.createElementNS(svgNS, 'line');
  armL.setAttribute('x1', 110); armL.setAttribute('y1', 90); armL.setAttribute('x2', 85); armL.setAttribute('y2', 110);
  armL.style.display = 'none'; svg.appendChild(armL); parts.push(armL);

  const armR = document.createElementNS(svgNS, 'line');
  armR.setAttribute('x1', 110); armR.setAttribute('y1', 90); armR.setAttribute('x2', 135); armR.setAttribute('y2', 110);
  armR.style.display = 'none'; svg.appendChild(armR); parts.push(armR);

  const legL = document.createElementNS(svgNS, 'line');
  legL.setAttribute('x1', 110); legL.setAttribute('y1', 130); legL.setAttribute('x2', 95); legL.setAttribute('y2', 165);
  legL.style.display = 'none'; svg.appendChild(legL); parts.push(legL);

  const legR = document.createElementNS(svgNS, 'line');
  legR.setAttribute('x1', 110); legR.setAttribute('y1', 130); legR.setAttribute('x2', 125); legR.setAttribute('y2', 165);
  legR.style.display = 'none'; svg.appendChild(legR); parts.push(legR);

  wrap.appendChild(svg);

  const status = document.createElement('div');
  status.style.marginTop = "10px";
  wrap.appendChild(status);

  container.appendChild(wrap);

  // teclado físico
  const keyHandler = (ev) => {
    const letter = ev.key.toUpperCase();
    if (!letter.match(/[A-ZÑ]/)) return;
    if (wrong >= maxWrong) return;
    if (!revealed.includes('_')) return;
    handleGuess(letter);
  };
  document.addEventListener('keydown', keyHandler);

  function handleGuess(letter) {
    let found = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) { revealed[i] = letter; found = true; }
    }
    wordEl.textContent = revealed.join(' ');

    if (!found) {
      if (wrong < parts.length) parts[wrong].style.display = 'block';
      wrong++;
      status.textContent = `Fallos: ${wrong} / ${maxWrong}`;

      if (wrong >= maxWrong) {
        // animación derrota 
        status.innerHTML = `<div class="lose-anim">💀 <strong>¡Perdiste!</strong><br>La palabra era: <strong>${word}</strong></div>`;
        const tid = setTimeout(() => {
          status.innerHTML = '';
          document.removeEventListener('keydown', keyHandler);
        }, 5000);
        addTimer(tid, 'timeout');
      }
    } else {
      if (!revealed.includes('_')) {
        const score = Math.max(10, (maxWrong - wrong) * 8 + 30);
        status.innerHTML = `<div class="win-anim">🎉 <strong>¡Ganaste!</strong><br>Puntaje: <strong>${score}</strong></div>`;
        saveHigh('Ahorcado', score);
        const tid = setTimeout(() => {
          status.innerHTML = '';
          document.removeEventListener('keydown', keyHandler);
        }, 5000);
        addTimer(tid, 'timeout');
      }
    }
  }
}
    }, []);

    return (
        <div className="page">
            <header className="topbar">
                <div>
                    <button className="hamb">☰</button>
                    <h1 className="brand">Más allá de la pantalla</h1>
                </div>
                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/Historia">Historia</Link>
                    <Link to="/Creadores">Creadores</Link>
                    <Link to="/Perifericos">Perifericos</Link>
                    <Link to="/Componentes">Componentes</Link>
                    <Link to="/Placa">Placa Madre</Link>
                    <Link to="/Juegos" className="active">Juegos</Link>
                </nav>
            </header>

            <main className="container">
                <h2 className="title">Zona de juegos — Divertite aprendiendo</h2>
                <p className="lead">Seleccioná un juego. Cada juego es desafiante — probá tus conocimientos de hardware.</p>

                <section className="game-select" aria-label="Seleccion de juegos">
                    <button className="game-btn" data-game="quiz">Quiz avanzado</button>
                    <button className="game-btn" data-game="memotest">Memotest</button>
                    <button className="game-btn" data-game="match">Matching</button>
                    <button className="game-btn" data-game="hangman">Ahorcado</button>
                </section>

                {/*Contenedor único donde se carga un solo juego a la vez*/}
                <section id="game-container" className="game-container" aria-live="polite">
                    <div className="placeholder">🎮 Seleccioná un juego para empezar</div>
                </section>

                {/*Historial compacto (si querés mostrarlo dentro del contenido; HUD principal es fijo arriba)*/}
                <aside className="score-board" aria-label="Historial de Puntajes">
                    <h3>🏆 Historial (records)</h3>
                    <ul id="scoreList"></ul>
                </aside>
            </main>

            {/*HUD fijo arriba a la derecha (records)*/}
            <div id="scoreHUD" className="score-hud" aria-hidden="false"></div>

            {/*Toasts*/}
            <div id="toast-root"></div>

            <footer className="footer container">
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </div>
    )
}
export default Juegos