const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Página Inicial</h1>');
  });
  
  app.get('/sobre', (req, res) => {
    res.send('<h1> asasasSobre Nós</h1>');
  });
  
  app.get('/contato', (req, res) => {
    res.send('<h1>Contato</h1>');
  });
  