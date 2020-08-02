const restaurante = require('../service/restaurante');

async function create(req, res) {
  return await restaurante
    .create(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err.msg);
    })
    .then (q => {
      return res.status(q.statusCode || 200).send(q.msg);
    });
}

async function update(req, res) {
  return await restaurante
    .update(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err.msg);
    })
    .then (q => {
      return res.status(200).send(q.msg);
    });
}

async function getAll (req, res) {
  return await restaurante
    .getAll()
    .catch(err => {
      res.status(err.statusCode || 500).send(err.msg);
    })
    .then(q => {
      return res.status(200).send(q.msg);
    });
}

async function getSearch(req, res) {
  return await restaurante
    .getSearch(req)
    .catch(err => {
      res.status(err.statusCode || 500).send(err.msg);
    })
    .then(q => {
      return res.status(200).send(q.msg);
    });
}

async function del(req, res) {

  return await restaurante
    .del(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err.msg);
    })
    .then (q => {
      return res.status(200).send('Restaurante excluido com sucesso');
    });
}

module.exports = {create, update, getAll, getSearch, del};