# chenk-express

### 这是一个简易node程序，
#### 1.clone到本地后，安装npm 依赖
#### 2.确保已安装mysql 数据库（其他数据库也可以，因为使用了sequelize，请确保sequelize支持你的数据库）

#### 调整配置文件，在chenk-express目录下创建config.js
```javascript
module.exports = {
    port: 'perver port',
    dbName: 'your databases like mysql ',
    tablesName: 'your table name',
    dbUser: 'db user',
    dbPassWord: 'db user password'
}
```

#### 3.执行npm dev or npm start启动
