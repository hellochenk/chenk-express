var express = require('express');
var router = express.Router();
const gameController = require('../../controllers/games.controller')


/* GET users listing. */
router.get('/getGame', gameController.fetchGame);
router.get('/createGame', gameController.createGame);
router.get('/updateGame', gameController.updateGame);
router.get('/deleteGame', gameController.deleteGame);



// router.get('/cool', function(req, res, next) {
//   res.send('wooooo, cooooooooooooooool');
// });

module.exports = router;
