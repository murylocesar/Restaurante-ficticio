const express = require('express');
const cardapio = require('../../../application/cardapio');

const router = express.Router();

router.route('/').post(cardapio.create);
router.route('/update').put(cardapio.update);

router.route('/').get(cardapio.getAll);
router.route('/search').get(cardapio.getSearch);

router.route('/delete').delete(cardapio.del);

module.exports = router; 