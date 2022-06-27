module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('surveys', {
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
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      age: {
        allowNull: false,
        type: DataTypes.ENUM('20', '21-40', '41-60', '60+'),
      },
      job: {
        allowNull: false,
        type: DataTypes.ENUM(
          'Pelajar/Mahasiswa', 
          'Pegawai Negeri', 
          'Pegawai Swasta', 
          'TNI/Polri',
          'Wiraswasta',
          'Lainnya'
        ),
      },
      disuruh: {
        allowNull: false,
        type: DataTypes.ENUM('Ya', 'Tidak'),
      },
      suggestion: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      satisfaction: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('surveys')
  },
}
