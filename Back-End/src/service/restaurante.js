const restaurante = require('../infrastructure/repository/restaurante');

async function create(req) {

  var email = await restaurante.getSearchEmail(req.body.email);

  if(email!=""){
    return { 
      statusCode: 401, 
      msg: 'E-mail já cadastrado no sistema, tente novamente com outro e-mail'
    };
  }
  var cnpj = await restaurante.getSearchCNPJ(req.body.cnpj);

  if(cnpj!=""){
    return { 
      statusCode: 401, 
      msg: 'CNPJ já cadastrado no sistema, tente novamente'
    };
  }

  var retorno = await restaurante.create(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao inserir restaurante'
    };
  }
  return retorno;
}

async function update(req) {
  var retorno = await restaurante.update(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro al realizar a alteração do restaurante'
    };
  }
  return retorno;
}

async function getAll() {
  var retorno = await restaurante.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os restaurante'
    };
  }
  return retorno;
}

async function getSearch(req) {
  var retorno = await restaurante.getSearch(req);
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os restaurantes'
    };
  }
  return retorno;
}

async function del (req) {
  var retorno = await restaurante.del(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Restaurantes não encontrado'
    };
  }
  return retorno;
}

module.exports ={create , update, getAll, getSearch, del };