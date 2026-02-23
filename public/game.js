const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const gravity = 0.35;
let bullet = null;
let currentPlayer = 1;

// JOGADORES (tanques parados)
const players = {
  1: {
    x: 140,
    y: 350,
    angle: 45,
    power: 20,
    life: 100
  },
  2: {
    x: 760,
    y: 350,
    angle: 135,
    power: 20,
    life: 100
  }
};

// ===== DESENHO =====
function drawGround() {
  ctx.fillStyle = "#2ecc71";
  ctx.fillRect(0, 370, canvas.width, 80);
}

function drawTank(p) {
  // corpo
  ctx.fillStyle = "#333";
  ctx.fillRect(p.x - 20, p.y, 40, 20);

  // canhão
  const rad = p.angle * Math.PI / 180;
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
  ctx.lineTo(
    p.x + Math.cos(rad) * 30,
    p.y - Math.sin(rad) * 30
  );
  ctx.stroke();
}

// ===== TIRO =====
function shoot() {
  if (bullet) return;

  const p = players[currentPlayer];
  const rad = p.angle * Math.PI / 180;

  bullet = {
    x: p.x,
    y: p.y,
    vx: Math.cos(rad) * p.power,
    vy: -Math.sin(rad) * p.power
  };
}

function updateBullet() {
  if (!bullet) return;

  bullet.vy += gravity;
  bullet.x += bullet.vx;
  bullet.y += bullet.vy;

  ctx.beginPath();
  ctx.arc(bullet.x, bullet.y, 4, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();

  // colisão com o chão
  if (bullet.y >= 370) {
    endTurn();
  }

  // saiu da tela
  if (
    bullet.x < 0 ||
    bullet.x > canvas.width ||
    bullet.y > canvas.height
  ) {
    endTurn();
  }
}

// ===== TURNOS =====
function endTurn() {
  bullet = null;
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  updateHUD();
}

// ===== HUD =====
function updateHUD() {
  document.getElementById("angle").textContent =
    players[currentPlayer].angle;

  document.getElementById("power").textContent =
    players[currentPlayer].power;

  document.getElementById("life").textContent =
    players[currentPlayer].life;

  document.getElementById("turn").textContent =
    currentPlayer;
}

// ===== CONTROLES =====
document.addEventListener("keydown", e => {
  if (bullet) return;

  const p = players[currentPlayer];

  if (e.key === "ArrowLeft") p.angle--;
  if (e.key === "ArrowRight") p.angle++;
  if (e.key === "ArrowUp") p.power++;
  if (e.key === "ArrowDown") p.power--;

  // limites
  p.angle = Math.max(0, Math.min(180, p.angle));
  p.power = Math.max(5, Math.min(50, p.power));

  if (e.key === " ") shoot();

  updateHUD();
});

// botão ATIRAR
document.getElementById("fire").onclick = shoot;

// ===== LOOP =====
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGround();
  drawTank(players[1]);
  drawTank(players[2]);
  updateBullet();
  requestAnimationFrame(loop);
}

updateHUD();
loop();