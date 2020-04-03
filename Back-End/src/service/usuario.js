const usuario = require('../infrastructure/repository/usuario');
const bcrypt = require('../infrastructure/validation/bcrypt');
const jwt = require('./../infrastructure/validation/webToken');

async function create(req) {

   console.log(" " + req.body.email);

  /*var email = await usuario.getSearch(req.body.email);

  if(email!=""){
    return { 
      statusCode: 401, 
      msg: 'E-mail já cadastrado no sistema'
    };
  }*/

  req.body.senha = await bcrypt.encryption(req.body.senha);

  var retorno = await usuario.create(req);

  const token = await jwt.creatToken(retorno._id);

  var id = retorno._id;
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao inserir a usuario '
      };
  }
  return { id, token };
}

async function update(req) {

  var user = await usuario.getSearch(req.body.email);

  if(! await bcrypt.comparePassword(req.body.senha, user[0].senha)){
    return { 
      statusCode: 401, 
      msg: 'Digite a senha correta para realizar a alteração de dados'
    };
  }
  
 // req.body.senha = await bcrypt.encryption(req.body.senha);

  var retorno = await usuario.update(req);
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Usuario não encontrada'
    };
  }
  return retorno;
}

async function getAll() {
  var retorno = await usuario.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os usuario'
    };
  }
  return retorno;
}

async function getSearch(req) {
  var retorno = await usuario.getSearch(req.query.email);
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os usuario'
    };
  }
  return retorno;
}

async function del(req) {
  var retorno = await usuario.del(req);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Usuario não encontrada'
    };
  }
  return retorno;
}

async function getAuth(req) {

  console.log("body" + req.body.email);

  var retorno = await usuario.getSearch(req.body.email);

  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'E-mail não cadastrado no sistema'
    };
  }

  if(! await bcrypt.comparePassword(req.body.senha, retorno[0].senha)){
    return { 
      statusCode: 401, 
      msg: 'Senha invalida, tente novamente!'
    };
  }

  const token = await jwt.creatToken(retorno._id);

  return token;
}
module.exports ={create , update, getAll, getSearch, del, getAuth};