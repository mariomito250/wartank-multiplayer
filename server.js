const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'wartank-secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/api/session', (req, res) => {
  req.session.duc = 'ducnghia';
  const decode = Buffer.from('ducnghia_game').toString('base64');

  res.json({
    user: req.session.duc,
    decode
  });
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});