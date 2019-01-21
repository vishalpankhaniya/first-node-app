var exp = require('express');
var mongoose = require('mongoose');
var userController = require('./controllers/user.controller');
var postController = require('./controllers/post.controller');

var bodyParser = require('body-parser');
var app = exp();
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true})
.then(() => console.log("Connected"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());


app.post('/user',userController.addUser);
app.delete('/user',userController.deleteUser);
app.put('/user',userController.updateUser);
app.get('/user/:id',userController.getUserById);
app.get('/user',userController.getUsers);

app.post('/post',postController.addPost);
app.delete('/post',postController.deletePost);
app.put('/post',postController.updatePost);
app.get('/post/:id',postController.getPostById);
app.get('/post',postController.getPosts);

app.listen(4000);