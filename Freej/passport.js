// Passport configuration 

const getUser = require('./entities/user/controller').getUser;

const passportConfig = (passport) => {

	// passport session setup

	// used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        getUser(id).then(
        (user) => { done(null, user); },
        (error) => { done(error); });
    });
};


module.exports = passportConfig;