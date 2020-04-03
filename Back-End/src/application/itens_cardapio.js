const itens_cardapio = require('../service/itens_cardapio');

async function create(req, res) {
  return await itens_cardapio
    .create(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send(q);
    });
}

async function update(req, res) {
  return await itens_cardapio
    .update(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send(q);
    });
}

async function getAll (req, res) {
  return await itens_cardapio
    .getAll()
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function getSearch(req, res) {
  return await itens_cardapio
    .getSearch(req)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function del(req, res) {

  return await itens_cardapio
    .del(req)
    .catch (err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then (q => {
      return res.status(200).send('itens_cardapio excluido com sucesso');
    });
}

module.exports = {create, update, getAll, getSearch, del};