const path = require('path');
const fs = require('fs')

const wiki = require('./api/wiki');
const games = require('./api/games');

const initRouter = async app => {
	console.log('start create router')
	try {
		// const files = await fs.readdirSync(path.resolve(__dirname, './api'));

		// console.log('files', files)
		// const files = await fs.('./api');
		// console.log('files', files)
		
		
		// app.use('/', indexRouter);
		// app.use('/users', usersRouter);
		app.use('/wiki', wiki);
		app.use('/api', games);


		// console.log('init router end')
	} catch (error) {
		console.log('error:', error)
	}
	return app
}

module.exports = initRouter;
