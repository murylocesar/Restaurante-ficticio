const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT
});


sequelize.authenticate().then(function() {
		console.log('\n\n################ Conectado ao banco de dados ! ################################\n\n');
	}).catch(function(erro) {
		console.log('\n\n################ Falha ao se conectar ao banco de dados! ################################\n\n' + erro);
	});

//sequelize.sync({ force: true });

module.exports = sequelize;
