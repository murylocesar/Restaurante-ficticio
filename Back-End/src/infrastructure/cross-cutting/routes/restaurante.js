const express = require('express');
const restaurante = require('../../../application/restaurante');
const jwt = require('../../validation/webToken');

const router = express.Router();

router.route('/').post(jwt.validateToken, restaurante.create);
router.route('/update').put(jwt.validateToken, restaurante.update);

router.route('/').get(restaurante.getAll);
router.route('/search').get(restaurante.getSearch);

router.route('/delete').delete(jwt.validateToken, restaurante.del);

module.exports = router; 