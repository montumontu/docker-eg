'use strict';

const express = require('express');

// Constants
const PORT = 8080;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello India! Jai Hind! Vande Matram\n');
});

app.get('/get', (req, res) => {
  res.send('Hello qw get\n');
});

app.listen(PORT, ()=>{
  console.log('server started')
});
console.log(`Running on http://${PORT}`);