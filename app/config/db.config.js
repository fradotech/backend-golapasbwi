module.exports = {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    timezone: '+07:00',
    dialectOptions: {
      bigNumberStrings: true,
    },
    define: {
      freezeTableName: 1,
      created_at: 'created_at',
      updated_at: 'updated_at',
    },
  },
  production: {
    host: 'ec2-52-22-136-117.compute-1.amazonaws.com',
    port: 5432,
    database: 'd9h8vqoj0m349f',
    username: 'jocuxyptwjucjf',
    password: 'b05680fdea2528abc02cdacddeed8f9399ae542579e7d1892b49d0434ec46b3c',
    dialect: 'postgres',
    timezone: '+07:00',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      freezeTableName: 1,
      created_at: 'created_at',
      updated_at: 'updated_at',
    },
  },
}
