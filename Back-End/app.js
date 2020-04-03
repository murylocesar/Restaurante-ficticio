const routes = require('./src/infrastructure/cross-cutting/routes/routes');
const bd = require('./src/infrastructure/data/mongoose');

const express = require('express');
const app = express();

app.use(express.json());

app.use(routes);

module.exports = app;