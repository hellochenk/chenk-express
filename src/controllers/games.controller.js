const db = require('../db/index')

// controller ...
const createGame = async (req, res) => {
    // console.log('body', req.body)
    const { game, user, connect, price, mark, date } = req.body;
    let result = await db.models.games.create({
        Game: game, 
        User: user, 
        Connect: connect, 
        Price: price, 
        Mark: mark, 
        Date: date
    })
    if(result) {
        res.send({type: 'success'});
    } else {
        res.send({type: 'fail'});
    }
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
    let result = await db.models.games.findAll({
        attributes: ['Game', 'User', 'Connect', 'Price', 'Mark', 'Date'],
    });
    if(result) {
        res.send({type: 'success', result});
    } else {
        res.send({type: 'fail', result});
    }
}

const testGame = async (req, res) => {
    console.log('testGame some games');
    res.send(`testGame games`);
}


module.exports = {
    createGame,
    deleteGame,
    updateGame,
    fetchGame,
    testGame
}