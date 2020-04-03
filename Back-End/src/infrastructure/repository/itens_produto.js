const itens_produto = require('../../domain/itens_produto.js');

async function create(req) {
	return await itens_produto.create( req.body );
}

async function update(req) { 
	return await itens_produto.update(req.body, { where: { uuid: req.body.uuid  } });
}

async function getAll() {
	return await itens_produto.findAll();
}

async function getSearch(req) {
	return await itens_produto.findAll({ where: { uuid: req.query.uuid } });		
}

async function del(req) {
	return await itens_produto.destroy({ where: { uuid: req.query.uuid } });
}

module.exports = {create, update, getAll, getSearch, del };