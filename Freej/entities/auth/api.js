
const passportLocalAuth = require('./controller').passportLocalAuth();
const passportGoogleAuth = require('./controller').passportGoogleAuth();


const authAPI = (app,passport) => {

	  // local route for signup
    app.post('/auth/signup', passport.authenticate('local-signup'), function(req, res) {
  	 // If this function gets called, authentication was successful.  
  	 res.send('local sign up successful');  
    });

	  // local route for login
    app.post('/auth/login', passport.authenticate('local-login'), function(req, res) {
  	 // If this function gets called, authentication was successful.    
  	 console.log(req.user);
  	 res.send('local login successful'); 
    });

    // Authenticating user using google
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback', passport.authenticate('google'), function(req,res){
    	console.log(req.user);
  	 res.send('google login successful'); 
    });

  	// route for logging out
	app.get('/auth/logout', function(req, res) {
        req.logout();
    //  res.redirect('/');
    });

};


module.exports = authAPI;

// middleware to check if user is logged in

// function isLoggedIn(req, res, next) {

// // if user is authenticated in the session, carry on
// 	if (req.isAuthenticated())
// 	    return next();
// // if they aren't redirect them to the home page
// 	    res.redirect('/');
// };
