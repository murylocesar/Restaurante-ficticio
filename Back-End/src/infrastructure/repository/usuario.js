const usuario = require('../../domain/usuario');

async function create(req) {
	return await usuario.create(req.body);
}

async function update(req) {
	console.log(req.body);
	return await usuario.updateOne( { nome: req.body.nome,  where: { email: req.body.email  } });
}

async function getAll() {
	return await usuario.find();
}

async function getSearch(email) {
	return await usuario.find({ email: email});		
}

async function del(req) {
	return await usuario.deleteOne({ where: { email: req.query.email } });
}


module.exports = {create, update, getAll, getSearch, del  };