const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/mysql.js');

const Restaurante = mysql.define('tb_restaurantes',
	{
		cnpj: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		uuid: {
			allowNull: false,
			type: Sequelize.UUID,
			unique: 'UQ_restaurantes_Uuid',
			defaultValue: Sequelize.UUIDV4
    	},
		nome: {
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