const ingrediente = require('../infrastructure/repository/ingrediente');

async function create(req) {
  var retorno = await ingrediente.create(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro: ao inserir a ingrediente '
    };
  }
  return retorno;
}

async function update(req) {
  var retorno = await ingrediente.update(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro: ingrediente não encontrada'
    };
  }
  return retorno;
}

async function getAll() {
  var retorno = await ingrediente.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os ingrediente'
    };
  }
  return retorno;
}

async function getSearch(req) {
  var retorno = await ingrediente.getSearch(req);
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os ingrediente'
    };
  }
  return retorno;
}

async function del (req) {
  var retorno = await ingrediente.del(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro: ingrediente não encontrada'
    };
  }
  return retorno;
}

module.exports ={create , update, getAll, getSearch, del };