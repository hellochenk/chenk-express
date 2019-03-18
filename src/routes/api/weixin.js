var express = require('express');
var router = express.Router();
// const gameController = require('../../controllers/games.controller');


/* GET users listing. */
router.get('/test', (req, res) => {
    console.log('req.body', req.body);

    res.send('test request')
});
// router.post('/createGame', gameController.createGame);
// router.get('/updateGame', gameController.updateGame);
// router.get('/deleteGame', gameController.deleteGame);
// router.post('/testGame', gameController.testGame);



// router.get('/cool', function(req, res, next) {
//   res.send('wooooo, cooooooooooooooool');
// });

module.exports = router;
