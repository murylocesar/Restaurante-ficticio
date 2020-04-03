const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/mysql.js');
const produto = require('./produto.js');
const cardapio = require('./cardapio.js');

const itens_cardapio = mysql.define('tb_itens_cardapio',
	{
		id_item: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		uuid: {
			allowNull: false,
			type: Sequelize.UUID,
			unique: 'UQ_itens_cardapio_Uuid',
			defaultValue: Sequelize.UUIDV4
    	},
	},
	{ 
		freezeTableName: true,
		timestamps: false
	}
);

cardapio.hasMany(
    itens_cardapio,
    {
		foreignKey: { 
			name: 'id_cardapio', 
			allowNull: false
	 	},
		onDelete: 'CASCADE'
    }
	
);
produto.hasMany(
    itens_cardapio,
    {
		foreignKey: { 
			name: 'id_produto', 
			allowNull: false
	 	},
		onDelete: 'CASCADE'
    }
);

module.exports = itens_cardapio;