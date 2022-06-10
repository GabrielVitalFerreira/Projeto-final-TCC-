const { Model, DataTypes } = require('sequelize');

class Login extends Model {
    static init(datacon) {
        super.init(
            {
                email: {
                    type: DataTypes.STRING(120),
                    allowNull: false,
                    unique: true
                },
                senha: {
                    type: DataTypes.STRING(100),
                    allowNull: false
                }
            },
            {
                sequelize: datacon,
                tableName: 'logins',
                modelName: 'login'
            }
            
        ); 
    }
}

module.exports = Login;