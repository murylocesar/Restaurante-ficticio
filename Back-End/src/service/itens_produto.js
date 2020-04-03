const itens_produto = require('../infrastructure/repository/itens_produto');

async function create(req) {
  var retorno = await itens_produto.create(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao inserir a itens do produto'
    };
  }
  return retorno;
}

async function update(req) {
  var retorno = await itens_produto.update(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro itens do produto não encontrada'
    };
  }
  return retorno;
}

async function getAll() {
  var retorno = await itens_produto.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os itens do produto'
    };
  }
  return retorno;
}

async function getSearch(req) {
  var retorno = await itens_produto.getSearch(req);
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os itens do produto'
    };
  }
  return retorno;
}

async function del (req) {
  var retorno = await itens_produto.del(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Itens do produto não encontrada'
    };
  }
  return retorno;
}

module.exports ={create , update, getAll, getSearch, del };