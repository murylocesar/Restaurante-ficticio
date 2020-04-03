const produto = require('../../domain/produto');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function create(req) {
	return await produto.create(req.body);
}

async function update(req) { 
	return await produto.update(req.body,{ where: {uuid: req.body.uuid}});
}

async function getAll() {
	return await produto.findAll();
}

async function getSearch(req) {
	return await produto.findAll({ 
		where: { 
			nome: {
				[Op.like]: '%' + req.query.nome + '%'
			}	
		}
	});		
}

async function del(req) {
	return await produto.destroy({ where: { uuid: req.query.uuid } });
}

module.exports = {create, update, getAll, getSearch, del };