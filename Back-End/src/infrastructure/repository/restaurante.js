const Restaurante = require('../../domain/restaurante');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function create(req) {
	return await Restaurante.create(req.body);
}

async function update(req) {
	return await Restaurante.update(req.body, {returning: true,  where: { uuid: req.body.uuid  } });
}

async function getAll() {
	return await Restaurante.findAll();
}

async function getSearch(req) {
	return await Restaurante.findAll({ 
		where: { 
			nome: {
				[Op.like]: '%' + req.query.nome + '%'
			}	
		} 
	});		
}
async function getSearchEmail(email) {
	return await Restaurante.findAll({ 
		where: { 
			email:email	
		} 
	});		
}
async function getSearchCNPJ(cnpj) {
	return await Restaurante.findAll({ 
		where: { 
			cnpj:cnpj	
		} 
	});		
}
async function del(req) {
	return await Restaurante.destroy({ where: { uuid: req.query.uuid } });
}

module.exports = {create, update, getAll, getSearch, del, getSearchEmail ,getSearchCNPJ };