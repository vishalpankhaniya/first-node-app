var mongoose= require("mongoose");
var Schema=mongoose.Schema;

var productSchema=new Schema({

	pname: String,
	price: String,
	qun: Number
});

module.exports = mongoose.model('product',productSchema);