const express = require('express');
const produto = require('../../../application/produto');
const jwt = require('../../validation/webToken');

const router = express.Router();

router.route('/').post(jwt.validateToken, produto.create);
router.route('/update').put(jwt.validateToken, produto.update);

router.route('/').get(jwt.validateToken, produto.getAll);
router.route('/search').get(jwt.validateToken, produto.getSearch);

router.route('/delete').delete(jwt.validateToken, produto.del);

module.exports = router; 