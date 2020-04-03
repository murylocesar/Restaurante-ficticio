const express = require('express');
const restaurante = require('../../../application/restaurante');

const router = express.Router();

router.route('/').post(restaurante.create);
router.route('/update').put(restaurante.update);

router.route('/').get(restaurante.getAll);
router.route('/search').get(restaurante.getSearch);

router.route('/delete').delete(restaurante.del);

module.exports = router; 