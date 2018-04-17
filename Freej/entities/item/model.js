
const mongoose = require('mongoose');

var mongoDB = 'mongodb://shouq:Capstone1@ds237489.mlab.com:37489/freej';
mongoose.connect(mongoDB);
var db = mongoose.connection;
 
 db.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(callback) {
     console.log("Connected to MongoDB");
 });


const itemSchema = mongoose.Schema({
  title: String,
  description: String,
});


// var Item = mongoose.model('item', itemSchema);
// var i = new Item({title: "Recycling initiative",
// description:"Water bottles"});
// i.save(function(err) {
//     if(err) console.log('Error on save' + err);
// });

module.exports = mongoose.model('item', itemSchema);
