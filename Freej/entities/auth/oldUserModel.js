// var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt-nodejs');

// const userSchema = mongoose.Schema({
//     local            : {
//         email        : String,
//         password     : String,
//     },
//     google           : {
//         id           : String,
//         token        : String,
//         email        : String,
//         name         : String
//     }
// });

// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// // create the model and expose it 
// module.exports = mongoose.model('User', userSchema);


