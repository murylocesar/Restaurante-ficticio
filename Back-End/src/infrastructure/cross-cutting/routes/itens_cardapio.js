const express = require('express');
const itens_cardapio = require('../../../application/itens_cardapio');

const router = express.Router();

router.route('/').post(itens_cardapio.create);
router.route('/update').put(itens_cardapio.update);

router.route('/').get(itens_cardapio.getAll);
router.route('/search').get(itens_cardapio.getSearch);

router.route('/delete').delete(itens_cardapio.del);

module.exports = router; 