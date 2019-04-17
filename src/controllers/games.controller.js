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
        Date: date,
        Valid: '1'
    })
    if(result) {
        res.send({type: 'success'});
    } else {
        res.send({type: 'fail'});
    }
}

const deleteGame = async (req, res) => {

    // if(result) {
        // res.send({type: 'success'});
    // } else {
    //     res.send({type: 'fail'});
    // }
}

const updateGame = async (req, res) => {
    console.log('update some one');
    const { game, user, connect, price, mark, date } = req.body;
    let result = await db.models.games.update({
        Game: game, 
        User: user, 
        Connect: connect, 
        Price: price, 
        Mark: mark, 
        Date: date
    }, {
        where:{ id: req.body.id }
    });
    if(result) {
        res.send({status: 'success'});
    } else {
        res.send({status: 'fail'});
    }
}

const fetchGame = async (req, res) => {
    let result = await db.models.games.findAll({
        // where: {valid: '1'},
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