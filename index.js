const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

let waitingPlayer = null;
let games = {};

io.on("connection", socket => {
  console.log("Conectado:", socket.id);

  socket.on("find_match", () => {
    if (waitingPlayer) {
      const room = "room_" + socket.id;
      socket.join(room);
      waitingPlayer.join(room);

      games[room] = {
        turn: waitingPlayer.id,
        players: {
          [waitingPlayer.id]: { hp: 30 },
          [socket.id]: { hp: 30 }
        }
      };

      io.to(room).emit("start_game", {
        room,
        turn: waitingPlayer.id
      });

      waitingPlayer = null;
    } else {
      waitingPlayer = socket;
    }
  });

  socket.on("attack", ({ room }) => {
    const game = games[room];
    if (!game || game.turn !== socket.id) return;

    const opponent = Object.keys(game.players)
      .find(id => id !== socket.id);

    game.players[opponent].hp -= 5;
    game.turn = opponent;

    io.to(room).emit("update", game);

    if (game.players[opponent].hp <= 0) {
      io.to(room).emit("game_over", socket.id);
      delete games[room];
    }
  });

  socket.on("disconnect", () => {
    if (waitingPlayer?.id === socket.id) waitingPlayer = null;
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});