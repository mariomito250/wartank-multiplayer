function updateStatus(game) {
  document.getElementById("status").innerText =
    myTurn ? "Seu turno" : "Turno do oponente";

  document.getElementById("attack").disabled = !myTurn;

  if (game) {
    const players = game.players;
    const myId = socket.id;
    const enemyId = Object.keys(players).find(id => id !== myId);

    document.getElementById("myHp").innerText = players[myId].hp;
    document.getElementById("enemyHp").innerText = players[enemyId].hp;
  }
}(game) {
  document.getElementById("status").innerText =
    myTurn ? "Seu turno" : "Turno do oponente";

  document.getElementById("attack").disabled = !myTurn;

  if (game) {
    const players = game.players;
    const myId = socket.id;
    const enemyId = Object.keys(players).find(id => id !== myId);

    document.getElementById("myHp").innerText = players[myId].hp;
    document.getElementById("enemyHp").innerText = players[enemyId].hp;
  }
}