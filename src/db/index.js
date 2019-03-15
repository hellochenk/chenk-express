const createDb = require('./create');
const Sequelize = require('Sequelize');
const path = require('path');
const fs = require('fs');
const models = {}

const initDb = async () => {
    const modelsPath = './models';
    const sequelizeInstance = createDb();
    console.log('connect databases success!');

    const files = await fs.readdirSync(path.resolve(__dirname, modelsPath));
    files.map(item => {
        // console.log(item)
        // console.log(path.join(__dirname,`${modelsPath}/${item}`))
        // 导入自定义模型
        let model = sequelizeInstance.import(path.join(__dirname,`${modelsPath}/${item}`));
        models[model.name] = model;
    })

    if(process.env.NODE_ENV === 'development') {
        console.log('当前开发模式，同步数据库表格!')
        await sequelizeInstance.sync();
    }

    models.sequelizeInstance = sequelizeInstance;

    return models;
};

module.exports = {
    initDb,
    models
};

// class Db{
//     constructor() {
//         this.sequelizeInstance = createDb();
//         this.models = {}
//     }
    
//     async importModel() {
//         const files = await fs.readdirSync(path.resolve(__dirname, modelsPath));
//         files.map(item => {
//             // console.log(item)
//             // console.log(path.join(__dirname,`${modelsPath}/${item}`))
//             // 导入自定义模型
//             let model = this.sequelizeInstance.import(path.join(__dirname,`${modelsPath}/${item}`));
//             this.models[model.name] = model;
//         })
//     }

//     async importDb() {
//         // 模型使用 sequelize.define('name', {attributes}, {options}) 来定义.
//         await this.importModel();
//         console.log('import tables success!')
//         // console.log('init db success');
        
//         // console.log(this.db)

//         // sync when we need to use
//         // this.models.users.sync().then(() => {
//         //     console.log('同步表格完成')
//             // 表已创建
//             // return this.models.users.create({
//             //     title: 'lol',
//             //     data: 'just test',
//             //     ware: 'loooooooooooool'
//             // });
//         // });
//         // let result = await this.models.users.findOne({ where: {title: 'chenk'} });
//         // console.log(result)
//         // const Op = Sequelize.Op;

//         // this.models.users
//         //     .findAll({

//             // .findAll
//             // .findAll({
//                 // order: ['title', 'DESC'],
//                 // attributes: ['foo', 'bar'],
//             // .findAndCountAll({
//                 // where: {
//                 //     data: {
//                 //         [Op.regexp]: '^[ha]'
//                 //     }
//                 // },
//             //     offset: 0,
//             //     limit: 10
//             // })
//             // .then(result => {
//             //     console.log('result', result);
//             // });
//     }

//     async initDb() {
//         await this.importModel();
//         console.log('import tables success!');
//         let syncResult = await this.sequelize.sync({force: false}); // force: true 如果表已经存在，将会丢弃表
//         // console.log(syncResult)
//         console.log('sync databases success');
//         process.exit(0);
//     }
// }