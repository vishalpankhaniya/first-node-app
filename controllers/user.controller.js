var userModel = require('../models/user.model');
let userController = {};

userController.addUser = function(req,res){

	var user = new userModel(req.body);

	user.save(function(err,savedUser){
		console.log(err,savedUser);
		res.send(savedUser);
		console.log(savedUser);
	})
console.log(req.body);
}


userController.deleteUser = function(req,res){
	// console.log(req.body);
	var userid = req.body._id;
	userModel.deleteone({_id: userid},function(err,deleteUser){
		console.log(deleteUser);
		res.send(deleteUser);
	})
}
userController.updateUser = function(req,res){

	var user = req.body._id;
	userModel
	.findAndUpdate({_id: userid},req.body,{upsert:true},function(err,updatedUser){
		console.log(updatedUser);
		res.send(updatedUser);
	})
}
userController.getUserById=function(req,res){

	userModel.find({_id: req.params.id},function(err,foundUser)
	{
		res.send(err || foundUser);
	})
}

userController.getUsers = function(req,res){
	userModel
	.find({})
	.populate('post')
	.exec(function(err,users){
		res.send({users:users});
	})
}
module.exports = userController;