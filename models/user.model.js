var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDetails = new Schema({

	first_name: String,
	last_name: String,
	dob: Date,

});

module.exports = mongoose.model('Users', userDetails);