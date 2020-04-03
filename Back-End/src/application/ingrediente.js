const ingrediente = require('../service/ingrediente');

async function create(req, res) {
  return await ingrediente
    .create(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send(q);
    });
}

async function update(req, res) {
  return await ingrediente
    .update(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send(q);
    });
}

async function getAll (req, res) {
  return await ingrediente
    .getAll()
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function getSearch(req, res) {
  return await ingrediente
    .getSearch(req)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function del(req, res) {

  return await ingrediente
    .del(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send('ingrediente excluido com sucesso');
    });
}

module.exports = {create, update, getAll, getSearch, del};