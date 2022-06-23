const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    static associate(models) {

    }
  }
  Survey.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      suggestion: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'surveys',
      modelName: 'Survey',
      underscored: true
    },
  )
  return Survey;
}
