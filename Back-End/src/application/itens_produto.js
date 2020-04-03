const itens_produto = require('../service/itens_produto');

async function create(req, res) {
  return await itens_produto
    .create(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send(q);
    });
}

async function update(req, res) {
  return await itens_produto
    .update(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send(q);
    });
}

async function getAll (req, res) {
  return await itens_produto
    .getAll()
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function getSearch(req, res) {
  return await itens_produto
    .getSearch(req)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function del(req, res) {

  return await itens_produto
    .del(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send('itens_produto excluido com sucesso');
    });
}

module.exports = {create, update, getAll, getSearch, del};