
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	user_id: mongoose.Schema.ObjectId,
  	user: { type: mongoose.Schema.ObjectId, ref: 'user' },
  	item_id: mongoose.Schema.ObjectId,
    item: { type: mongoose.Schema.ObjectId, ref: 'item' },
	content: String ,
	date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('comment', commentSchema);
