const { Model, DataTypes } = require('sequelize');

class Insumo extends Model {
    static init(datacon) {
        super.init(
            {
                nome:{
                    type: DataTypes.STRING(250),
                    allowNull: false
                },
                quantidade: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                data_de_entrada: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                data_de_validade: {
                    type: DataTypes.DATE,
                    allowNull: false,
                }
            },

            {
                sequelize: datacon,
                tableName: 'insumos',
                modelName: 'insumo'
            }
        );
    }
    static associate(models) {
        Insumo.hasMany(models.estoque, {foreignKey: 'id_insu'});
        Insumo.hasMany(models.retirada, {foreignKey: 'id_insu'});
    }
}

module.exports = Insumo;