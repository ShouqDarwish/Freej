// modules for express
var morgan = require('morgan');
var bodyParser = require('body-parser');


// express configurations
const expressConfig = (app) => {


	// apply route configs
	require('./routes')(app);
};

module.exports = expressConfig;