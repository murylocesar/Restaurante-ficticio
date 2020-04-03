const express = require('express');
const usuario = require('../../../application/usuario');
const jwt = require('../../validation/webToken');

const router = express.Router();

router.route('/').post(usuario.create);
router.route('/update').put(usuario.update);

router.route('/').get(usuario.getAll);
router.route('/search').get(usuario.getSearch);

router.route('/auth').post(usuario.getAuth);

router.route('/delete').delete(jwt.validateToken, usuario.del);

module.exports = router; 