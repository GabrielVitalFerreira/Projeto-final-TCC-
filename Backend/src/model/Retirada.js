const { Model, DataTypes } = require('sequelize');

class Retirada extends Model {
    static init(datacon) {
        super.init(
            {
                id_insu:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'estoques',
                        key: 'id'
                    }
                },
                id_func:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'funcionarios',
                        key: 'id'
                    }
                },
                quantidade: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                data_de_retirada: {
                    type: DataTypes.DATE,
                    allowNull: false,
                }
            },
            {
                sequelize: datacon,
                tableName: 'retiradas',
                modelName: 'retirada'
            }
        )
    }
    static associate(models) {
        Retirada.belongsTo(models.insumo, {foreignKey: 'id_insu'});
        Retirada.belongsTo(models.funcionario, {foreignKey: 'id_func'});
    }
}

module.exports = Retirada;