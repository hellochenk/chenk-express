
const Users = (sequelize, DataTypes) => {
    return sequelize.define("users", {
        title: DataTypes.STRING,
        data: DataTypes.STRING,
        ware: DataTypes.STRING,
    })
}

module.exports = Users;
