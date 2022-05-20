require('dotenv').config();
const { Sequelize } = require('sequelize');

const Estoque = require('../model/Estoque');
const Funcionario = require('../model/Funcionario');
const Insumo = require('../model/Insumo');
const Retirada = require('../model/Retirada');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER ,'', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
       timestamps: false,
    }
});

const sync = () => {
    Estoque.init(sequelize);
    Funcionario.init(sequelize);
    Insumo.init(sequelize);
    Retirada.init(sequelize);

    Estoque.associate(sequelize.models);
    Funcionario.associate(sequelize.models);
    Insumo.associate(sequelize.models);
    Retirada.associate(sequelize.models);

    sequelize.sync({ force : false });
}

module.exports = {
    sequelize,
    sync
} 