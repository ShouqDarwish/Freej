
const mongoose = require('mongoose');

const itemSchema = mongojs.Schema({
  title: String,
  description: String,
});


var Item = mongoose.model('Items', itemSchema);
var i = new Item({title: "Recycling initiative",
description:"Watre bottles"});
i.save(function(err) {
    if(err) console.log('Error on save' + err);
});
module.exports = mongoose.model('item', itemSchema);
