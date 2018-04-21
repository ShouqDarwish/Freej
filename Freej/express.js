// modules for express
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');


// express configurations
const expressConfig = (app) => {

	// apply passport configs
  	require('./passport')(passport);

	//read cookies (needed for auth)
	app.use(cookieParser());

	//get information from html forms
	app.use(bodyParser.json());
  	app.use(bodyParser.urlencoded({ extended: true }));	

  	// session secret
  	app.use(session({secret: 'smartdubaigovernmentfreshgradguates', 
                 saveUninitialized: true,
                 resave: true}));

  	// use passport session
 	app.use(passport.initialize());

 	// persistent login sessions
 	app.use(passport.session());

 	// use connect-flash for flash messages stored in session
 	app.use(flash()); 

	// apply route configs
	require('./routes')(app,passport);

	// Logging using Morgan

	app.use(morgan('dev'));

};

module.exports = expressConfig;