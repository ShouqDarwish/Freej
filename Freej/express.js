// modules for express
var morgan = require('morgan');
var bodyParser = require('body-parser');


// express configurations
const expressConfig = (app) => {


	// log server requests to console
	app.use(morgan('dev'));

	// apply body parser 
	app.use(bodyParser.json());
  	app.use(bodyParser.urlencoded({ extended: true }));


	// apply route configs
	require('./routes')(app);
};

module.exports = expressConfig;