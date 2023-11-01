const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('<h1>Página Inicial</h1>');
});

app.get('/sobre', (req, res) => {
  res.send('<h1> Sobre Nós</h1>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1>');
});

app.listen(3000, () => {
  console.log("Conectado !")
})