const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/mysql.js');

const Restaurante = mysql.define('tb_restaurantes',
	{
		cnpj: {
			type: Sequelize.STRING(25),
			primaryKey: true,
    	},
    	uuid: {
			allowNull: false,
			type: Sequelize.UUID,
			unique: 'UQ_restaurantes_Uuid',
			defaultValue: Sequelize.UUIDV4
    	},
		name: {
			type: Sequelize.STRING(25)
		},
		email: {
			type: Sequelize.STRING(50)
		},
		senha: {
			type: Sequelize.STRING(25)
		},
		latitude: {
			type: Sequelize.DOUBLE
		},
		longitude: {
			type: Sequelize.DOUBLE
		},
	},
	{ 
		freezeTableName: true,
		timestamps: false
	}
);

module.exports = Restaurante;