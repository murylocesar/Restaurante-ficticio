const express = require('express');
const ingrediente = require('../../../application/ingrediente');

const router = express.Router();

router.route('/').post(ingrediente.create);
router.route('/update').put(ingrediente.update);

router.route('/').get(ingrediente.getAll);
router.route('/search').get(ingrediente.getSearch);

router.route('/delete').delete(ingrediente.del);

module.exports = router; 