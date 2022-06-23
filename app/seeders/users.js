module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'rizam.admin@fradotech.id',
          password: '$2b$10$NteiAbfGrOjh76Wne204Z.M5HeFP.Yzc5s8so6k0opoCzmu0k.q3W', // fradoo
          name: 'Admin Rizam',
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
