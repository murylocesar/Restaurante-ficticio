const itens_cardapio = require('../infrastructure/repository/itens_cardapio');

async function create(req) {
  var retorno = await itens_cardapio.create(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao inserir a itens do cardapio '
    };
  }
  return retorno;
}

async function update(req) {
  var retorno = await itens_cardapio.update(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Itens do cardapio não encontrada'
    };
  }
  return retorno;
}

async function getAll() {
  var retorno = await itens_cardapio.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os itens do cardapio'
    };
  }
  return retorno;
}

async function getSearch(req) {
  var retorno = await itens_cardapio.getSearch(req);
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os itens do cardapio'
    };
  }
  return retorno;
}

async function del (req) {
  var retorno = await itens_cardapio.del(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Itens_cardapio não encontrada'
    };
  }
  return retorno;
}

module.exports ={create , update, getAll, getSearch, del };