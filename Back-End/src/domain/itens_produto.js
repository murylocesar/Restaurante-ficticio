const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/mysql.js');
const produto = require('./produto.js');
const ingrediente = require('./ingrediente.js');


const Itens_produto = mysql.define('tb_itens_produto',
	{
		id_item: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		uuid: {
			allowNull: false,
			type: Sequelize.UUID,
			unique: 'UQ_itens_produto_Uuid',
			defaultValue: Sequelize.UUIDV4
    	},
	}, 
	{
		freezeTableName: true,
		timestamps: false
	}
);

produto.hasMany(
    Itens_produto,
    {
		foreignKey: { 
			name: 'id_produto', 
			allowNull: false
	 	},
		onDelete: 'CASCADE'
    }
);
ingrediente.hasMany(
    Itens_produto,
    {
		foreignKey: { 
			name: 'id_ingrediente', 
			allowNull: false
	 	},
		onDelete: 'CASCADE'
    }
	
);

module.exports = Itens_produto;
