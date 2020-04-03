const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/mysql.js');

const Ingrediente = mysql.define('tb_ingredientes',
	{
		id_ingrediente: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
    	uuid: {
			allowNull: false,
			type: Sequelize.UUID,
			unique: 'UQ_Ingrediente_Uuid',
			defaultValue: Sequelize.UUIDV4
    	},
		nome: {
			type: Sequelize.STRING(30)
		},
	},
	{ 
		freezeTableName: true,
		timestamps: false
	}
);

module.exports = Ingrediente;
