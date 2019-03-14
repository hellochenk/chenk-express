//todo create databases;
const path = require('path');
const Sequelize = require('sequelize');
const config = require(path.resolve(process.cwd(), 'config'))
// console.log('user config', config)

const CreateSequelize = () => {
    if(!config) {
      return console.log('请创建配置文件， 配置相应的dbName,dbUser, dbPassWord!')
    }
    console.log('connect databases...');
    return new Sequelize(config.dbName, config.dbUser, config.dbPassWord, {
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
