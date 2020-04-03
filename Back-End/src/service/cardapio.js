const cardapio = require('../infrastructure/repository/cardapio');

async function create(req) {
  var retorno = await cardapio.create(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao inserir a cardapio'
    };
  }
  return retorno;
}

async function update(req) {
  var retorno = await cardapio.update(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao realizar alteração'
    };
  }
  return retorno;
}

async function getAll() {
  var retorno = await cardapio.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os cardapio'
    };
  }
  return retorno;
}

async function getSearch(req) {
  var retorno = await cardapio.getSearch(req);
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os cardapios'
    };
  }
  return retorno;
}

async function del (req) {
  var retorno = await cardapio.del(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao excluir o cardapio'
    };
  }
  return retorno;
}

module.exports ={create, update, getAll, getSearch, del };