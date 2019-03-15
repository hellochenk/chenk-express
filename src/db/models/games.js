const Users = (sequelize, DataTypes) => {
    return sequelize.define("games", {
        Game: DataTypes.STRING,
        User: DataTypes.STRING,
        Connect: DataTypes.STRING,
        Price: DataTypes.STRING,
        Mark: DataTypes.STRING,
        Date: DataTypes.STRING,
        Valid: DataTypes.STRING,
    })
}
// game, user, connect, price, mark, date

module.exports = Users;