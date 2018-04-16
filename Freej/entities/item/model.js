
const mongoose = require('mongoose');

var mongoDB = 'mongodb://<FreejMongoose>:<Capstone1>@ds237489.mlab.com:37489/freej';
mongoose.connect(mongoDB);
//Get the default connection
var db = mongoose.connection;


const itemSchema = mongoose.Schema({
  title: String,
  description: String,
});


var Item = mongoose.model('item', itemSchema);
var i = new Item({title: "Recycling initiative",
description:"Water bottles"});
i.save(function(err) {
    if(err) console.log('Error on save' + err);
});


module.exports = mongoose.model('item', itemSchema);
