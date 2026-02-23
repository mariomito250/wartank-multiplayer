const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

let players = {};

io.on("connection", socket => {
  console.log("Jogador entrou:", socket.id);

  players[socket.id] = {
    x: 100,
    y: 100,
    hp: 100
  };

  socket.on("move", data => {
    if (players[socket.id]) {
      players[socket.id].x = data.x;
      players[socket.id].y = data.y;
    }
  });

  socket.on("disconnect", () => {
    delete players[socket.id];
    console.log("Jogador saiu:", socket.id);
  });
});

setInterval(() => {
  io.emit("state", players);
}, 50);

http.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});