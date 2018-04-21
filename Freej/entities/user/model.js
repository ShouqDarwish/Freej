
const mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
	name: String,
  	email: String,
    emp_id: String,
    localAuth:{
    	password: String
    },
  	googleAuth: {
  		id          : String,
        token        : String
  	}
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.localAuth.password);
};



module.exports = mongoose.model('user', userSchema);
