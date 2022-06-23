module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('answers', {
      fields: ['question_id'],
      type: 'foreign key',
      name: 'questions',
      references: {
        table: 'questions',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.addConstraint('answers', {
      fields: ['question_id'],
      type: 'foreign key',
      name: 'questions',
      references: {
        table: 'questions',
        field: 'id'
      }
    })
  }
};
