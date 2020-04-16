const routes = require('./src/infrastructure/cross-cutting/routes/routes');
const cors = require('cors');

const bd = require('./src/infrastructure/data/mongoose');

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

module.exports = app;