let angle = 45;
let power = 20;
let life = 100;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function drawTank() {
  ctx.fillStyle = "#333";
  ctx.fillRect(150, 350, 40, 20);

  const rad = angle * Math.PI / 180;
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(170, 350);
  ctx.lineTo(
    170 + Math.cos(rad) * 30,
    350 - Math.sin(rad) * 30
  );
  ctx.stroke();
}

function drawGround() {
  ctx.fillStyle = "#2ecc71";
  ctx.fillRect(0, 370, canvas.width, 80);
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGround();
  drawTank();
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") angle--;
  if (e.key === "ArrowRight") angle++;
  if (e.key === "ArrowUp") power++;
  if (e.key === "ArrowDown") power--;

  document.getElementById("angle").textContent = angle;
  document.getElementById("power").textContent = power;
});

loop();