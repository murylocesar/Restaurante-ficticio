const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
    name: String,
    email: String,
    senha: String,
});

module.exports = mongoose.model('Usuario', Usuario);