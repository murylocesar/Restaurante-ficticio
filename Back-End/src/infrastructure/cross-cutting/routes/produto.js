const express = require('express');
const produto = require('../../../application/produto');

const router = express.Router();

router.route('/').post(produto.create);
router.route('/update').put(produto.update);

router.route('/').get(produto.getAll);
router.route('/search').get(produto.getSearch);

router.route('/delete').delete(produto.del);

module.exports = router; 