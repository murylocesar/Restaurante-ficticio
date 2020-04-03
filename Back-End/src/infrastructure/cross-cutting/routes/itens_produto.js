const express = require('express');
const itens_produto = require('../../../application/itens_produto');

const router = express.Router();

router.route('/').post(itens_produto.create);
router.route('/update').put(itens_produto.update);

router.route('/').get(itens_produto.getAll);
router.route('/search').get(itens_produto.getSearch);

router.route('/delete').delete(itens_produto.del);

module.exports = router; 