const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      models.Answer.belongsTo(models.Question)
      models.Question.hasMany(models.Answer)

      models.Answer.belongsTo(models.Survey)
      models.Survey.hasMany(models.Answer)
    }
  }
  Answer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      survey_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      question_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      answer: {
        allowNull: false,
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      },
    },
    {
      sequelize,
      tableName: 'answers',
      modelName: 'Answer',
      underscored: true
    },
  )
  return Answer
}
