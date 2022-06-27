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
