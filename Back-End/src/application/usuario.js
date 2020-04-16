const usuario = require('../service/usuario');

async function create(req, res) {
  return await usuario
    .create(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(q.statusCode || 200).send(q.msg || q);
    });
}

async function update(req, res) {
  return await usuario
    .update(req)
    .catch (err => {
     return res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(q.statusCode || 200).send(q.msg || q);
    });
}

async function getAll (req, res) {
  return await usuario
    .getAll()
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function getSearch(req, res) {
  return await usuario
    .getSearch(req)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function getAuth(req, res) {
  return await usuario
    .getAuth(req)
    .catch(err => {
      res.status(err.statusCode || 500).send(err.msg);
    })
    .then(q => {
      return res.status(q.statusCode || 200).send(q.msg);
    });
}

async function del(req, res) {

  return await usuario
    .del(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send('usuario excluido com sucesso');
    });
}

module.exports = {create, update, getAll, getSearch, del, getAuth};