const socket = io();
let myTurn = false;
let roomId = null;

socket.emit("find_match");

socket.on("start_game", data => {
  roomId = data.room;
  myTurn = data.turn === socket.id;
  updateStatus();
});

socket.on("update", game => {
  myTurn = game.turn === socket.id;
  updateStatus(game);
});

socket.on("game_over", winner => {
  alert(winner === socket.id ? "Você venceu!" : "Você perdeu!");
});

document.getElementById("attack").onclick = () => {
  socket.emit("attack", { room: roomId });
};

function updateStatus(game) {
  document.getElementById("status").innerText =
    myTurn ? "Seu turno" : "Turno do oponente";
  document.getElementById("attack").disabled = !myTurn;
}