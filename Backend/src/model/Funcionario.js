const { Model, DataTypes } = require('sequelize');

class Funcionario extends Model {
    static init(datacon) {
        super.init(
            {
              nome_completo: {
                    type: DataTypes.STRING(250),
                    allowNull: false,
                },
                cpf:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: true
                },
                telefone: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING(120),
                    allowNull: false,
                    unique: true
                },
                senha: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            }, 

            {
                sequelize: datacon,
                tableName: 'funcionarios',
                modelName: 'funcionario'
            }

        );
    }

    static associate(models) {          
        Funcionario.hasMany(models.retirada, { foreignKey: 'id_func' });
    } 

    //  static associate(models) {
    //     Aposta.belongsTo(models.team, { foreingKey: 'id' });
    //     Aposta.belongsTo(models.assistente, { foreingKey: 'id' });
    // }
    
    // ----- CHAMAR O RENYER!!!!!!!!!!!!!!!!!!!!!!*/
}

module.exports = Funcionario;