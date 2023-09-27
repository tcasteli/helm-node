'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log(`${Date.now()} - Hello world from Ted`);
  res.send(`${Date.now()} - Hello world from Ted!!!\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);