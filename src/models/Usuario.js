const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      tipo: DataTypes.STRING,
      senha: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'usuarios'
    });
  }
}

module.exports = Usuario;