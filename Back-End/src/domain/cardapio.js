const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/mysql.js');
const restaurante = require('./restaurante.js');

const Cardapio = mysql.define('tb_cardapios',
	{
		id_cardapio: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		}, 
		uuid: {
			allowNull: false,
			type: Sequelize.UUID,
			unique: 'UQ_cardapios_Uuid',
			defaultValue: Sequelize.UUIDV4
    	},
		nome: {
			type: Sequelize.STRING(25)
		},
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

restaurante.hasMany(
    Cardapio,
    {
		foreignKey: { 
			name: 'id_restaurante', 
			allowNull: false
	 	},
		onDelete: 'CASCADE'
    }
);

module.exports = Cardapio;
