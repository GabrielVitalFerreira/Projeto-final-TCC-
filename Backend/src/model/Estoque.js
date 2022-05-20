const { Model, DataTypes } = require('sequelize');

class Estoque extends Model {
    static init(datacon) {
        super.init(
            {
                id_insu:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'insumos',
                        key: 'id'
                    }
                },
                quantidade: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                }
            },

            {
                sequelize: datacon,
                tableName: 'estoques',
                modelName: 'estoque'
            }
        );
    }
    static associate(models) {
        Estoque.belongsTo(models.insumo, {foreignKey: 'id_insu'});
    }
}

module.exports = Estoque;