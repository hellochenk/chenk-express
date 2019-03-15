const db = require('../db/index')

// controller ...
const createGame = async (req, res) => {
    console.log('create some one');
    res.send(`createGame games`);
	// let result = await db.models.users.findOne({
	// 	where: {title: 'chenk'}
	// })
	// res.send(`test home ${JSON.stringify(result)}`);
}

const deleteGame = async (req, res) => {
    console.log('delete some one');
    res.send(`deleteGame games`);
}

const updateGame = async (req, res) => {
    console.log('update some one');
    res.send(`updateGame games`);
}

const fetchGame = async (req, res) => {
    console.log('search some games');
    res.send(`test games`);
}


module.exports = {
    createGame,
    deleteGame,
    updateGame,
    fetchGame
}