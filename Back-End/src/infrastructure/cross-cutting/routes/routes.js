const express = require('express');
const routes = express.Router();
const jwt = require('../../validation/webToken');


const restaurante = require('./restaurante');
const cardapio = require('./cardapio');
const itens_cardapio = require('./itens_cardapio');
const produto = require('./produto');
const itens_produto = require('./itens_produto');
const ingrediente = require('./ingrediente');
const usuario = require('./usuario');

routes.use('/restaurantes', restaurante);
routes.use('/cardapio', cardapio);
routes.use('/itens_cardapio', itens_cardapio);
routes.use('/produto', produto);
routes.use('/itens_produto', itens_produto);
routes.use('/ingrediente', ingrediente);
routes.use('/usuario', usuario);


module.exports = routes;