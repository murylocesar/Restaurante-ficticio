const produto = require('../infrastructure/repository/produto');
const jwt = require('../infrastructure/validation/webToken');

async function create(req) {
  var retorno = await produto.create(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao inserir o produto'
    };
  }
  return retorno;
}

async function update(req) {  
  var retorno = await produto.update(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Produto não encontrado'
    };
  }
  return retorno;
}

async function getAll() {
  var retorno = await produto.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os Produtos'
    };
  }
  return retorno;
}

async function getSearch(req) {
  var retorno = await produto.getSearch(req);
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os Produtos'
    };
  }
  return retorno;
}

async function del (req) {
  var retorno = await produto.del(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Produto não encontrado'
    };
  }
  return retorno;
}

module.exports ={create , update, getAll, getSearch, del };