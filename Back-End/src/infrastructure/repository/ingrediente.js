const ingrediente = require('../../domain/ingrediente');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function create(req) {
	return await ingrediente.create(req.body);
}

async function update(req) { 	
	return await ingrediente.update(req.body, { where: { uuid: req.body.uuid  } });
}

async function getAll() {
	return await ingrediente.findAll();
}

async function getSearch(req) {
	return await ingrediente.findAll({
		where: { 
			nome: {
				[Op.like]: '%' + req.query.nome + '%'
			}	
		}
	 });		
}

async function del(req) {
	return await ingrediente.destroy({ where: { uuid: req.query.uuid } });
}

module.exports = {create, update, getAll, getSearch, del };