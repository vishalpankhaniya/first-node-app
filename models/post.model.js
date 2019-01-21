var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postDetails = new Schema({

	title: String,
	author: String	

});

module.exports = mongoose.model('Post', postDetails);
