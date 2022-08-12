module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'fradotech.id@gmail.com',
          password: '$2b$10$8lf20ohMt6YbudLCkFeoMO.U6FxUhnhjQhSJ9ei9AHIppTUFJg.kS',
          name: 'Admin Frado',
        },
        {
          email: 'skm@golapasbwi.com',
          password: '$2b$10$1TD4BMqr4RvRxEwPckiLGe3QffVdWTgsjkLHGwfs4ZhaWP1S3EHrS',
          name: 'Admin Rizam',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
