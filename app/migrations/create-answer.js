module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('answers', {
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
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  
  down: async (queryInterface) => {
    await queryInterface.dropTable('answers')
  },
}
