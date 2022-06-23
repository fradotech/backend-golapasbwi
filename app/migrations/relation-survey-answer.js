module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('answers', {
      fields: ['survey_id'],
      type: 'foreign key',
      name: 'surveys',
      references: {
        table: 'surveys',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.addConstraint('answers', {
      fields: ['survey_id'],
      type: 'foreign key',
      name: 'surveys',
      references: {
        table: 'surveys',
        field: 'id'
      }
    })
  }
};
