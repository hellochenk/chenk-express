var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');

// databases;
const Mydb = require('./db/index');
// 引入路由
const createRouter = require('./routes/index');
const startApp = async () => {
	let app = express();

	// view engine setup
	app.set('views', path.join(__dirname, './views'));
	app.set('view engine', 'jade');

	// 应用使用的中间件
	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(compression());  //Compress all routes
	app.use(helmet())
	app.use(express.static(path.join(__dirname, './public')));

	// 添加路由
	await createRouter(app);
	// 启动 db，引入 model
	await Mydb.initDb();

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		next(createError(404));
	});

	// error handler
	app.use(function(err, req, res, next) {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		// render the error page
		res.status(err.status || 500);
		res.render('error');
	});
	// $ DEBUG=express-locallibrary-tutorial:* npm run devstart

	return app
}

module.exports = startApp;
