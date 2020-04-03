const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/mysql.js');

const Produto = mysql.define('tb_produtos',
	{
		id_produto: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		uuid: {
			allowNull: false,
			type: Sequelize.UUID,
			unique: 'UQ_produtos_Uuid',
			defaultValue: Sequelize.UUIDV4
    	},
		nome: {
			type: Sequelize.STRING(30)
		},
		valor: {
			type: Sequelize.DOUBLE
		},
	},
	{ 
		freezeTableName: true,
		timestamps: false
	}
);

module.exports = Produto;
