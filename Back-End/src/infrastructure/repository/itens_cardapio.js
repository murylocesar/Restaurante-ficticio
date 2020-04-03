const itens_cardapio = require('../../domain/itens_cardapio');

async function create(req) {
	return await itens_cardapio.create(req.body);
}

async function update(req) {
	return await itens_cardapio.update(req.body, { where: { uuid: req.body.uuid  } });
}

async function getAll() {
	return await itens_cardapio.findAll();
}

async function getSearch(req) {
	return await itens_cardapio.findAll({ where: { uuid: req.query.uuid } });		
}

async function del(req) {
	return await itens_cardapio.destroy({ where: { uuid: req.query.uuid } });
}

module.exports = {create, update, getAll, getSearch, del };