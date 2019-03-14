//todo create databases;

const Sequelize = require('sequelize');

const CreateSequelize = () => {
    console.log('create databases...');
    return new Sequelize('mytestdb', 'root', '123456', {
      host: 'localhost',
      dialect: 'mysql',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define: {
        timestamps: true // 默认为 true
      }
      // 仅限 SQLite
    //   storage: 'path/to/database.sqlite'
    });
}

module.exports = CreateSequelize;
