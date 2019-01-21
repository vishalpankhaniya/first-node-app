var postModel = require('../models/post.model');
var userModel = require('../models/user.model');
let postController = {};


postController.addPost = function(req,res){
	console.log("req.body = ",req.body);
	var userid = req.body.user_id;
	var post = new postModel(req.body);
	post.save(function(err,savedPost){
		console.log("post");
		userModel.find({_id: userid},function(err,user){
			user = user[0];
			user.post.push(savedPost._id);
			user.save(function(req,savedUser){
				res.send(savedUser);
			})
		})
	})
}


postController.deletePost = function(req,res){

	var user = new postModel(req.body);
	postModel.remove({_id: userid},function(err,deleteUser){
		console.log(err,deleteUser);
		res.send(deleteUser)
	})
}
postController.updatePost = function(req,res){

	var user = req.body._id;
	postModel
	.findAndUpdate({_id: userid},req.body,{upsert:true},function(err,updatedUser){
		console.log(updatedUser);
		res.send(updatedUser);
	})
}
postController.getPostById=function(req,res){

	postModel.find({_id: req.params.id},function(err,foundUser)
	{
		res.send(err || foundUser);
	})
}

postController.getPosts = function(req,res){
	postModel.find({},function(err,users){
		res.send({users:users});
	})
}


module.exports = postController;