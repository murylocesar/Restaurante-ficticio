const cardapio = require('../../domain/cardapio.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


async function create(req) {
	return await cardapio.create(req.body);
}

async function update(req) {
	return await cardapio.update(req.body,{ where: { uuid: req.body.uuid } });
}

async function getAll() {
	return await cardapio.findAll();
}

async function getSearch(req) {
	return await cardapio.findAll({ 
		where: { 
			nome: {
				[Op.like]: '%' + req.query.nome + '%'
			}	
		}	
	});		
}

async function del(req) {
	return await cardapio.destroy({ where: { uuid: req.query.uuid } });
}

module.exports = {create, update, getAll, getSearch, del };